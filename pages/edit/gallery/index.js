
import { fetcher, getGalleryPageInfo } from "@lib/app";
import { withBuilderForm } from "@providers/tinacms/withBuilderForm";
import Gallery, { gallery_template } from "@templates/gallery/Gallery";

export default withBuilderForm({
  label: 'gallery',
  displayName: 'Gallery',
  getPageInfo: getGalleryPageInfo,
  onSubmit: async (variables, pageInfo) => {
    const saveMutation = `
        mutation updateGallery(
              $data: JSON
              $id: ID!
          ) {
              updatePage(input: {data: {data: $data} where :{id:$id}} ) {
                  page{
                      id
                      title
                      data
                  }
              }
        }`;
    return await fetcher(
      {
        query: saveMutation,
        variables: {
          ...variables,
          id: pageInfo.id
        }
      }
    );
  },
  template: gallery_template,
})(Gallery)
export async function getStaticProps({ preview = false }) {
  return {
    props: { preview, },
    revalidate: 300
  }
}
