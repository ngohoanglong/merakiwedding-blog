
import { getAllPostsForHome } from "@lib/api";
import { fetcher, getBlogPageInfo } from "@lib/app";
import { withBuilderForm } from "@providers/tinacms/withBuilderForm";
import Blog, { blog_template } from "@templates/blog/Blog";

export default withBuilderForm({
  label: 'blog',
  displayName: 'Blog',
  getPageInfo: getBlogPageInfo,
  onSubmit: async (variables) => {
    const saveMutation = `
        mutation updateBlog(
              $data: JSON
              $locale: String
          ) {
              updateBlog(input: {data: {data: $data}} locale:$locale) {
                  blog{
                      data
                  }
              }
        }`;
    return await fetcher(
      {
        query: saveMutation,
        variables
      }
    );
  },
  template: blog_template,
})(Blog)
export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { preview, blog: { posts: allPosts?.edges || [] } },
    revalidate: 300
  }
}
