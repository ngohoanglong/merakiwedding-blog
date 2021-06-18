
import { getAppInfo, getKindWordsPageInfo } from '@lib/app';
import KindWords from '@templates/kind-words/KindWords';

export default KindWords

export async function getStaticProps(config) {
  const { galleries, app } = await getAppInfo(config)
  const result = await getKindWordsPageInfo(config)
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
    revalidate: 300
  }
}
