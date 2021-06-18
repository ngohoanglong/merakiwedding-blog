
import { getAboutPageInfo, getAppInfo } from "@lib/app";
import About from "@templates/about/About";

export default About
export async function getStaticProps(config) {
  const { galleries, app } = await getAppInfo(config)
  const result = await getAboutPageInfo(config)
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
