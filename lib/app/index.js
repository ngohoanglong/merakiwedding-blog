import { fetchGraphql } from "react-tinacms-strapi";

export const fetcher = async ({
  url = process.env.STRAPI_URL,
  query,
  variables
}) => {
  try {
    const result = await fetchGraphql(
      url,
      query,
      variables
    )
    const { data, errors } = result

    if (errors) {
      console.error(errors);
      throw new Error(JSON.stringify(errors))
    }
    return data
  } catch (error) {
    console.error(error);
    throw new Error(error)
  }

}

export const getAppInfo = async ({
  locale,
}) => {
  return await fetcher(
    {
      query: `query getAppInfo($locale:String){
        app(locale: $locale){
          data
        }
        galleries(locale: $locale){
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
        locale
      }
    }
  )
}
export const getHomePageInfo = async ({
  locale,
}) => {
  const { data } = await fetcher(
    {
      query: `
        query getPageInfo($locale:String){
          data: homepage(locale: $locale){
            data
          }
        }
      `
      , variables: {
        locale
      }
    }
  )
  return data
}
export const getAboutPageInfo = async ({
  locale,
}) => {
  const { data } = await fetcher(
    {
      query: `
        query getPageInfo($locale:String){
          data: about(locale: $locale){
            data
          }
        }
      `
      , variables: {
        locale
      }
    }
  )
  return data
}
export const getServicePageInfo = async ({
  locale,
}) => {
  const { data } = await fetcher(
    {
      query: `
        query getPageInfo($locale:String){
          data: service(locale: $locale){
            data
          }
        }
      `
      , variables: {
        locale
      }
    }
  )
  return data
}
export const getBlogPageInfo = async ({
  locale,
}) => {
  return await fetcher(
    {
      query: `
        query getBlogPageInfo($locale:String){
          blog(locale: $locale){
            data
          }
        }
      `
      , variables: {
        locale
      }
    }

  )
}

export const getKindWordsPageInfo = async ({
  locale,
}) => {
  const { kindWord } = await fetcher(
    {
      query: `
        query getPageInfo($locale:String){
          kindWord(locale: $locale){
            data
          }
        }
      `
      , variables: {
        locale
      }
    }

  )
  return kindWord
}

export const getContactPageInfo = async ({
  locale,
}) => {
  const { contact } = await fetcher(
    {
      query: `
        query getPageInfo($locale:String){
          contact(locale: $locale){
            data
          }
        }
      `
      , variables: {
        locale
      }
    }

  )
  return contact
}
export const getPageInfoBySlug = async ({
  locale,
  slug
}) => {
  // console.log((locale, slug));
  const { pages } = await fetcher(
    {
      query: `
        query getPageInfo($locale:String $slug:String){
          pages(locale: $locale where:{slug: $slug}){
            id
            title
            slug
            data
            locale
          }
        }
      `
      , variables: {
        locale,
        slug
      }
    }
  )
  return pages && pages[0]
}
export const getGalleryPageInfo = async ({
  locale,
}) => {
  return await getPageInfoBySlug({ locale, slug: "gallery" })
}
export const getGalleryPageInfoBySlug = async ({
  locale, router
}) => {
  console.log({ router, locale, slug: "gallery." + router.query.slug });
  return await getPageInfoBySlug({ locale, slug: "gallery." + router.query.slug })
}

// mmutation 
export const updatePageInfo = async (variables, pageInfo) => {
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
      }`;
  return await fetcher(
    {
      query: saveMutation,
      variables: {
        ...variables,
        id: pageInfo.id
      }
    }
  );
}