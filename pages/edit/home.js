
import { fetcher, getHomePageInfo } from "@lib/app";
import { withBuilderForm } from "@providers/tinacms/withBuilderForm";
import Home, { home_template } from "@templates/home/Home";

export default withBuilderForm({
  label: 'homepage',
  displayName: 'homepage',
  getPageInfo: getHomePageInfo,
  onSubmit: async (variables) => {
    const saveMutation = `
        mutation updateHomepage(
              $data: JSON
              $locale: String
          ) {
            updateHomepage(input: {data: {data: $data}} locale:$locale) {
                homepage{
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
  template: home_template,
})(Home)
export async function getStaticProps({ preview = false }) {
  return {
    props: { preview },
    revalidate: 300
  }
}
