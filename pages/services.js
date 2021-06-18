
import { getAppInfo, getServicePageInfo } from '@lib/app';
import Services from '@templates/services/Services';

export default Services

export async function getStaticProps(config) {
  const { galleries, app } = await getAppInfo(config)
  const result = await getServicePageInfo(config)
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
