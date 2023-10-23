import { getAboutPageInfo, getAppInfo, getSeoApi } from '@lib/app'
import About from '@templates/about.new/About'

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
