
import { getAllPostsForHome } from '@lib/api';
import { getAppInfo, getBlogPageInfo, getSeoApi } from '@lib/app';
import Blog, { blog_template } from '@templates/blog/Blog';

export default Blog

export async function getStaticProps(config) {
  const { galleries, app } = await getAppInfo(config)
  const { blog } = await getBlogPageInfo(config)
  const allPosts = await getAllPostsForHome(config.preview)
  let pageData = blog?.data || blog_template.defaultItem
  if (typeof pageData === 'string') {
    pageData = JSON.parse(pageData)
  }
  const router = {
    locale: config.locale
  }
  const seoInfo = await getSeoApi({
    locale: router.locale,
    router,
    id: '/blog',
  })
  const seo = seoInfo?.data || null
  if (typeof data === 'string') {
    seo = JSON.parse(data)
  }
  return {
    props: {
      source: {
        blog: {
          posts: allPosts?.edges || []
        },
        galleries, app, data: pageData, seo
      }
    },
    revalidate: 300
  }
}
