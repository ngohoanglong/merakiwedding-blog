
import Container from "@components/container";
import Layout from "@components/layout";
import { useLocal } from "@providers/local";
import SourceProvider, { useSource } from "@providers/source";
import { createFields, createImageFieldConfig, createImageFields } from "@providers/tinacms/helpers";
import { Instagram } from "@sections/Instagram";
import defaultData from '@templates/about/data';
import { Image } from "meraki/components/Image";
import LoadingDots from "meraki/components/LoadingDots";
import { useEffect, useState } from "react";
import { fetchGraphql } from 'react-tinacms-strapi';
import { useCMS, useForm, usePlugin } from "tinacms";
import BuilderProvider from "../../providers/tinacms";

const Cover = () => {
  const { get } = useSource()
  return <div style={{ backgroundColor: '#61684b' }} className="min-h-screen relative -mt-header  pt-header">
    <Container >
      <div className="flex lg:space-x-20  py-6 lg:py-6 lg:pb-12 items-center mx-auto max-w-5xl">
        <div className="hidden lg:flex relative w-1/3">
          <div style={{
            paddingTop: `${2048 / 1400 * 100}%`
          }}></div>
          {get('about.images', [])[0] && <Image {...get('about.images', [])[0]} />}
        </div>
        <div className="flex flex-1 flex-col text-center lg:text-left  h-full">
          <div className=" text-white lg:text-element-5 space-y-6 lg:space-y-10">
            <h1 style={{
              color: '#ede1ca'
            }} className="text-3xl font-kinfolk lg:text-6xl leading-none">{get('about.title', defaultData.title)}</h1>
            <div style={{ color: "#2a2b0c" }} className="text-lg lg:text-xl font-garamond italic lg:mt-6">{get('about.subTitle', defaultData.subTitle)}</div>
          </div>
          <div className="flex-1 lg:hidden flex space-x-2 w-full mt-6">
            {
              get('about.images', []).map((image, i) => {
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
            }} className="lg:bg-transparent text-justify lg:p-0 leading-loose" dangerouslySetInnerHTML={{ __html: get('about.description') }}>
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
      {get('about.image') && <Image {...get('about.image')} />}
    </div>
    <Container>
      <div className="flex flex-col lg:space-y-12 py-12 max-w-5xl mx-auto">
        <h2 className=" text-center text-3xl font-kinfolk">
          {get('about.content.title')}
        </h2>
        <div>
          <div className="leading-loose lg:text-center lg:px-6">{get('about.content.subTitle')}</div>
          <div className="flex lg:space-x-20 lg:py-16">
            <div className="whitespace-pre-line text-justify leading-loose flex-1 w-full max-w-sm" dangerouslySetInnerHTML={{ __html: get('about.content.description') }}></div>
            <div className="flex-1 relative">
              <div style={{
                paddingTop: '100%',

              }}></div>
              {get('about.image') && <Image {...get('about.image')} />}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-12">
          <div className="w-20 h-20 relative ">
            <Image src="/home/icons/web-homepage-icons-02.png" />
          </div>
          <div className="text-center text-lg lg:text-xl font-garamond italic mx-auto max-w-2xl leading-loose" dangerouslySetInnerHTML={{ __html: get('about.content.quote') }} />
        </div>
      </div>
    </Container>
    <div className="h-20" />
  </div>
}
const About = () => {
  const { get } = useSource()
  return <Layout preview={true}>
    <Cover />
    <Blocks />
    <div className="h-24" />
    <Instagram />
  </Layout>
}
function AboutForm({ id, pageData = {}, app, galleries, preview }) {
  const cms = useCMS();
  const { local } = useLocal()
  const formConfig = {
    id,
    label: `Service (${local})`,
    initialValues: pageData,
    onSubmit: async (values) => {
      const saveMutation = `
        mutation updateAbout(
              $data: JSON
              $locale: String
          ) {
              updateAbout(input: {data: {data: $data}} locale:$locale) {
                  about{
                      data
                  }
              }
        }`;
      const response = await cms.api.strapi.fetchGraphql(
        saveMutation,
        {
          data: JSON.stringify(values),
          locale: local
        }
      );
      if (response.data) {
        cms.alerts.success("Changes Saved");
      } else {
        cms.alerts.error("Error saving changes");
      }
    },
    fields: createFields([
      'title',
      'subTitle',
      {
        label: 'content',
        name: 'description',
        component: 'html'
      },
      createImageFieldConfig(),
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
        label: 'content',
        name: 'content',
        component: 'group',
        fields: createFields([
          'title',
          'subTitle',
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
  const [data, form] = useForm(formConfig)
  usePlugin(form);
  return (
    <SourceProvider source={{
      [local]: {
        app,
        galleries,
        about: data
      }
    }}>
      <About />
    </SourceProvider>
  )
}
function EnchancedIndex(props) {
  const [update, setUpdate] = useState()
  const [data, setSetData] = useState({})
  const [isloading, setLoading] = useState()
  const { local } = useLocal()
  useEffect(() => {
    let visible = true
    const getData = async () => {
      const pageResults = await fetchGraphql(
        process.env.STRAPI_URL,
        `
          query{
            app(locale: "${local}"){
              data
            }
            galleries(locale: "${local}"){
              title
              locale
              couples
              slug
              photo{
                url
                alternativeText
              }
            }
            about(locale: "${local}"){
              data
            }
          }
      `
      );
      const data = pageResults?.data?.about?.data || {}
      if (typeof data === 'string')
        return JSON.parse(data)
      return data
    }
    setLoading(true)
    getData().then(data => {
      if (visible) {
        setSetData({
          ...data,
          [local]: data
        })
        setUpdate(Date.now())
      }
    }).finally(() => {
      setLoading(false)
    })
    return () => {
      visible = false
    }
  }, [local])
  return <>
    {update &&
      !isloading && <AboutForm {...props} pageData={data[local] || {}} id={'about.' + local} />}
    {update && isloading && <div className="fixed inset-0 opacity-50 z-50 flex bg-element-5 bg-opacity-30 justify-center items-center">
      <LoadingDots />
    </div>}
  </>
}
export default (props) => {
  return <BuilderProvider>
    <EnchancedIndex {...props} />
  </BuilderProvider>
}
export async function getStaticProps({ preview = false }) {
  try {
    const pageResults = await fetchGraphql(
      process.env.STRAPI_URL,
      `
          query{
            app{
              data
            }
            galleries{
              title
              locale
              couples
              slug
              photo{
                url
                alternativeText
              }
            }
          }
      `
    );
    const { galleries, app } = pageResults.data;
    return {
      props: { preview, galleries, app },
      revalidate: 300
    }
  } catch (error) {
    return {
      props: { preview, galleries: [] },
      revalidate: 300
    }
  }
}
