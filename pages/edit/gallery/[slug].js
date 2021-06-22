
import { fetcher, getGalleryPageInfoBySlug } from "@lib/app";
import { withBuilderForm } from "@providers/tinacms/withBuilderForm";
import GalleryDetail, { galleryDetail_template } from "@templates/galleryDetail/GalleryDetail";

export default withBuilderForm({
  label: 'galleryDetail',
  displayName: 'Gallery Details',
  getPageInfo: getGalleryPageInfoBySlug,
  onSubmit: async (variables, pageInfo, router) => {
    console.log({ variables, pageInfo, router })
    const createPageMutation = `
        mutation createPage(
              $data: JSON
          ) {
            createPage(input: {data: {data: $data} } ) {
                  page{
                    id
                      title
                      data
                  }
              }
        }`;
    const { createPage } = await fetcher(
      {
        query: createPageMutation,
        variables: {
          ...variables,
          title: 'gallery.' + router?.query?.slug
        }
      }
    );
    console.log({ createPage })
    const { updateGallery } = await fetcher(
      {
        query: `mutation updateGalllery (){
          updateGallery(input:{data:{active_page:$active_page}}){
            gallery{
              id,
              title
              active_page
            }
          }
        }`,
        variables: {
          active_page: createPage?.page?.id
        }
      }
    );
    console.log({ createPage, updateGallery })
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
