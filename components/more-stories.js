import { fixExcerpt } from "@lib/post";
import { useRouter } from "next/router";
import PostPreview from '../components/post-preview';
import { RouterPaginate } from './paginate';
const perPage = 6

export default function MoreStories({ posts = [] }) {
  const { query, locale } = useRouter()
  const { page = 1, ...rest } = query
  let data = []
  if (locale === "vi") {
    data = posts.filter(item => item?.node?.categories && JSON.stringify(item?.node?.categories).includes("Vietnamese"))
  }
  if (locale === "en") {
    data = posts.filter(item => item?.node?.categories && JSON.stringify(item?.node?.categories).includes("English"))
  }
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-12 lg:gap-y-24 mb-32 ">
        {data.filter((item, i) => {
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
          pageCount={Math.ceil(data.length / perPage)} />
      </div>
    </section>
  );
}
