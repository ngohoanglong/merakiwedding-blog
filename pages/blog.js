
import { getAllPostsForHome } from '@lib/api';
import { getAppInfo, getBlogPageInfo } from '@lib/app';
import Blog, { blog_template } from '@templates/blog/Blog';

export default function Index({ locale, galleries, pageData, preview }) {
  return <Blog source={pageData} />
}

export async function getStaticProps(config) {
  const { galleries, app } = await getAppInfo(config)
  const { blog } = await getBlogPageInfo(config)
  const allPosts = await getAllPostsForHome(config.preview)

  let pageData = blog?.data || blog_template.defaultItem
  if (typeof pageData === 'string') {
    pageData = JSON.parse(pageData)
  }

  return {
    props: {
      pageData: {
        blog: {
          posts: allPosts?.edges || []
        },
        galleries, app, data: pageData
      }
    },
    revalidate: 300
  }
}
