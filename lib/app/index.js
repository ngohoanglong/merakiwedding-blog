import { fetchGraphql } from 'react-tinacms-strapi'

export const fetcher = async ({
  url = process.env.STRAPI_URL,
  query,
  variables,
}) => {
  // console.log({ variables })
  try {
    const result = await fetchGraphql(url, query, variables)
    const { data, errors } = result
    // console.log({ result })
    if (errors) {
      console.error(errors)
      throw new Error(JSON.stringify(errors))
    }
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getAppInfo = async ({ locale }) => {
  // console.log({ locale })
  return await fetcher({
    query: `query getAppInfo($locale:String){
        app(locale: $locale){
          data
        }
        galleries(locale: "en"){
          title
          locale
          couples
          slug
          photo{
            url
            alternativeText
          }
        }
      }`,
    variables: {
      locale,
    },
  })
}
export const getHomePageInfo = async ({ locale }) => {
  const { data } = await fetcher({
    query: `
        query getPageInfo($locale:String){
          data: homepage(locale: $locale){
            data
          }
        }
      `,
    variables: {
      locale,
    },
  })
  return data
}
export const getAboutPageInfo = async ({ locale }) => {
  const { data } = await fetcher({
    query: `
        query getPageInfo($locale:String){
          data: about(locale: $locale){
            data
          }
        }
      `,
    variables: {
      locale,
    },
  })
  return data
}
export const getServicePageInfo = async ({ locale }) => {
  const { data } = await fetcher({
    query: `
        query getPageInfo($locale:String){
          data: service(locale: $locale){
            data
          }
        }
      `,
    variables: {
      locale,
    },
  })
  return data
}
export const getBlogPageInfo = async ({ locale }) => {
  return await fetcher({
    query: `
        query getBlogPageInfo($locale:String){
          blog(locale: $locale){
            data
          }
        }
      `,
    variables: {
      locale,
    },
  })
}

export const getKindWordsPageInfo = async ({ locale }) => {
  const { kindWord } = await fetcher({
    query: `
        query getPageInfo($locale:String){
          kindWord(locale: $locale){
            data
          }
        }
      `,
    variables: {
      locale,
    },
  })
  return kindWord
}

export const getContactPageInfo = async ({ locale }) => {
  const { contact } = await fetcher({
    query: `
        query getPageInfo($locale:String){
          contact(locale: $locale){
            data
          }
        }
      `,
    variables: {
      locale,
    },
  })
  return contact
}
export const getPageInfoBySlug = async ({ locale, slug }) => {
  const { pages } = await fetcher({
    query: `
        query getPageInfo($locale:String $pageId:String){
          pages(locale: $locale where:{pageId: $pageId}){
            id
            title
            slug
            data
            locale
          }
        }
      `,
    variables: {
      locale,
      pageId: slug,
    },
  })
  return pages && pages[0]
}
export const getGalleryPageInfo = async ({ locale }) => {
  return await getPageInfoBySlug({ locale, slug: 'gallery' })
}
export const getGalleryPageInfoBySlug = async ({ locale, router }) => {
  const { pages } = await fetcher({
    query: `
        query getGalleryPageInfoBySlug($locale:String $slug:String){
          galleries(locale:$locale where:{slug:$slug} ){
            data
            title
            pages{
              id,
              title
            }
            active_page{
              id
              title
              data
            }
          }
        }
      `,
    variables: {
      locale,
      slug: router?.query?.slug,
    },
  })
  return pages && pages[0] && pages[0]?.gallery?.active_page
}

// mmutation
export const updatePageInfo = async (variables, pageInfo) => {
  // console.log({ variables, pageInfo })
  const saveMutation = `
      mutation updatePage(
            $data: JSON
            $id: ID!
        ) {
            updatePage(input: {data: {data: $data} where :{id:$id}} ) {
                page{
                    id
                    title
                    data
                }
            }
      }`
  return await fetcher({
    query: saveMutation,
    variables: {
      ...variables,
      id: pageInfo.id,
    },
  })
}

export const updateSeoApi = async (variables, router, id) => {
  let pageId = 'seo:' + id
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
      title: pageId,
      pageId,
      locale: router.locale,
    },
  })
}
export const getSeoApi = async ({ router, id }) => {
  let pageId = 'seo:' + id
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
      locale: router.locale,
      pageId,
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
        pageId,
      },
    })
    result = pages && pages[0]
  }
  return result
}

export const createGetPageInfo = (createId = (locale, router) => router.pathname) => async ({
  locale, router
}) => {
  let pageId = createId(locale, router)
  let result
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
        pageId
      }
    }
  )
  result = pages && pages[0]
  if (!result) {
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
          locale: "en",
          pageId
        }
      }
    )
    result = pages && pages[0]
  }
  return result
}