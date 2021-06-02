import { stripHtml } from "string-strip-html";
import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 col-gap-8 row-gap-12 mb-32">
        {posts.map(({ node }) => {
          let excerpt = stripHtml(node.content || '').result
          const duplicated = excerpt.includes(node.title)
          excerpt = excerpt.substring(duplicated ? node.title.length + 1 : 0, Math.min(excerpt.length, 174)) + '...';
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
    </section>
  )
}
