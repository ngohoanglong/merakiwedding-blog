
import Container from "@components/container";
import Layout from "@components/layout";
import SourceProvider, { useSource } from "@providers/source";
import { createBlock, createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import { LG } from "meraki/components/LG";
import ListGallery from "meraki/components/ListGallery";
import { XS } from "meraki/components/XS";
const Cover = () => {
  return <div style={{ backgroundColor: '#e8e5dd' }} className=" -mt-header pt-header lg:pt-0 pb-14 flex justify-center flex-col relative items-center">
    <XS>
      {
        () => <div className="absolute bottom-0 left-0 right-0">
          <div style={{ maxWidth: '70vh' }} className="mx-auto">
            <div className="mx-auto w-full" >
              <div style={{
                width: '100%',
                paddingTop: '100%',
                background: "#efece6",
                borderTopLeftRadius: '9999em',
                borderTopRightRadius: '9999em'
              }}>
              </div>
            </div>
          </div>
        </div>
      }
    </XS>
    <LG>
      {
        () => <div className="absolute bottom-0 left-0 right-0">
          <Container>
            <div className="mx-auto w-full" >
              <div style={{
                width: '100%',
                paddingTop: '50%',
                background: "#efece6",
                borderTopLeftRadius: '9999em',
                borderTopRightRadius: '9999em'
              }}>

              </div>
            </div>
          </Container>
        </div>
      }
    </LG>
    <div className="relative max-w-xs lg:max-w-sm" style={{ width: '60vw' }} >
      <div style={{
        paddingTop: `${2048 / 1400 * 100}%`
      }}></div>
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
    </div>

    <div className="-mt-8 lg:-mt-16 z-10 text-center ">
      <Container >
        <XS>
          {
            get => <h2 className="text-6xl font-kinfolk">{get('data.cover.title')}</h2>
          }
        </XS>
        <LG>
          {
            get => <h2 className="text-8xl font-kinfolk leading-none">{get('data.cover.title')}</h2>
          }
        </LG>
        <div className="pt-3 mx-auto max-w-xs lg:max-w-2xl">
          <XS>
            {
              get => <div className="leading-relaxed text-center">{get('data.cover.description')}</div>
            }
          </XS>
          <LG>
            {
              get => <div className="leading-relaxed text-center text-xl">{get('data.cover.description')}</div>
            }
          </LG>
        </div>
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
      <ListGallery items={get('app.data.gallery', [])} />
    </Container>
    <div className="h-20" />
  </div>
}
const Gallery = ({ source, preview }) => {
  return <SourceProvider source={{
    en: source
  }}>
    <Layout preview={preview}>
      <Cover />
      <Blocks />
    </Layout>
  </SourceProvider>

}
const defaultItem = {
  cover: {
    title: {
      xs: "OUR JOURNAL"
    },
    description: {
      xs: "We hope you find inspiration through the beautiful photos from our amazing photographers"
    },
    image: {
      xs: {
        src: "/gallery-banner-mobile.jpg",
        alt: "Meraki wedding planner",
      },
      lg: {
        src: "/_DSC3741.jpg",
        alt: "Meraki wedding planner",
      }
    },
  }
}
export const gallery_template = {
  defaultItem,
  fields: [
    createBlock({
      label: 'cover',
      name: 'cover',
      itemProps: (item) => ({
        ...item,
        label: item.title
      }),
      fields: [
        'title',
        { name: 'description', component: 'textarea', label: 'description' },
        createImageFieldConfig()
      ]
    })
  ],
};
export default Gallery