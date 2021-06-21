import NextLink from "next/link";
import React from "react";
function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}
export const Link = React.forwardRef(({ href, ...props }, ref) => {
  // const cms = useSource();
  const cms = false
  const isExternal = isValidHttpUrl(href)
  if (isExternal)
    return <a href={href} target="_blank" rel="noreferrer" {...props} ></a>
  return <NextLink ref={ref} href={cms ? `/edit${href}` : href} >
    <a {...props} ></a>
  </NextLink>;
});
Link.displayName = "CustomLink"
