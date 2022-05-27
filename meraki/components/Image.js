import { getThumb } from '@providers/tinacms/helpers'
import NextImage from 'next/image'


// @todo replace the url to the one on env
const myLoader = ({ src, width, quality }) => {
  if (
    src.indexOf('strapi.merakiweddingplanner') !== -1 ||
    src.indexOf('wp-content') !== -1
  ) {
    return `https://imageproxy.hieunguyen.dev/api/images/dfgbpib38/image/upload/w_${width},f_auto/${src.replace(
      'https://strapi.merakiweddingplanner.com/',
      ''
    )}`
  } else {
    return `/_next/image?url=${src}&w=${width}&q=${quality || 80}`
  }
}


export const Image = ({
  src,
  alt,
  variant = 'card-large',
  priority,
  placeholder = 'blur',
  ...rest
}) => {
  let sizes

  switch (variant) {
    case 'cover':
      sizes = '(max-width: 384px) 100vw, 100vw'
      break
    case 'card':
      sizes = '(max-width: 384px) 400px, 600px'
      break
    case 'card-large':
      sizes =
        '(max-width: 384px) 400px,(max-width: px) 500px,(max-width: 1400px) 960px, 960px'
      break
    default:
      sizes = '(max-width: 384px) 800px, 800px'
      break
  }
  return (
    <NextImage
      key={src}
      loader={myLoader}
      layout="fill"
      src={(src && src) || '/logo.png'}
      alt={alt || 'Meraki Image'}
      sizes={sizes}
      placeholder={src && placeholder}
      blurDataURL={placeholder && getThumb(src)}
      quality="80"
      objectFit="cover"
      objectPosition="bottom center"
      {...rest}
    />
  )
}
