import { getThumb } from "@providers/tinacms/helpers";
import NextImage from "next/image";

export const Image = ({ src, alt, variant, priority, placeholder = "blur", ...rest }) => {
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
      layout="fill"
      src={src || '/logo.png'}
      alt={alt || 'Meraki Image'}
      sizes={sizes}
      placeholder={src && placeholder}
      blurDataURL={placeholder && getThumb(src)}
      priority={priority}
      objectFit="cover"
      objectPosition="bottom center"
      {...rest} />
  );
};
