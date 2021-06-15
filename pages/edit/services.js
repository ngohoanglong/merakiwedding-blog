
import Container from "@components/container";
import Layout from "@components/layout";
import { useLocal } from "@providers/local";
import SourceProvider, { useSource } from "@providers/source";
import { createFields, createImageFieldConfig, createImageFields } from "@providers/tinacms/helpers";
import { Contact } from "@sections/Contact";
import defaultData from '@templates/services/data';
import { Image } from "meraki/components/Image";
import LoadingDots from "meraki/components/LoadingDots";
import { useEffect, useState } from "react";
import { fetchGraphql } from 'react-tinacms-strapi';
import { useCMS, useForm, usePlugin } from "tinacms";
import BuilderProvider from "../../providers/tinacms";
const Cover = () => {
  const { get } = useSource()
  console.log({
    services: get('services')
  })
  return <div className="min min-h-screen relative -mt-header lg:bg-element-7">
    <div className='absolute right-0 top-0 w-full bottom-24 lg:w-1/3 lg:h-full'>
      <Image src={get('services.image.src', '/services/service-mobile-banner.jpg')} />
    </div>
    <div className="absolute w-full h-full left-0 bottom-0  pt-header text-center lg:w-2/3 flex">
      <Container >
        <div className="flex flex-col items-center lg:text-left lg:flex-row h-full ">
          <div className="p-6 text-white lg:text-element-5 lg:flex-1">
            <h1 className="text-3xl font-kinfolk lg:text-7xl leading-none">{get('services.title', defaultData.title)}</h1>
            <div className="text-xl font-garamond italic lg:mt-6">{get('services.subTitle', defaultData.subTitle)}</div>
          </div>
          <div className="flex-1 lg:hidden"></div>
          <div className="lg:w-2/5 self-center lg:pt-24">
            <div className="bg-element-6 p-6 lg:bg-transparent text-justify lg:p-0">
              {get('services.description')}
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
    <div className="flex flex-col space-y-12 lg:space-y-24">
      {
        get('services.blocks', []).map((item = {}, i) => {
          console.log(item)
          return <div key={i} className="text-center relative">
            <div className="lg:w-6/12 max-w-md mx-auto space-y-12 lg:px-12 lg:py-24">
              <h2 className="text-6xl font-garamond italic font-bold">{item.title}</h2>
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
              <div className="" dangerouslySetInnerHTML={{ __html: item.description }}></div>
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
const Services = () => {
  const { get } = useSource()
  return <Layout preview={true}>
    <Cover />
    <div className="h-24 lg:hidden" />
    <Blocks />
    <div className="h-24" />
    <Contact />
  </Layout>
}
function ServicesForm({ id, pageData = {}, app, galleries, preview }) {
  const cms = useCMS();
  const { local } = useLocal()
  const formConfig = {
    id,
    label: `Service (${local})`,
    initialValues: pageData,
    onSubmit: async (values) => {
      const saveMutation = `
        mutation updateService(
              $data: JSON
              $locale: String
          ) {
              updateService(input: {data: {data: $data}} locale:$locale) {
                  service{
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
    ]),
  }
  const [data, form] = useForm(formConfig)
  usePlugin(form);
  return (
    <SourceProvider source={{
      [local]: {
        app,
        galleries,
        services: data
      }
    }}>
      <Services />
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
            service(locale: "${local}"){
              data
            }
          }
      `
      );
      const data = pageResults?.data?.service?.data || {}
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
      !isloading && <ServicesForm {...props} pageData={data[local] || {}} id={'services.' + local} />}
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
