import Head from 'next/head'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import { getAllPostsForHome } from '../lib/api'

export default function Index({ allPosts: { edges }, preview }) {
  const morePosts = edges
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>About us - Meraki Wedding Planner</title>
        </Head>
        <Intro />
        <div className="h-12 lg:h-32"></div>
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
