import { getAppInfo, getSeoApi } from '@lib/app'
import About from '@templates/about.new/About'
const createPageId = (router) => {
  return `/about`
}
const getAboutPageInfo = async ({ locale, router }) => {
  let result
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
      pageId: createPageId(router),
    },
  })
  result = pages && pages[0]
  if (!result) {
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
        locale: 'en',
        pageId: createPageId(router),
      },
    })
    result = pages && pages[0]
  }
  return result
}
export default About
export async function getStaticProps(config) {
  const { galleries, app } = await getAppInfo(config)
  const result = await getAboutPageInfo(config)
  const router = {
    locale: config.locale,
  }
  const seoInfo = await getSeoApi({
    locale: router.locale,
    router,
    id: '/about',
  })
  const seo = seoInfo?.data || null
  if (typeof data === 'string') {
    seo = JSON.parse(data)
  }
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
    revalidate: 300,
  }
}
