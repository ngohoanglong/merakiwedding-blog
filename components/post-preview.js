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
  const href = `/posts/${slug}`
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} coverImage={coverImage} href={href} />
      </div>
      <h3 className="text-xl font-sweetsans leading-snug">
        <a href={href}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></a>
      </h3>
      <div className="mb-4 mt-2 text-sm font-garamond italic">
        <Date dateString={date} />
      </div>
      <div
        className="leading-relaxed mb-3 text-sm font-light text-justify "
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <div>
        <a href={href} className="hover:text-primary text-xl font-garamond italic">Read more »</a>
      </div>
    </div>
  )
}
