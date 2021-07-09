import { getAllPostsWithSlug, getPostAndMorePosts } from '@lib/api'
import { fetcher, getAppInfo } from "@lib/app"
import PostDetail from '@templates/postDetail/PostDetail'

const createPageId = router => {
  return `/post/[slug]`
}
const getPageInfo = async ({
  locale, router
}) => {
  const { pages } = await fetcher(
    {
      query: `
        query getPageInfo($locale:String $pageId:String ){
          pages(locale:$locale where:{pageId:$pageId} sort:"created_at:DESC" limit:1){
            data
            title
             pageId
          }
        }
      `
      , variables: {
        locale,
        pageId: createPageId(router)
      }
    }
  )
  return pages && pages[0]
}

export async function getStaticProps(config) {
  const { params, preview = false, previewData } = config;
  const data = await getPostAndMorePosts(params.slug, preview, previewData)
  const { galleries, app } = await getAppInfo(config)
  const result = await getPageInfo({
    ...config,
    locale: "en",
    router: {
      query: {
        slug: config?.params?.slug
      }
    }
  })
  let pageData = result?.data || {}
  if (typeof pageData === 'string') {
    pageData = JSON.parse(pageData)
  }
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      source: {
        galleries, app, data: pageData, post: data.post,
        posts: data.posts,
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

export default PostDetail