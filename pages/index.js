
import Layout from "@components/layout";
import Home from '@templates/home/Home';
import Head from 'next/head';
import { fetchGraphql } from 'react-tinacms-strapi';

export default function Index({ locale, galleries, pageData, preview }) {
  return (
    <>
      <Layout preview={preview} locale={locale}>
        <Head>
          <title>Home - Meraki Wedding Planner</title>
          <link rel="icon" href="/favicon.png" sizes="32x32"></link>
        </Head>
        <Home post={pageData} galleries={galleries} />
      </Layout>
    </>
  )
}

export async function getStaticProps(props) {
  const { locale, preview = false } = props
  console.log({ props })
  const pageResults = await fetchGraphql(
    process.env.STRAPI_URL,
    `
      query{
        homepage(locale: "${locale}"){
          data
        }
      }
    `
  );
  const galleryResults = await fetchGraphql(
    process.env.STRAPI_URL,
    `
        query{
          galleries{
            title
            locale
            couples
            photo{
              url
              alternativeText
            }
          }
        }
    `
  );
  const galleries = galleryResults.data.galleries;
  let pageData = {}
  try {
    if (typeof pageResults?.data?.homepage?.data === 'string') {
      pageData = (JSON.parse(pageResults?.data?.homepage?.data) || `{}`);
    }
    else {
      pageData = (pageResults?.data?.homepage?.data || {});
    }
  } catch (error) {
    console.error(error)
    pageData = {}
  }
  console.log({
    locale, pageResults, sd: pageResults?.data?.homepage?.data,
    pageData
  })
  return {
    props: { locale, galleries, pageData, preview },
    revalidate: 300
  }
}
