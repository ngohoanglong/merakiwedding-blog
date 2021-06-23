import { getThumb } from "@providers/tinacms/helpers";
import NextImage from "next/image";
const breakpoints = {
  // xlarge: 1920,
  large: 1000,
  medium: 750,
  small: 500,
  // xsmall: 64
}
const strapiLoader = ({ src, width, quality }) => {
  const enable = src && src.includes('strapi.merakiweddingplanner.com/uploads/')
  if (!enable) return src
  let size
  switch (true) {
    case width < breakpoints.small:
      size = 'small'
      break;
    case width < breakpoints.medium:
      size = 'medium'
      break;
    case width < breakpoints.large:
      size = 'large'
    default:
      break;
  }
  if (!size) return src
  return src.replace('/uploads/', '/uploads/' + size + '/')
}
export const Image = ({ src, alt, variant, priority, placeholder, ...rest }) => {
  let sizes = "(max-width: 400px) 300px, 800px";
  switch (variant) {
    case 'cover':
      sizes = "(max-width: 400px) 800px, 1400px";
      break;
    case 'card':
      sizes = "(max-width: 400px) 400px, 400px";
      break;
    case 'card-large':
      sizes = "(max-width: 400px) 400px, 800px";
      break;
    default:
      break;
  }
  return (
    <NextImage
      key={src}
      loader={strapiLoader}
      layout="fill"
      src={src && src || '/logo.png'}
      alt={alt || 'Meraki Image'}
      sizes={sizes}
      placeholder={src && placeholder}
      blurDataURL={placeholder && getThumb(src)}
      priority={priority}
      objectFit="cover"
      objectPosition="center center"
      {...rest} />
  );
};
