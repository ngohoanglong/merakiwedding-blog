
import { getAppInfo, getGalleryPageInfo } from '@lib/app';
import ShowCase from '@templates/galleryDetail/blocks/ShowCase';

export default ShowCase

export async function getStaticProps(config) {
  const { galleries, app } = await getAppInfo(config)
  const result = await getGalleryPageInfo(config)
  let pageData = result?.data || {}
  if (typeof pageData === 'string') {
    pageData = JSON.parse(pageData)
  }

  return {
    props: {
      source: {
        galleries, app, data: pageData
      }
    },
    revalidate: 300
  }
}
