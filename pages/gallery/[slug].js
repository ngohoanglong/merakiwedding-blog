
import { fetcher, getAppInfo } from "@lib/app";
import GalleryDetail from "@templates/galleryDetail/GalleryDetail";
const createPageId = router => {
  return `/gallery/${router.query.slug}`
}
const getPageInfo = async ({
  locale, router
}) => {
  const { pages } = await fetcher(
    {
      query: `
        query getPageInfo($locale:String $pageId:String ){
          pages(locale:$locale where:{pageId:$pageId} sort:"created_at:DESC" limit:1){
            data
            title
             pageId
          }
        }
      `
      , variables: {
        locale,
        pageId: createPageId(router)
      }
    }
  )
  return pages && pages[0]
}
export default GalleryDetail
export async function getStaticProps(config) {
  const { galleries, app } = await getAppInfo(config)
  const result = await getPageInfo({
    ...config,
    router: {
      query: {
        slug: config?.params?.slug
      }
    }
  })
  let pageData = result?.data || {}
  if (typeof pageData === 'string') {
    pageData = JSON.parse(pageData)
  }

  return {
    props: {
      source: {
        galleries, app, data: pageData
      }
    },
    revalidate: 60
  }
}
export const getStaticPaths = async () => {

  return {
    paths: [],
    fallback: true
  }
}