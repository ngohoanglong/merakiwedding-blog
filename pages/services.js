
import Services from "@templates/services/Services";
import { fetchGraphql } from 'react-tinacms-strapi';

export default (props) => {
  return <Services {...props} />
}
export async function getStaticProps({ locale, preview = false }) {
  try {
    const pageResults = await fetchGraphql(
      process.env.STRAPI_URL,
      `
          query{
            app(locale: "${locale}"){
              data
            }
            galleries(locale: "${locale}"){
              title
              locale
              couples
              slug
              photo{
                url
                alternativeText
              }
            }
            service(locale: "${locale}"){
              data
            }
          }
      `
    );
    const { galleries, app, service } = pageResults.data;
    let pageData = service?.data
    if (typeof pageData === 'string') {
      pageData = JSON.parse(pageData)
    }
    return {
      props: { preview, pageData: { galleries, app, service: pageData } },
      revalidate: 300
    }
  } catch (error) {
    return {
      props: { preview, pageData: {} },
      revalidate: 300
    }
  }
}
