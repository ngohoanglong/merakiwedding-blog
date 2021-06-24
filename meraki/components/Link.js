import NextLink from "next/link";
import { useRouter } from "next/router";
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
  const { locale } = useRouter()
  const cms = false
  const isExternal = isValidHttpUrl(href)
  if (isExternal)
    return <a href={href} target="_blank" rel="noreferrer" {...props} ></a>
  return <NextLink locale={locale} href={cms ? `/edit${href}` : href} >
    <a {...props} ></a>
  </NextLink>;
});
Link.displayName = "CustomLink"
