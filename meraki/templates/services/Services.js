import Container from "@components/container";
import Layout from "@components/layout";
import SourceProvider, { useSource } from "@providers/source";
import { createFields, createImageFieldConfig, createImageFields } from "@providers/tinacms/helpers";
import { Contact } from "@sections/Contact";
import defaultData from '@templates/services/data';
import { serviceSeo } from "data/seo";
import { Image } from "meraki/components/Image";
import Seo from "meraki/components/Seo";
const Cover = () => {
  const { get } = useSource()
  return <div className="min min-h-screen relative -mt-header ">
    <div className='absolute right-0 top-0 w-full bottom-24 lg:w-1/3 lg:h-full'>
      <Image src={get('data.image.src', '/services/service-mobile-banner.jpg')} />
    </div>
    <div className="absolute w-full h-full left-0 bottom-0  pt-header text-center lg:w-2/3 flex">
      <Container >
        <div className="flex flex-col items-center lg:text-left lg:flex-row h-full ">
          <div className="p-6 text-white lg:text-element-5 lg:flex-1">
            <h1 className="text-3xl font-kinfolk lg:text-7xl leading-none">{get('data.title', defaultData.title)}</h1>
            <div className="text-lg lg:text-xl font-garamond italic lg:mt-6">{get('data.subTitle', defaultData.subTitle)}</div>
          </div>
          <div className="flex-1 lg:hidden"></div>
          <div className="lg:w-2/5 self-center lg:pt-24">
            <div className="bg-element-6 p-6 lg:bg-transparent text-justify lg:p-0">
              {get('data.description')}
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
}
const Blocks = () => {
  const { get } = useSource()
  return <Container>
    <div className="flex flex-col">
      {
        get('data.blocks', []).map((item = {}, i) => {
          // console.log(item)
          return <div key={i} className=" relative">
            <div className="lg:w-6/12 max-w-md mx-auto space-y-12 lg:px-12 lg:py-24">
              <h2 className="text-6xl text-center font-garamond italic ">{item.title}</h2>
              <div className="flex space-x-2 lg:space-x-0 lg:m-0  lg:px-12 lg:absolute lg:inset-0  justify-between">
                {item?.images[0] && <div className="relative flex-1 self-start lg:flex-none lg:w-3/12">
                  <div style={{
                    paddingTop: `${2048 / 1366 * 100}%`
                  }}></div>
                  <Image {...item?.images[0]} />
                </div>}
                {item?.images[1] && <div className="relative flex-1 self-end lg:flex-none lg:w-3/12">
                  <div style={{
                    paddingTop: `${2048 / 1366 * 100}%`
                  }}></div>
                  <Image {...item?.images[1]} />
                </div>}
              </div>
              <div className="text-justify" dangerouslySetInnerHTML={{ __html: item.description }}></div>
              <div className="flex justify-center items-center lg:hidden">
                <div className="w-16 h-16 relative">
                  <Image src="/home/icons/web-homepage-icons-02.png" objectFit="contain" />
                </div>
              </div>
            </div>
          </div>
        })
      }
    </div>
  </Container>
}
const Services = ({ source, preview }) => {
  return <SourceProvider source={
    { en: source }
  }>
    <Layout preview={preview}>
      <Seo {...serviceSeo} />
      <Cover />
      <div className="h-24 lg:hidden" />
      <Blocks />
      <div className="h-24" />
      <Contact />
    </Layout>
  </SourceProvider>
}

const defaultItem = {
  title: 'OUR SERVICES',
  subTitle: "Our services are customized for your needs",
  description: "Our top priority is delivering an intimate wedding where you and your guests can enjoy and get lost in the moment. We are here to plan, give advice, organize, and hold your hand throughout the whole planning phase to ensure your wedding day is stress-free.",
  blocks: [
    {
      title: 'Full - Service wedding planning',
      description: `This package is designed for couples who need us
      to take the lead on every aspect of the wedding.
      It works best if you haven't had any idea on where
      to begin and don’t have as much time on hand to
      bring your vision to life. Here are some highlights
      of this package:
      - 12 to 18 months working period with unlimited
      communications and 24 personalized meetings.
      - All works and tasks included in the Coordinator
      and Partial package.
      - Applicable for an entire wedding day plus 02
      additional events of your choice.
      - Exclusive service for personalized requests. `,
      images: [
        {
          src: '/services/HHH_0110.jpg'
        }, {
          src: '/services/HHH_0110.jpg'
        }
      ]
    }
  ]
}
export const service_template = {
  defaultItem,
  fields: createFields([
    'title',
    'subTitle',
    'description',
    createImageFieldConfig(),
    {
      label: 'blocks',
      name: 'blocks',
      component: 'group-list',
      defaultItem: () => defaultData.blocks[0],
      itemProps: item => ({
        key: item.id,
        label: item.title,
      }),
      fields: createFields([
        'title',
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
        }
      ])
    }
  ])
}
export default Services;