import { fetcher, getAppInfo, getSeoApi } from '@lib/app'
import GalleryDetail from '@templates/galleryDetail/GalleryDetail'
const createPageId = (router) => {
  return `/gallery/${router.query.slug}`
}
const getPageInfo = async ({ locale, id }) => {
  const { pages } = await fetcher({
    query: `
        query getPageInfo($locale:String $pageId:String ){
          pages(locale:$locale where:{pageId:$pageId} sort:"created_at:DESC" limit:1){
            data
            title
             pageId
          }
        }
      `,
    variables: {
      locale,
      pageId: id,
    },
  })
  return pages && pages[0]
}
export default GalleryDetail
export async function getStaticProps(config) {
  const id = createPageId({
    query: {
      slug: config?.params?.slug,
    },
  })
  const { galleries, app } = await getAppInfo(config)
  const seo =
    (await getSeoApi({
      ...config,
      id,
      router: {
        query: {
          slug: config?.params?.slug,
        },
      },
    })) || {}
  const result = await getPageInfo({
    ...config,
    router: {
      query: {
        slug: config?.params?.slug,
      },
    },
    id,
  })
  let pageData = result?.data || {}
  if (typeof pageData === 'string') {
    pageData = JSON.parse(pageData)
  }

  return {
    props: {
      source: {
        galleries,
        app,
        data: pageData,
        seo,
      },
    },
    revalidate: 60,
  }
}
// export async function getStaticPaths({ locales }) {
//   const { app = {} } = await getAppInfo({ locale: "en" })
//   const gallery = get(app, 'data.gallery', [])
//   return {
//     paths: locales
//       ? locales.reduce((arr, locale) => {
//         // Add a product path for every locale
//         gallery.forEach((item) => {
//           arr.push(`/${locale}${item.url}`)
//         })
//         return arr
//       }, [])
//       : gallery.map((item) => `${item.url}`),
//     fallback: 'blocking',
//   }
// }
export async function getStaticPaths({ locales }) {
  return {
    paths: [],
    fallback: true,
  }
}
