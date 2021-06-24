
import { fetcher } from "@lib/app";
import { withBuilderForm } from "@providers/tinacms/withBuilderForm";
import GalleryDetail, { galleryDetail_template } from "@templates/galleryDetail/GalleryDetail";
const createPageId = router => {

  return `/gallery/${router.query.slug}`
}
export default withBuilderForm({
  label: 'galleryDetail',
  displayName: 'Gallery Details',
  createPageId,
  getPageInfo: async ({
    locale, router
  }) => {
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
          pageId: createPageId(router)
        }
      }
    )
    return pages && pages[0]
  },
  onSubmit: async (variables, pageInfo, router) => {
    console.log({ variables, pageInfo, router })
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
          title: `/gallery/${router.query.slug}`,
          pageId: createPageId(router),
          locale: router.locale
        }
      }
    );

  },
  template: galleryDetail_template,
})(GalleryDetail)
export async function getStaticProps({ preview = false }) {
  return {
    props: {},
  }
}
export const getStaticPaths = async () => {

  return {
    paths: [],
    fallback: true
  }
}
