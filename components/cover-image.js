import cn from 'classnames'
import Image from 'next/image'

export default function CoverImage({ title, coverImage, href, slug }) {
  const image = coverImage?.sourceUrl ? (
    <Image
      layout="responsive"
      height={371}
      width={557}
      alt={title}
      src={coverImage?.sourceUrl}
      sizes="(max-width: 640) 640px, 416px"
      className={cn('shadow-small object-cover', {
        'hover:shadow-medium transition-shadow duration-200 bg-accent-2': slug,
      })}
    />
  ) : null
  return (
    <div className="sm:mx-0">
      {href ? (
        <a href={href} aria-label={title}>
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  )
}
