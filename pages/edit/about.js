
import { fetcher, getAboutPageInfo } from "@lib/app";
import { withBuilderForm } from "@providers/tinacms/withBuilderForm";
import About, { about_template } from "@templates/about/About";

export default withBuilderForm({
  label: 'about',
  displayName: 'About',
  getPageInfo: getAboutPageInfo,
  onSubmit: async (variables) => {
    const saveMutation = `
        mutation updateAbout(
              $data: JSON
              $locale: String
          ) {
              updateAbout(input: {data: {data: $data}} locale:$locale) {
                  about{
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
  template: about_template,
})(About)


export async function getStaticProps({ preview = false }) {
  try {

    return {
      props: { preview },
      revalidate: 300
    }
  } catch (error) {
    return {
      props: { preview, },
      revalidate: 300
    }
  }
}
