import { getAllPostsWithSlug, getPostAndMorePosts } from '@lib/api'
import { getAppInfo } from "@lib/app"
import SourceProvider from "@providers/source"
import { Image } from 'meraki/components/Image'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from '../../components/container'
import Layout from '../../components/layout'
import PostBody from '../../components/post-body'
import PostTitle from '../../components/post-title'


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
                  <link rel='stylesheet' id='elementor-icons-css' href='https://merakiweddingplanner.com/wp-content/themes/astra/assets/css/minified/style.min.css?ver=3.4.8' media='all' />
                  <link rel='stylesheet' id='elementor-icons-css' href='https://merakiweddingplanner.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.11.0' media='all' />
                  <link rel='stylesheet' id='elementor-animations-css' href='https://merakiweddingplanner.com/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.2.4' media='all' />
                  <link rel='stylesheet' id='elementor-frontend-legacy-css' href='https://merakiweddingplanner.com/wp-content/plugins/elementor/assets/css/frontend-legacy.min.css?ver=3.2.4' media='all' />
                  <link rel='stylesheet' id='elementor-frontend-css' href='https://merakiweddingplanner.com/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.2.4' media='all' />
                  <link rel='stylesheet' id={`elementor-post-` + post.databaseId + `-css`} href={`https://merakiweddingplanner.com/wp-content/uploads/elementor/css/post-` + post.databaseId + `.css?ver=1625218922`} media='all' />
                  <link rel="preconnect" href="https://fonts.googleapis.com" />
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
                  <style>
                    {
                      `
                        .entry-title a, .entry-content h1, h2, .entry-content h2, h3, .entry-content h3, h4, .entry-content h4, h5, .entry-content h5, h6, .entry-content h6 {
                          color: #3a3a3a;
                      }
                      `
                    }
                  </style>
                </Head>
                <div style={{ zIndex: "-1" }} className="fixed inset-0">
                  <Image src="/IMG_8890.JPG" />
                </div>
                <div className=" pb-12 lg:py-12 lg:pb-32">
                  <div>
                    <div className="p-6 bg-white py-12 rounded-lg lg:y-24 ">
                      <PostBody content={post.content} />
                    </div>
                  </div>
                </div>
              </article>
            </>
          )}
        </Container>
      </Layout>
    </SourceProvider>
  )
}

export async function getStaticProps(config) {
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
