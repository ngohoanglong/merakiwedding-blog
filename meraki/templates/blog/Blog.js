
import Container from "@components/container";
import Layout from "@components/layout";
import MoreStories from '@components/more-stories';
import SourceProvider, { useSource } from "@providers/source";
import { createBlock, createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import { LG } from "meraki/components/LG";
import { XS } from "meraki/components/XS";
import Head from "next/head";
const Cover = () => {
  const { get } = useSource()
  return <div style={{ backgroundColor: '#61684b' }} className="min-h-screen relative -mt-header  pt-header flex justify-center">
    <XS>
      {
        get => <div><Image {...get('data.cover.image')} /></div>
      }
    </XS>
    <LG>
      {
        get => <div><Image {...get('data.cover.image')} /></div>
      }
    </LG>
    <div className="self-end py-16 z-10 text-center text-5xl font-garamond italic  text-element-1">
      <Container >
        <XS>
          {
            get => <h2>{get('data.cover.title')}</h2>
          }
        </XS>
        <LG>
          {
            get => <h2>{get('data.cover.title')}</h2>
          }
        </LG>
      </Container>
    </div>

  </div>
}
const Blocks = () => {
  const { get } = useSource()
  return <div style={{
  }}>
    <div className="h-20" />
    <Container>
      <MoreStories posts={get('blog.posts', [])} />
    </Container>
    <div className="h-20" />
  </div>
}
const Blog = ({ source, preview }) => {
  return <SourceProvider source={{
    en: source
  }}>
    <Layout preview={preview}>
      <Head>
        <title>Meraki wedding planner - Blog</title>
      </Head>
      <Cover />
      <Blocks />
    </Layout>
  </SourceProvider>
}
export const blog_template = {
  // label: "Hero",
  defaultItem: {
    cover: {
      title: {
        xs: "We are here not for just inspiration but also for practical advice"
      },
      image: {
        xs: {
          src: "/blog-banner-mobile.jpg",
          alt: "Meraki wedding planner",
        },
        lg: {
          src: "/_DSC3741.jpg",
          alt: "Meraki wedding planner",
        }
      },
    }
  },
  fields: [
    createBlock({
      label: 'cover',
      name: 'cover',
      fields: [
        'title',
        createImageFieldConfig()
      ]
    })
  ],
};
export default Blog