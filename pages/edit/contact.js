
import { getAllPostsForHome } from "@lib/api";
import { fetcher, getContactPageInfo } from "@lib/app";
import { withBuilderForm } from "@providers/tinacms/withBuilderForm";
import Contact, { contact_template } from "@templates/contact/Contact";

export default withBuilderForm({
  label: 'contact',
  displayName: 'Contact',
  getPageInfo: getContactPageInfo,
  onSubmit: async (variables) => {
    const saveMutation = `
        mutation updateContact(
              $data: JSON
              $locale: String
          ) {
              updateContact(input: {data: {data: $data}} locale:$locale) {
                  contact{
                      data
                  }
              }
        }`;
    return await fetcher(
      {
        query: saveMutation,
        variables
      }
    );
  },
  template: contact_template,
})(Contact)
export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { preview, contact: { posts: allPosts?.edges || [] } },
    revalidate: 300
  }
}
