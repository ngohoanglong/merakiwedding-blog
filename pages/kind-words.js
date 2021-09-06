
import { getAppInfo, getKindWordsPageInfo, getSeoApi } from '@lib/app';
import KindWords from '@templates/kind-words/KindWords';

export default KindWords

export async function getStaticProps(config) {
  const { galleries, app } = await getAppInfo(config)
  const result = await getKindWordsPageInfo(config)
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
    id: '/kind-words',
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
