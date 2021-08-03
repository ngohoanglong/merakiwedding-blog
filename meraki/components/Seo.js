import { useSource } from '@providers/source'
import { NextSeo } from 'next-seo'

const Seo = ({ title, path, ...props }) => {
  const { get } = useSource()
  const seo = get('seo.data') || {}
  const { keywords } = seo
  return (
    <>
      <NextSeo
        title={path ? get(path, title) : title}
        {...props}
        {...seo}
        additionalMetaTags={[
          keywords && {
            property: 'keywords',
            content: keywords,
          },
        ].filter(Boolean)}
      />
    </>
  )
}
export default Seo
