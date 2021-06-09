import Layout from '@components/layout'
import Home from '@templates/home/Home'
import Head from 'next/head'
import { getAllPostsForHome } from '../lib/api'

export default function Index({ allPosts: { edges }, preview }) {
  const morePosts = edges
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blog - Meraki Wedding Planner</title>
          <link rel="icon" href="/favicon.png" sizes="32x32"></link>
        </Head>
        <Home />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 300
  }
}
