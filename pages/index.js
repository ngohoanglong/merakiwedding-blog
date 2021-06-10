
import Layout from "@components/layout";
import { getAllPostsForHome } from '@lib/api';
import Home from '@templates/home/Home';
import Head from 'next/head';
import { fetchGraphql } from 'react-tinacms-strapi';

export default function Index({ allPosts: { edges }, pageData, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Home - Meraki Wedding Planner</title>
          <link rel="icon" href="/favicon.png" sizes="32x32"></link>
        </Head>
        <Home post={pageData} />
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

  const pageData = JSON.parse(pageResults.data.homepage.data);
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, pageData, preview },
    revalidate: 300
  }
}
