
import { getAppInfo, getHomePageInfo } from '@lib/app';
import Home from '@templates/home/Home';

export default Home

export async function getStaticProps(config) {
  const { galleries, app } = await getAppInfo(config)
  const result = await getHomePageInfo(config)
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
