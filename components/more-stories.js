import { useRouter } from "next/router";
import { stripHtml } from "string-strip-html";
import PostPreview from '../components/post-preview';
import { RouterPaginate } from './paginate';
const perPage = 6
const fixExcerpt = node => {
  let excerpt = stripHtml(node.content || '').result
  excerpt = excerpt.replace(/\n|\r/g, " ");
  excerpt = excerpt.replace(/\s\s+/g, ' ');
  excerpt = excerpt.trim();
  const duplicated = excerpt.toLowerCase().includes(node.title.toLowerCase())
  excerpt.replace(node.title, '')
  excerpt = excerpt.substring(duplicated ? node.title.length : 0, Math.min(excerpt.length, 174)) + '...';
  excerpt = excerpt.trim();
  return excerpt
}
export default function MoreStories({ posts = [] }) {
  const { query, } = useRouter()
  const { page = 1, ...rest } = query
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-12 lg:gap-y-24 mb-32 ">
        {posts.filter((item, i) => {
          const from = perPage * (page - 1)
          const to = from + 6
          return i >= from && i < to
        }).map(({ node }) => {
          const excerpt = fixExcerpt(node)
          return (
            <PostPreview
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage?.node}
              date={node.date}
              author={node.author?.node}
              slug={node.slug}
              excerpt={excerpt}
            />
          )
        })}
      </div>
      <div className="w-full flex justify-center items-center">
        <RouterPaginate
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          scroll={false}
          shallow={true}
          pageCount={Math.ceil(posts.length / perPage)} />
      </div>
    </section>
  );
}
