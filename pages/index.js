
import Layout from "@components/layout";
import Home from '@templates/home/Home';
import Head from 'next/head';
import { fetchGraphql } from 'react-tinacms-strapi';

export default function Index({ galleries, pageData, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Home - Meraki Wedding Planner</title>
          <link rel="icon" href="/favicon.png" sizes="32x32"></link>
        </Head>
        <Home post={pageData} galleries={galleries} />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const pageResults = await fetchGraphql(
    process.env.STRAPI_URL,
    `
        query{
            homepage {
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
  const pageData = JSON.parse(pageResults?.data?.homepage?.data || `{}`);
  return {
    props: { galleries, pageData, preview },
    revalidate: 300
  }
}
