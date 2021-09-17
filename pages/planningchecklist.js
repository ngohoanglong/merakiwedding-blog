
import { createGetPageInfo, getAppInfo, getSeoApi } from '@lib/app';
import PlanningChecklist from '@templates/planningchecklist/PlanningChecklist';

export default PlanningChecklist
const getPageInfo = createGetPageInfo(() => 'planningchecklist')
export async function getStaticProps(config) {
  const id = 'planningchecklist'
  const { galleries, app } = await getAppInfo(config)
  const seo =
    (await getSeoApi({
      ...config,
      id,
      router: {
        query: {
          slug: config?.params?.slug,
        },
      },
    })) || {}
  const result = await getPageInfo({
    ...config,
    id,
  })
  let pageData = result?.data || {}
  if (typeof pageData === 'string') {
    pageData = JSON.parse(pageData)
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
