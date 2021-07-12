import NextImage from "next/image";
const breakpoints = {
  // xlarge: 1920,
  large: 1600,
  medium: 750,
  small: 500,
  // xsmall: 64
}
const strapiLoader = ({ src, width, quality }) => {

  let size = "large"
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
  return src.replace('/uploads/', '/uploads/' + size + '_')
}

export const Image = ({ src, alt = "Meraki wedding planner image", variant, placeholder = "blur", ...rest }) => {
  let sizes = "(min-width: 1100px) 535px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)";
  // const enable = src && src.includes('strapi.merakiweddingplanner.com/uploads/')
  switch (variant) {
    case 'cover':
      sizes = "(min-width: 1100px) 100vw, 100vw";
      break;
    case 'card':
      sizes = "(min-width: 1100px) 535px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)";
      break;
    case 'card-large':
      sizes = "(min-width: 1100px) 535px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)";
      break;
    default:
      sizes = "(min-width: 1100px) 535px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)";
      break;
  }
  return (
    <NextImage
      key={src}
      // loader={enable ? variant !== "cover" ? strapiLoader : coverLoader : undefined}
      layout="fill"
      src={src && src || '/logo.png'}
      alt={alt || 'Meraki Image'}
      sizes={sizes}
      placeholder={src && placeholder}
      blurDataURL={placeholder && "/bg_blog.png"}
      objectFit="cover"
      quality={85}
      objectPosition="bottom center"
      {...rest} />
  );
};
