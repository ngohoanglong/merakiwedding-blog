
import Container from "@components/container";
import Layout from "@components/layout";
import SourceProvider, { useSource } from "@providers/source";
import { createFields, createImageFields } from "@providers/tinacms/helpers";
import defaultData from '@templates/about/data';
import { aboutSeo } from "data/seo";
import { Image } from "meraki/components/Image";
import Seo from "meraki/components/Seo";
import { useRouter } from "next/router";

const Cover = () => {
  const { get } = useSource()
  return <div style={{ backgroundColor: '#61684b' }} className="min-h-screen relative -mt-header  pt-header">
    <Container >
      <div className="flex lg:space-x-20  py-6 lg:py-6 lg:pb-12 items-center mx-auto max-w-5xl">
        <div className="hidden lg:flex relative w-1/3 pt-[88px]">
          <div className="w-full h-full relative">
            <div style={{
              paddingTop: `${2048 / 1400 * 100}%`
            }}></div>
            {get('data.images', [])[0] && <Image {...get('data.images', [])[0]} />}
          </div>
        </div>
        <div className="flex flex-1 flex-col text-center lg:text-left  h-full">
          <div className=" text-white lg:text-element-5 space-y-6 lg:space-y-10">
            <h1 style={{
              color: '#ede1ca'
            }} className="text-3xl font-kinfolk lg:text-6xl leading-none">{get('data.title', defaultData.title)}</h1>
            <div style={{ color: "#2a2b0c" }} className="text-lg lg:text-xl font-garamond italic lg:mt-6">{get('data.subTitle', defaultData.subTitle)}</div>
          </div>
          <div className="flex-1 lg:hidden flex space-x-2 w-full mt-6">
            {
              get('data.images', []).map((image, i) => {
                if (!image || !image.src) return null
                return <div key={i} className="relative flex-1 ">
                  <div style={{
                    paddingTop: `${2048 / 1366 * 100}%`
                  }}></div>
                  <Image {...image} />
                </div>
              })
            }
          </div>
          <div className="self-center">
            <div style={{
              color: '#ede1ca'
            }} className="lg:bg-transparent text-justify lg:p-0 leading-relaxed" dangerouslySetInnerHTML={{ __html: get('data.description') }}>
            </div>
          </div>
        </div>
      </div>

    </Container>
  </div>
}
const Blocks = () => {
  const { get } = useSource()
  return <div style={{
    backgroundColor: '#ede8df'
  }}>
    <div className="relative bg-element-2 lg:hidden">
      <div style={{
        paddingTop: '100%',
      }}></div>
      {get('data.image') && <Image {...get('data.image')} />}
    </div>
    <Container>
      <div className="flex flex-col space-y-6 lg:space-y-8 py-12 max-w-4xl mx-auto">
        <h2 className=" text-center text-3xl font-kinfolk lg:text-6xl">
          {get('data.content.title')}
        </h2>
        <div>
          <div className="leading-loose text-center lg:px-6 font-garamond italic text-lg lg:text-xl">{get('data.content.subTitle')}</div>
          <div className="flex lg:space-x-12 lg:py-12 justify-center items-center lg:px-6">
            <div className="whitespace-pre-line text-justify leading-loose flex-1 w-full mb-4" dangerouslySetInnerHTML={{ __html: get('data.content.description') }}></div>
            <div style={{ maxWidth: '400px' }} className="relative w-full hidden lg:block">
              <div className='w-full relative'>
                <div style={{
                  paddingTop: '100%',

                }}></div>
                {get('data.image') && <Image {...get('data.image')} />}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="w-20 h-20 relative ">
              <Image src="/home/icons/web-homepage-icons-02.png" objectFit="contain" />
            </div>
            <div className="-mt-6 text-center text-lg lg:text-xl font-garamond italic mx-auto max-w-2xl leading-loose" dangerouslySetInnerHTML={{ __html: get('data.content.quote') }} />
          </div>
        </div>
      </div>
    </Container>
    <div className="h-20" />
  </div>
}


const About = ({ source, preview }) => {
  const router = useRouter()
  return <SourceProvider source={{
    en: source
  }}>
    <Layout preview={preview}>
      <Seo defaultSeo={aboutSeo} />
      <Cover />
      <Blocks />
      <div className="h-24" />
    </Layout>
  </SourceProvider>

}
export const about_template = {
  fields: createFields([
    'title',
    'subTitle',
    {
      label: 'content',
      name: 'description',
      component: 'html'
    },
    {
      label: 'images',
      name: 'images',
      itemProps: item => ({
        key: item.id,
        label: item.title,
      }),
      component: 'group-list',
      fields: createImageFields(),
    },
    {
      label: 'meet the team',
      name: 'content',
      component: 'group',
      fields: createFields([
        'title',
        {
          label: 'description',
          name: 'subTitle',
          component: 'textarea'
        },
        {
          label: 'content',
          name: 'description',
          component: 'html'
        },
        {
          label: 'quote',
          name: 'quote',
          component: 'html'
        },
      ])
    }
  ]),
}
export default About