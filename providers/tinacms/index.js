import LocalProvider from "@providers/local";
import { get } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { HtmlFieldPlugin, MarkdownFieldPlugin } from 'react-tinacms-editor';
import {
  StrapiClient, StrapiMediaStore,
  StrapiProvider
} from 'react-tinacms-strapi';
import { TinaCMS, TinaProvider } from 'tinacms';
import {LongBlocksFieldPlugin} from "@lib/tina/BlocksFieldPlugin";


export class MyMediaStore extends StrapiMediaStore {
  strapiToTina = (item) => {
    return {
      id: '' + item.id, // Media["id"] should probably be `string | number`
      type: 'file',
      directory: '/uploads',
      filename: item.hash + item.ext + `?${item.id}`,
      previewSrc: this.strapiUrl + get(item, 'formats.thumbnail.url', item.url),
    }
  }
}
function BuilderProvider({ children }) {
  const { locale, query, isReady } = useRouter()
  const { tina_strapi_jwt } = query
  useEffect(() => {
    if (tina_strapi_jwt) {
      document.cookie = `tina_strapi_jwt=${tina_strapi_jwt}; expires=2023-06-03T09:40:20.000Z ;path=/`;
    }
  }, [tina_strapi_jwt])
  const cms = useMemo(
    () =>
      new TinaCMS({
        sidebar: true,
        enabled: true,
        apis: {
          strapi: new StrapiClient(process.env.STRAPI_URL),
        },
        media: new MyMediaStore(process.env.STRAPI_URL),
      }),
    []
  )
  useEffect(() => {
    cms.plugins.add(MarkdownFieldPlugin)
    cms.plugins.add(HtmlFieldPlugin)
    cms.fields.add(LongBlocksFieldPlugin)
  }, [])
  if (!isReady) return null
  return <TinaProvider cms={cms}>
    <LocalProvider initialLocale={locale}>
      <StrapiProvider>
        {children}
      </StrapiProvider>
    </LocalProvider>
  </TinaProvider>
}

export default BuilderProvider
