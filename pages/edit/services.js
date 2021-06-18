
import { fetcher, getServicePageInfo } from "@lib/app";
import { withBuilderForm } from "@providers/tinacms/withBuilderForm";
import Services, { service_template } from "@templates/services/Services";

export default withBuilderForm({
  label: 'services',
  displayName: 'services',
  getPageInfo: getServicePageInfo,
  onSubmit: async (variables) => {
    const saveMutation = `
        mutation updateService(
              $data: JSON
              $locale: String
          ) {
            updateService(input: {data: {data: $data}} locale:$locale) {
                service{
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
  template: service_template,
})(Services)
export async function getStaticProps({ preview = false }) {
  return {
    props: { preview },
    revalidate: 300
  }
}