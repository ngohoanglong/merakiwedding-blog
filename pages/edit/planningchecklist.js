
import { getAllPostsForHome } from "@lib/api";
import { createGetPageInfo, fetcher } from '@lib/app';
import { withBuilderForm } from "@providers/tinacms/withBuilderForm";
import PlanningChecklist, { planningchecklist_template } from '@templates/planningchecklist/PlanningChecklist';


export default withBuilderForm({
  label: 'planningchecklist',
  displayName: 'PlanningChecklist',
  getPageInfo: createGetPageInfo(() => 'planningchecklist'),
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

