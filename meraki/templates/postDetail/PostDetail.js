import Layout from '@components/layout'
import PostBody from '@components/post-body'
import SourceProvider from '@providers/source'
import { createNewsArticleJsonLdSeo, createPostDetailSeo } from 'data/seo'
import get from 'lodash.get'
import { Image } from 'meraki/components/Image'
import LoadingDots from 'meraki/components/LoadingDots'
import Seo from 'meraki/components/Seo'
import Head from 'next/head'
import { useRouter } from 'next/router'
const FixFooterBackgroundColor = () => (
  <style>
    {`
     
    body{
      background:#eae4df;
    }
    footer{
      background:transparent!important
    }
    p{ 
        margin-top:0;
    }
  
    `}
  </style>
)
const PostDetail = ({ source, preview }) => {
  const post = get(source, 'post', {})
  const router = useRouter()
  return (
    <SourceProvider
      source={{
        en: source,
      }}>
      <Layout preview={preview}>
        <FixFooterBackgroundColor />
        <div className="max-w-6xl px-2 lg:px-0 mx-auto">
          {router.isFallback ? (
            <div className="fixed inset-0 flex justify-center items-center">
              <LoadingDots />
            </div>
          ) : (
            <>
              <article>
                <Seo {...createPostDetailSeo(source, router)} />
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: createNewsArticleJsonLdSeo(source, router),
                  }}></script>
                <Head>
                  <link
                    rel="stylesheet"
                    id="elementor-icons-css"
                    href="https://merakiweddingplanner.com/wp-content/themes/astra/assets/css/minified/style.min.css?ver=3.4.8"
                    media="all"
                  />
                  <link
                    rel="stylesheet"
                    id="elementor-icons-css"
                    href="https://merakiweddingplanner.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.11.0"
                    media="all"
                  />
                  <link
                    rel="stylesheet"
                    id="elementor-animations-css"
                    href="https://merakiweddingplanner.com/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.2.4"
                    media="all"
                  />
                  <link
                    rel="stylesheet"
                    id="elementor-frontend-legacy-css"
                    href="https://merakiweddingplanner.com/wp-content/plugins/elementor/assets/css/frontend-legacy.min.css?ver=3.2.4"
                    media="all"
                  />
                  <link
                    rel="stylesheet"
                    id="elementor-frontend-css"
                    href="https://merakiweddingplanner.com/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.2.4"
                    media="all"
                  />
                  <link
                    rel="stylesheet"
                    id={`elementor-post-` + post.databaseId + `-css`}
                    href={
                      `https://merakiweddingplanner.com/wp-content/uploads/elementor/css/post-` +
                      post.databaseId +
                      `.css?ver=1625218922`
                    }
                    media="all"
                  />
                  <link
                    rel="stylesheet"
                    href={`https://merakiweddingplanner.com/wp-content/uploads/elementor/css/post-6343.css?ver=1626326961`}
                    media="all"
                  />

                  <link rel="preconnect" href="https://fonts.googleapis.com" />
                  <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                  />
                  <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
                    rel="stylesheet"
                  />
                  <link
                    href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"></link>
                  <link
                    href="https://fonts.googleapis.com/css2?family=Commissioner&display=swap"
                    rel="stylesheet"></link>
                  <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap"
                    rel="stylesheet"
                  />
                  <link
                    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
                    rel="stylesheet"></link>
                  <link
                    href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
                    rel="stylesheet"></link>
                  <link
                    href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"></link>
                  <link
                    href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"></link>
                  <link
                    href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&display=swap"
                    rel="stylesheet"></link>
                  <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet" />
                  <style>
                    {`
                      .entry-title a, .entry-content h1, h2, .entry-content h2, h3, .entry-content h3, h4, .entry-content h4, h5, .entry-content h5, h6, .entry-content h6 {
                        color: #3a3a3a;
                      }
                    `}
                  </style>
                </Head>
                <div
                  style={{
                    zIndex: '-1',
                  }}
                  className="fixed inset-0">
                  <Image
                    src={get(source, 'data.background_image', '/bg_blog.JPG')}
                  />
                </div>
                <div className=" pb-12 lg:py-12 lg:pb-32">
                  <div>
                    <div className="py-6 bg-white rounded lg:py-24 elementor-kit-6343">
                      <PostBody content={post.content} />
                    </div>
                  </div>
                </div>
              </article>
            </>
          )}
        </div>
      </Layout>
    </SourceProvider>
  )
}

const defaultItem = {
  background_image: '/bg_blog.png',
}
export const postDetail_template = {
  defaultItem,
  fields: [
    {
      label: 'Background image',
      name: 'background_image',
      component: 'image',
      // Generate the frontmatter value based on the filename
      parse: (media) => process.env.STRAPI_URL + '/uploads/' + media.filename,

      // Decide the file upload directory for the post
      uploadDir: () => '/',

      // Generate the src attribute for the preview image.
      previewSrc: (fullSrc) => {
        return fullSrc
      },
    },
  ],
}
export default PostDetail
