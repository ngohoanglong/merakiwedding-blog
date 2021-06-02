import Link from 'next/link'
import Date from '../components/date'
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      </div>
      <h3 className="text-xl leading-snug font-serif capitalize">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a
            className="hover:underline leading-relaxed"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div className="mb-4 text-sm text-gray-600">
        <Date dateString={date} />
      </div>
      <div
        className="leading-relaxed mb-3 text-sm"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <div>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="underline text-xs font-serif">Read more »</a>
        </Link>
      </div>
    </div>
  )
}
