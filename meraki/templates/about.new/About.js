import Container from '@components/container'
import Layout from '@components/layout'
import SourceProvider, { useSource } from '@providers/source'
import { createFields, createImageFields } from '@providers/tinacms/helpers'
import defaultData from '@templates/about/data'
import { aboutSeo } from 'data/seo'
import { Image } from 'meraki/components/Image'
import Seo from 'meraki/components/Seo'

const Cover = () => {
  const { get } = useSource()
  return (
    <div
      style={{ backgroundColor: '#53613d' }}
      className="min-h-screen relative -mt-header  pt-header flex items-center pb-6 lg:pb-header">
      <Container>
        <div className="flex lg:space-x-20  py-6 lg:py-6 lg:pb-12 items-center mx-auto max-w-6xl">
          <div className="hidden lg:flex relative w-1/3 pt-[88px]">
            <div className="w-full h-full relative">
              <div
                style={{
                  paddingTop: `${(2048 / 1400) * 100}%`,
                }}></div>
              {get('data.images', [])[0] && (
                <Image {...get('data.images', [])[0]} />
              )}
            </div>
          </div>
          <div className="flex text-lg lg:text-lg flex-1 flex-col text-center lg:text-left  h-full">
            <div className=" text-white lg:text-element-5 space-y-6 lg:space-y-10">
              <h1
                style={{
                  color: '#ede1ca',
                }}
                className="text-[3em] font-kinfolk leading-none">
                {get('data.title', defaultData.title)}
              </h1>
              <div
                style={{ color: '#2a2b0c' }}
                className="font-garamond text-[1.2em] leading-normal italic lg:mt-6">
                {get('data.subTitle', defaultData.subTitle)}
              </div>
            </div>
            <div className="flex-1 lg:hidden flex space-x-2 w-full mt-6">
              {get('data.images', []).map((image, i) => {
                if (!image || !image.src) return null
                return (
                  <div key={i} className="relative flex-1 ">
                    <div
                      style={{
                        paddingTop: `${(1366 / 1366) * 100}%`,
                      }}></div>
                    <Image {...image} />
                  </div>
                )
              })}
            </div>
            <div className="self-center">
              <div
                style={{
                  color: '#ede1ca',
                }}
                className="lg:bg-transparent text-justify lg:p-0 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: get('data.description'),
                }}></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
const Blocks = () => {
  const { get } = useSource()
  console.log(get('data.content'))
  return (
    <div
      style={{
        backgroundColor: '#ede8df',
      }}>
      <div className="relative isolate ">
        <div
          style={{
            '--paddingTop': `${(1766 / 1366) * 100}%`,
            '--paddingTop-large': `${(500 / 1366) * 100}%`,
          }}
          className="pb-[var(--paddingTop)] lg:pb-[var(--paddingTop-large)]"></div>
        <div className="absolute top-0 w-full h-full flex-col flex  left-0 z-[-1] overflow-hidden isolate lg:flex-row-reverse">
          {get('data.content.images', []).map((image, i) => {
            if (!image || !image.src) return null
            return (
              <div key={i} className="relative flex-1 ">
                <Image {...image} />
              </div>
            )
          })}
        </div>
        <div className="absolute lg:text-left inset-0 z-10 text-white text-center">
          <Container>
            <div className="flex absolute  lg:relative inset-0 lg:items-start flex-col items-center space-y-12 lg:space-y-0 py-12  mx-auto z-10">
              <h2 className=" text-5xl font-kinfolk lg:text-7xl flex-1">
                {get('data.content.title')}
              </h2>
              <div className="leading-snug font-garamond italic text-2xl lg:text-3xl max-w-[60ch] flex-1 px-12 lg:px-0">
                {get('data.content.subTitle')}
              </div>

              {/* <div className="flex flex-col items-center ">
              <div className="w-20 h-20 relative ">
                <Image
                  src="/home/icons/web-homepage-icons-02.png"
                  objectFit="contain"
                />
              </div>
              <div
                className="-mt-6 text-center text-lg lg:text-xl font-garamond italic mx-auto max-w-2xl leading-loose"
                dangerouslySetInnerHTML={{ __html: get('data.content.quote') }}
              />
            </div> */}
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <div className="grid lg:grid-cols-10 w-full gap-12 py-12 lg:gap-y-16">
          {get('data.content.member', []).map((item, i) => {
            let image = item.image?.src
              ? item.image
              : {
                  src: 'https://strapi.merakiweddingplanner.com/uploads/Wedding_day_G_H_7_4a4e3c9555.jpg?4620',
                }
            let inner = (
              <>
                <div className="w-full flex relative pb-[130%]">
                  <Image {...image} />
                </div>
                <h3 className="mt-[1em] text-[2em] font-kinfolk mb-[0.6em]">
                  {item.title || 'Xuan Hoang'}
                </h3>
                <div
                  className="border-t pt-[0.8em] border-current lg:text-justify lg:w-[95%]"
                  dangerouslySetInnerHTML={{
                    __html:
                      item.description ||
                      `Xuan is the founder of Meraki, full of energy and enthusiasm. Xuan is the founder of Meraki, full of energy and enthusiasm.`,
                  }}></div>
              </>
            )
            if (i % 4 === 0) {
              return (
                <div
                  key={i}
                  className="relative flex-1 w-full flex-shrink-0  text-lg text-center lg:text-left lg:col-start-1 lg:col-end-5">
                  {inner}
                </div>
              )
            }
            if (i % 4 === 1) {
              return (
                <div
                  key={i}
                  className="relative flex-1 w-full flex-shrink-0  text-lg text-center lg:text-left lg:col-start-5 lg:col-end-9">
                  {inner}
                </div>
              )
            }
            if (i % 4 === 2) {
              return (
                <div
                  key={i}
                  className="relative flex-1 w-full flex-shrink-0  text-lg text-center lg:text-left lg:col-start-3 lg:col-end-7">
                  {inner}
                </div>
              )
            }
            if (i % 4 === 3) {
              return (
                <div
                  key={i}
                  className="relative flex-1 w-full flex-shrink-0  text-lg text-center lg:text-left lg:col-start-7 lg:col-end-11">
                  {inner}
                </div>
              )
            }
            return (
              <div
                key={i}
                className="relative flex-1 w-full flex-shrink-0  text-lg text-center lg:text-left lg:col-start-7 lg:col-end-11">
                {inner}
              </div>
            )
          })}
        </div>
      </Container>
      <div className="h-20" />
    </div>
  )
}

const About = ({ source, preview }) => {
  return (
    <SourceProvider
      source={{
        en: source,
      }}>
      <Layout preview={preview}>
        <Seo defaultSeo={aboutSeo} />
        <Cover />
        <Blocks />
        <div className="h-24" />
      </Layout>
    </SourceProvider>
  )
}
export const about_template = {
  fields: createFields([
    'title',
    'subTitle',
    {
      label: 'content',
      name: 'description',
      component: 'html',
    },
    {
      label: 'images',
      name: 'images',
      itemProps: (item) => ({
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
          component: 'textarea',
        },
        {
          label: 'images',
          name: 'images',
          itemProps: (item) => ({
            key: item.id,
            label: item.title,
          }),
          component: 'group-list',
          fields: createImageFields(),
        },
        {
          label: 'quote',
          name: 'quote',
          component: 'html',
        },
        {
          label: 'member',
          name: 'member',
          component: 'group-list',
          fields: createFields([
            'title',
            'description',
            {
              label: 'image',
              name: 'image',
              component: 'group',
              fields: createImageFields(),
            },
          ]),
        },
      ]),
    },
  ]),
}
export default About
