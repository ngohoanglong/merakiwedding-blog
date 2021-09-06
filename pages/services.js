
import { getAppInfo, getSeoApi, getServicePageInfo } from '@lib/app';
import Services from '@templates/services/Services';

export default Services

export async function getStaticProps(config) {
  const { galleries, app } = await getAppInfo(config)
  const result = await getServicePageInfo(config)
  let pageData = result?.data || {}
  if (typeof pageData === 'string') {
    pageData = JSON.parse(pageData)
  }
  const router = {
    locale: config.locale
  }
  const seoInfo = await getSeoApi({
    locale: router.locale,
    router,
    id: '/services',
  })
  const seo = seoInfo?.data || null
  if (typeof data === 'string') {
    seo = JSON.parse(data)
  }
  return {
    props: {
      source: {
        galleries, app, data: pageData, seo
      }
    },
    revalidate: 300
  }
}
