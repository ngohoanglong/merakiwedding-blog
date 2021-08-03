import { getPostAndMorePosts } from '@lib/api'
import { fetcher, getAppInfo, getSeoApi } from '@lib/app'
import PostDetail from '@templates/postDetail/PostDetail'

const createPageId = (router) => {
  return `/post/${router.query.slug}`
}
const getPageInfo = async ({ locale, router, id }) => {
  const { pages } = await fetcher({
    query: `
        query getPageInfo($locale:String $pageId:String ){
          pages(locale:$locale where:{pageId:$pageId} sort:"created_at:DESC" limit:1){
            data
            title
             pageId
          }
        }
      `,
    variables: {
      locale,
      pageId: id,
    },
  })
  return pages && pages[0]
}

export async function getStaticProps(config) {
  const router = {
    query: {
      slug: config?.params?.slug,
    },
  }
  const id = createPageId(router)
  const { params, preview = false, previewData } = config
  const data = await getPostAndMorePosts(params.slug, preview, previewData)
  const { galleries, app } = await getAppInfo(config)
  const seo =
    (await getSeoApi({
      ...config,
      id,
      router: {
        query: {
          slug: config?.params?.slug,
        },
      },
    })) || {}
  const result = await getPageInfo({
    ...config,
    locale: 'en',
    id,
    router: {
      query: {
        slug: config?.params?.slug,
      },
    },
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
        galleries,
        app,
        data: pageData,
        post: data.post,
        seo,
        posts: data.posts,
      },
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default PostDetail
