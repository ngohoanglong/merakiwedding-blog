
import { useLocal } from "@providers/local";
import { createFields, createImageFields } from "@providers/tinacms/helpers";
import About from "@templates/about/About";
import LoadingDots from "meraki/components/LoadingDots";
import { useEffect, useState } from "react";
import { fetchGraphql } from 'react-tinacms-strapi';
import { useCMS, useForm, usePlugin } from "tinacms";
import BuilderProvider from "../../providers/tinacms";

function AboutForm({ id, pageData = {}, preview }) {
  const cms = useCMS();
  const { local } = useLocal()
  const formConfig = {
    id,
    label: `About (${local})`,
    initialValues: pageData.about,
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
  const [data, form] = useForm(formConfig)
  usePlugin(form);

  return (
    <>
      {/* <AppConfig data={pageData.app} /> */}
      <About pageData={
        {
          app: pageData.app,
          galleries: pageData.galleries,
          about: data
        }
      } />
    </>
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
      const { galleries, app, about } = pageResults.data;
      let pageData = about?.data
      if (typeof pageData === 'string') {
        pageData = JSON.parse(pageData)
      }
      return {
        galleries, app, about: pageData
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
      !isloading && <AboutForm {...props} pageData={data} id={'about.' + local} />}
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
      props: { preview, },
      revalidate: 300
    }
  }
}
