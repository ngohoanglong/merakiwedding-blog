import LocalProvider from "@providers/local";
import { get } from "lodash";
import { useRouter } from "next/router";
import { useMemo } from "react";
import {
  StrapiClient, StrapiMediaStore,
  StrapiProvider
} from 'react-tinacms-strapi';
import { TinaCMS, TinaProvider } from 'tinacms';
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
  const { locale } = useRouter()
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

  return <TinaProvider cms={cms}>
    <LocalProvider initialLocale={locale}>
      <StrapiProvider>
        {children}
      </StrapiProvider>
    </LocalProvider>

  </TinaProvider>
}

export default BuilderProvider
