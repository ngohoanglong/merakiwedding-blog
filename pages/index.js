import Head from 'next/head'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {
  const morePosts = edges.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
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
