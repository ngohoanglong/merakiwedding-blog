
import { useLocal } from "@providers/local";
import { createFields, createImageFieldConfig, createImageFields } from "@providers/tinacms/helpers";
import defaultData from '@templates/services/data';
import Services from "@templates/services/Services";
import LoadingDots from "meraki/components/LoadingDots";
import { useEffect, useState } from "react";
import { fetchGraphql } from 'react-tinacms-strapi';
import { useCMS, useForm, usePlugin } from "tinacms";
import BuilderProvider from "../../providers/tinacms";

function ServicesForm({ id, pageData = {} }) {
  const cms = useCMS();
  const { local } = useLocal()
  const formConfig = {
    id,
    label: `Service (${local})`,
    initialValues: pageData.service,
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
    <Services pageData={{
      app: pageData.app,
      galleries: pageData.galleries,
      service: data
    }} />
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
      const { galleries, app, service } = pageResults.data;
      let pageData = service?.data
      if (typeof pageData === 'string') {
        pageData = JSON.parse(pageData)
      }
      return {
        galleries, app, service: pageData
      }
    }
    setLoading(true)
    getData().then(data => {
      if (visible) {
        setSetData(data)
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
      !isloading && <ServicesForm {...props} pageData={data} id={'services.' + local} />}
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
    return {
      props: { preview },
      revalidate: 300
    }
  } catch (error) {
    return {
      props: { preview },
      revalidate: 300
    }
  }
}
