
import { getAllPostsForHome } from "@lib/api";
import { fetcher } from '@lib/app';
import { withBuilderForm } from "@providers/tinacms/withBuilderForm";
import PlanningChecklist, { planningchecklist_template } from '@templates/planningchecklist/PlanningChecklist';


export default withBuilderForm({
  label: 'planningchecklist',
  displayName: 'PlanningChecklist',
  getPageInfo: async ({
    locale, router
  }) => {
    let result
    const { pages } = await fetcher(
      {
        query: `
          query getPageInfo($locale:String $pageId:String ){
            pages(locale:$locale where:{pageId:$pageId} sort:"created_at:DESC" limit:1){
              data
              title
               pageId
            }
          }
        `
        , variables: {
          locale,
          pageId: 'planningchecklist'
        }
      }
    )
    result = pages && pages[0]
    if (!result) {
      const { pages } = await fetcher(
        {
          query: `
            query getPageInfo($locale:String $pageId:String ){
              pages(locale:$locale where:{pageId:$pageId} sort:"created_at:DESC" limit:1){
                data
                title
                 pageId
              }
            }
          `
          , variables: {
            locale: "en",
            pageId: 'planningchecklist'
          }
        }
      )
      result = pages && pages[0]
    }
    return result
  },
  onSubmit: async (variables, pageInfo, router) => {
    const createPageMutation = `
     mutation createPage(
           $data: JSON
           $title:String
           $pageId:String
           $locale:String
       ) {
         createPage(input: {data: {data: $data locale:$locale title:$title pageId:$pageId} } ) {
               page{
                 id
                 title
                 data
                 pageId
                 locale
               }
           }
     }`;
    return await fetcher(
      {
        query: createPageMutation,
        variables: {
          ...variables,
          title: `/planningchecklist`,
          pageId: 'planningchecklist',
          locale: router.locale
        }
      }
    );
  },
  template: planningchecklist_template,
})(PlanningChecklist)
export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { preview, planningchecklist: { posts: allPosts?.edges || [] } },
    revalidate: 300
  }
}

