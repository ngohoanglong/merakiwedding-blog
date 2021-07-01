
import { getAppInfo, getGalleryPageInfo } from '@lib/app';

export default () => {
  return <div className='fixed inset-0 flex'>
    <div style={{ width: "375px" }} className="overflow-hidden w-full">
      <iframe width="100%" height="100%" src="/edit/gallery/showcase" />
    </div>
    <div className="w-px flex flex-col bg-element-4 h-full"></div>
    <div className="overflow-hidden flex-1 h-full">
      <iframe width="100%" height="100%" src="/edit/gallery/showcase" />
    </div>
  </div>
}

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
