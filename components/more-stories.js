import { stripHtml } from "string-strip-html";
import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 col-gap-8 row-gap-12 mb-32">
        {posts.map(({ node }) => {
          let excerpt = stripHtml(node.content || '').result
          excerpt = excerpt.replace(/\n|\r/g, " ");
          excerpt = excerpt.replace(/\s\s+/g, ' ');
          excerpt = excerpt.trim();
          const duplicated = excerpt.toLowerCase().includes(node.title.toLowerCase())
          excerpt.replace(node.title, '')
          excerpt = excerpt.substring(duplicated ? node.title.length : 0, Math.min(excerpt.length, 174)) + '...';
          excerpt = excerpt.trim();
          console.log({
            excerpt,
            duplicated,
            title: node.title
          })

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
