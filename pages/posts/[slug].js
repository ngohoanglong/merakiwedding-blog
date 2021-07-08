import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '@lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'

import {getAppInfo} from "@lib/app";
import SourceProvider, { useSource } from "@providers/source";

export default function Post({ post, posts, preview, source }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
      <SourceProvider source={{
        en: source
      }}>
        <Layout preview={preview}>
          <Container>

            {router.isFallback ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <>
                <article>
                  <Head>
                    <title>
                      {post.title}
                    </title>
                    <meta
                      property="og:image"
                      content={post.featuredImage?.node?.sourceUrl}
                    />
                    <link rel='stylesheet' id='elementor-icons-css'  href='https://merakiweddingplanner.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.11.0' media='all' />
                    <link rel='stylesheet' id='elementor-animations-css'  href='https://merakiweddingplanner.com/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.2.4' media='all' />
                    <link rel='stylesheet' id='elementor-frontend-legacy-css'  href='https://merakiweddingplanner.com/wp-content/plugins/elementor/assets/css/frontend-legacy.min.css?ver=3.2.4' media='all' />
                    <link rel='stylesheet' id='elementor-frontend-css'  href='https://merakiweddingplanner.com/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.2.4' media='all' />
                    <link rel='stylesheet' id={`elementor-post-`+post.databaseId+`-css`}  href={`https://merakiweddingplanner.com/wp-content/uploads/elementor/css/post-`+post.databaseId+`.css?ver=1625218922`} media='all' />

                  </Head>
                  <PostBody content={post.content} />
                </article>


              </>
            )}
          </Container>
        </Layout>
      </SourceProvider>
  )
}

export async function getStaticProps( config) {
  const { params, preview = false, previewData } = config;
  const data = await getPostAndMorePosts(params.slug, preview, previewData)
  const { galleries, app } = await getAppInfo(config)
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      source: {
        galleries, app
      }
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}
