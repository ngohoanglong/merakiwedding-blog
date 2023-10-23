import { fetcher } from '@lib/app'
import { withBuilderForm } from '@providers/tinacms/withBuilderForm'
import About, { about_template } from '@templates/about.new/About'
const createPageId = (router) => {
  return `/about`
}
export default withBuilderForm({
  label: 'about',
  displayName: 'About',
  getPageInfo: async ({ locale, router }) => {
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
        locale,
        pageId: createPageId(router),
      },
    })
    result = pages && pages[0]
    if (!result) {
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
    }
    return result
  },
  onSubmit: async (variables, pageInfo, router) => {
    // console.log({ variables, pageInfo, router })
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
        title: `/gallery/${router.query.slug}`,
        pageId: createPageId(router),
        locale: router.locale,
      },
    })
  },
  template: about_template,
})(About)

export async function getStaticProps({ preview = false }) {
  try {
    return {
      props: { preview },
      revalidate: 300,
    }
  } catch (error) {
    return {
      props: { preview },
      revalidate: 300,
    }
  }
}
