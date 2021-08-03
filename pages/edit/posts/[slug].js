import { getPostAndMorePosts } from '@lib/api'
import { fetcher, getAppInfo } from '@lib/app'
import { withBuilderForm } from '@providers/tinacms/withBuilderForm'
import PostDetail, {
  postDetail_template,
} from '@templates/postDetail/PostDetail'

const createPageId = (router) => {
  return `/post/${router.query.slug}`
}
export default withBuilderForm({
  label: 'post detail',
  displayName: 'Post detail',
  createPageId,
  getPageInfo: async ({ router }) => {
    let result
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
        locale: 'en',
        pageId: createPageId(router),
      },
    })
    result = pages && pages[0]
    return result
  },
  onSubmit: async (variables, pageInfo, router) => {
    const createPageMutation = `
        mutation createPage(
              $data: JSON
              $title:String
              $pageId:String
              $locale:String
          ) {
            createPage(input: {data: {data: $data locale:$locale title:$title pageId:$pageId} } ) {
                  page{
                    id
                    title
                    data
                    pageId
                    locale
                  }
              }
        }`
    return await fetcher({
      query: createPageMutation,
      variables: {
        ...variables,
        title: createPageId(router),
        pageId: createPageId(router),
        locale: 'en',
      },
    })
  },
  template: postDetail_template,
})(PostDetail)
export async function getStaticProps(config) {
  const { params, preview = false, previewData } = config
  const data = await getPostAndMorePosts(params.slug, preview, previewData)
  const { galleries, app } = await getAppInfo(config)
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      source: {
        galleries,
        app,
      },
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}
