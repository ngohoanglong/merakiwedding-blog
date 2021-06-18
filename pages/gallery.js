
import { getAppInfo, getGalleryPageInfo } from '@lib/app';
import Gallery from '@templates/gallery/Gallery';

export default Gallery

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
