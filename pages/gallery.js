
import { fetcher, getAppInfo, getGalleryPageInfo, getSeoApi } from '@lib/app';
import Gallery, { gallery_template } from '@templates/gallery/Gallery';
const builderFormConfig = {
  label: 'gallery',
  displayName: 'Gallery',
  getPageInfo: getGalleryPageInfo,
  onSubmit: async (variables, pageInfo) => {
    const saveMutation = `
        mutation updateGallery(
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
  },
  template: gallery_template,
}
Gallery.builderFormConfig = builderFormConfig

export default Gallery

export async function getStaticProps(config) {
  const { galleries, app } = await getAppInfo(config)
  const result = await getGalleryPageInfo(config)
  let pageData = result?.data || {}
  if (typeof pageData === 'string') {
    pageData = JSON.parse(pageData)
  }
  const router = {
    locale: config.locale
  }
  const seoInfo = await getSeoApi({
    locale: router.locale,
    router,
    id: '/gallery',
  })
  const seo = seoInfo?.data || null
  if (typeof data === 'string') {
    seo = JSON.parse(data)
  }
  return {
    props: {
      source: {
        galleries, app, data: pageData, seo
      }
    },
    revalidate: 300
  }
}
