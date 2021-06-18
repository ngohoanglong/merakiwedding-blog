
import { getAppInfo, getContactPageInfo } from '@lib/app';
import Contact from '@templates/contact/Contact';

export default Contact

export async function getStaticProps(config) {
  const { galleries, app } = await getAppInfo(config)
  const result = await getContactPageInfo(config)
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
