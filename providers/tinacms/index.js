import { LongBlocksFieldPlugin } from '@lib/tina/BlocksFieldPlugin'
import LocalProvider from '@providers/local'
import Cookies from 'js-cookie'
import { get } from 'lodash'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { HtmlFieldPlugin, MarkdownFieldPlugin } from 'react-tinacms-editor'
import {
  StrapiClient,
  StrapiMediaStore,
  StrapiProvider,
  STRAPI_JWT,
} from 'react-tinacms-strapi'
import { TinaCMS, TinaProvider } from 'tinacms'

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
  async list(options) {
    const offset = options?.offset ?? 0
    const limit = options?.limit ?? 50

    const authToken = Cookies.get(STRAPI_JWT)
    const response = await fetch(
      `${this.strapiUrl}/upload/files?_sort=updated_at:DESC`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    )

    if (response.status != 200) {
      throw Error(response.statusText)
    }
    const mediaData = await response.json()
    const nextOffset = offset + limit

    return {
      items: mediaData.slice(offset, limit + offset).map(this.strapiToTina),
      nextOffset: nextOffset < mediaData.length ? nextOffset : undefined,
    }
  }
}
function BuilderProvider({ children }) {
  const { locale, query, isReady } = useRouter()
  const { tina_strapi_jwt } = query
  useEffect(() => {
    if (tina_strapi_jwt) {
      document.cookie = `tina_strapi_jwt=${tina_strapi_jwt}; expires=2023-06-03T09:40:20.000Z ;path=/`
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
  }, [cms.fields, cms.plugins])
  if (!isReady) return null
  return (
    <TinaProvider cms={cms}>
      <LocalProvider initialLocale={locale}>
        <StrapiProvider>{children}</StrapiProvider>
      </LocalProvider>
    </TinaProvider>
  )
}

export default BuilderProvider
