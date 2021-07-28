import { getThumb } from '@providers/tinacms/helpers';
import NextImage from 'next/image';
const breakpoints = {
  // xlarge: 1920,
  large: 1600,
  medium: 750,
  small: 500,
  // xsmall: 64
}

// @todo replace the url to the one on env
const myLoader = ({ src, width, quality }) => {
  if (src.indexOf('strapi.merakiweddingplanner') !== -1 || (src.indexOf('wp-content') !== -1)) {
    return `https://res.cloudinary.com/dfgbpib38/image/upload/w_${width}/${src.replace('https://strapi.merakiweddingplanner.com/', '')}`;
  } else {
    return `/_next/image?url=${src}&w=${width}&q=${quality || 80}`
  }
}

// const strapiLoader = ({ src, width, quality }) => {

//   let size
//   switch (true) {
//     case width < breakpoints.small:
//       size = 'small'
//       break;
//     case width < breakpoints.medium:
//       size = 'medium'
//       break;
//     case width < breakpoints.large:
//       size = 'large'
//     default:
//       break;
//   }
//   if (!size) return src
//   return src.replace('/uploads/', '/uploads/' + size + '_')
// }
export const Image = ({
  src,
  alt,
  variant = 'card-large',
  priority,
  placeholder = 'blur',
  ...rest
}) => {
  let sizes
  // '(max-width: 400px) 300px, 800px'
  // const enable =
  //   src &&
  //   src.includes(
  //     'strapi.merakiweddingplanner.com/uploads/'
  //   )
  switch (variant) {
    case 'cover':
      sizes =
        '(max-width: 384px) 100vw, 100vw'
      break
    case 'card':
      sizes =
        '(max-width: 384px) 400px, 600px'
      break
    case 'card-large':
      sizes =
        '(max-width: 384px) 400px,(max-width: px) 500px,(max-width: 1400px) 960px, 960px'
      break
    default:
      sizes =
        '(max-width: 384px) 800px, 1400px'
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
      blurDataURL={
        placeholder && getThumb(src)
      }
      quality="80"
      objectFit="cover"
      objectPosition="bottom center"
      {...rest}
    />
  )
}
