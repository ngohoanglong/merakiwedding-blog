import { useSource } from '@providers/source'
import { createSeo } from 'data/seo'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

const Seo = ({ defaultSeo, ...props }) => {
  const { get } = useSource()
  const router = useRouter()
  const seo = get('seo') || {}
  const { keywords } = seo
  return (
    <>
      <NextSeo
        {...createSeo({
          ...defaultSeo,
          ...seo
        }, router)}
        additionalMetaTags={[
          keywords && {
            property: 'keywords',
            content: keywords,
          },
        ].filter(Boolean)}
        {...props}
      />
    </>
  )
}
export default Seo
