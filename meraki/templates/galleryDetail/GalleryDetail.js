
import Container from "@components/container";
import Layout from "@components/layout";
import SourceProvider, { useSource } from "@providers/source";
import { createBlock, createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import { LG } from "meraki/components/LG";
import { XS } from "meraki/components/XS";
import { PAGE_BLOCKS, PAGE_BLOCK_TEMPLATES } from "./blocks";
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
export const Blocks = ({ blocks, placeholder = null }) => {
  const { get } = useSource()
  const data = get('data.blocks')
  if (data.length < 1) return placeholder;
  console.log({ data })
  return data
    ? data.map(function (block, i) {
      console.log({ block, component: blocks[block._template] })
      const BlockComponent = blocks[block._template]
        ? blocks[block._template]
        : null;
      return <BlockComponent key={i} {...block} />;
    })
    : null;
};
const GalleryDetail = ({ source, preview }) => {
  return <SourceProvider source={{
    en: source
  }}>
    <Layout preview={preview}>
      <Cover />
      <div className="space-y-12 py-12">
        <Blocks blocks={PAGE_BLOCKS} placeholder={
          <div className="flex-grow flex items-center justify-center transition duration-150 ease-out text-gray-700 dark:text-gray-100 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 body-font overflow-hidden">
            <p className="opacity-30">
              {`There's nothing here, try adding some page sections.`}
            </p>
          </div>
        } />
      </div>
    </Layout>
  </SourceProvider>

}
// const PAGE_BLOCKS = {
//   space: Space,
//   layout1: Layout1,
//   layout2: Layout2
// };

// const PAGE_BLOCK_TEMPLATES = {
//   layout1: {
//     label: 'layout1',
//     defaultItem: '',
//     fields: []
//   },
//   layout2: {
//     label: 'layout2',
//     defaultItem: '',
//     fields: []
//   }
// };
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
        src: "/gallery-banner-mobile.jpg",
        alt: "Meraki wedding planner",
      }
    },
  },
  blocks: Object.keys(PAGE_BLOCK_TEMPLATES).reduce((result = [], item) => {
    // result.push({ _template: 'space' })
    console.log({ item: PAGE_BLOCK_TEMPLATES[item] })
    result.push({ _template: item, ...PAGE_BLOCK_TEMPLATES[item].detaultItem })
    console.log({ item: result[result.length - 1] })
    return result
  }, [])
}
export const galleryDetail_template = {
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
    , {
      label: "Page Sections",
      name: "blocks",
      component: "blocks",
      templates: PAGE_BLOCK_TEMPLATES,
    },
  ],
};
export default GalleryDetail