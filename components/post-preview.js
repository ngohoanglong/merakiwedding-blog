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
  const href = `https://merakiweddingplanner.com/${slug}`
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} coverImage={coverImage} href={href} />
      </div>
      <h3 style={{ fontWeight: 200 }} className="text-xl leading-snug text-prata capitalize">
        <a href={href}
          className="hover:underline leading-relaxed"
          dangerouslySetInnerHTML={{ __html: title }}
        ></a>
      </h3>
      <div className="mb-4 text-sm text-gray-600">
        <Date dateString={date} />
      </div>
      <div
        className="leading-relaxed mb-3 text-sm font-light  "
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <div>
        <a href={href} className="underline hover:text-primary text-xs text-prata">Read more »</a>
      </div>
    </div>
  )
}
