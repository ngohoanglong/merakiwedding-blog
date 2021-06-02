import cn from 'classnames'

export default function CoverImage({ title, coverImage, href, slug }) {
  const image = (
    <img
      src={coverImage?.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {href ? (
        <a href={href} aria-label={title}>{image}</a>
      ) : (
        image
      )}
    </div>
  )
}
