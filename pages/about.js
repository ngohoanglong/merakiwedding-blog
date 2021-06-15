
import About from "@templates/about/About";
import { fetchGraphql } from 'react-tinacms-strapi';

export default (props) => {
  return <About {...props} />
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
          about(locale: "${locale}"){
            data
          }
        }
      `
    );
    const { galleries, app, about } = pageResults.data;

    let pageData = about?.data
    if (typeof pageData === 'string') {
      pageData = JSON.parse(pageData)
    }
    return {
      props: {
        preview, pageData: {
          galleries, app, about: pageData
        }
      },
      revalidate: 300
    }
  } catch (error) {
    return {
      props: { preview, pageData: {} },
      revalidate: 300
    }
  }
}
