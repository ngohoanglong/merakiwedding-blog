import { getAppInfo } from '@lib/app'
import { useLocal } from '@providers/local'
import AppConfig from 'meraki/AppConfig'
import LoadingDots from 'meraki/components/LoadingDots'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCMS, useForm, usePlugin } from 'tinacms'
import BuilderProvider from '.'
import { createFields } from './helpers'
const updateSeoApi = async (variables, router) => {
  let pageId = 'seo:' + router.asPath()
  const createPageMutation = `
      mutation createPage(
            $data: JSON
            $title:String
            $pageId:String
            $locale:String
        ) {
          createPage(input: {data: {data: $data locale:$locale title:$title pageId:$pageId} } ) {
                page{
                  id
                  title
                  data
                  pageId
                  locale
                }
            }
      }`
  return await fetcher({
    query: createPageMutation,
    variables: {
      ...variables,
      titlepageId,
      pageId,
      locale: router.locale,
    },
  })
}
const SeoConfig = ({ seo, id }) => {
  const { local } = useLocal()
  const router = useRouter()
  const formConfig = {
    id: 'seo:' + id,
    label: `Seo (${local})`,
    initialValues: seo,
    onSubmit: async (values) => {
      try {
        const response = await updateSeoApi(
          {
            data: values,
            locale: local,
          },
          router
        )
        if (response) {
          cms.alerts.success('Changes Saved')
        } else {
          console.error(response)
          cms.alerts.error('Error saving changes')
        }
      } catch (error) {
        console.error(error)
        cms.alerts.error('Error saving changes')
      }
    },
    fields: createFields(['title', 'description', 'keywords']),
  }
  const [formdata, form] = useForm(formConfig)
  usePlugin(form)
  return null
}
export const withBuilderForm =
  ({ displayName, id, label, template, createPageId, getPageInfo, onSubmit }) =>
  (Component) => {
    function Form({ id, pageData = {}, children, ...rest }) {
      const cms = useCMS()
      const router = useRouter()
      const { local } = useLocal()
      const formConfig = {
        id,
        label: `Page ${label} (${local})`,
        initialValues: pageData.data || template.defaultItem,
        onSubmit: async (values) => {
          try {
            const response = await onSubmit(
              {
                data: values,
                locale: local,
              },
              pageData?.pageInfo,
              router
            )
            if (response) {
              cms.alerts.success('Changes Saved')
            } else {
              console.error(response)
              cms.alerts.error('Error saving changes')
            }
          } catch (error) {
            console.error(error)
            cms.alerts.error('Error saving changes')
          }
        },
        ...template,
      }
      const [data, form] = useForm(formConfig)
      usePlugin(form)
      return (
        <Component
          {...{
            source: {
              ...rest,
              ...pageData,
              data,
            },
            form,
          }}
        />
      )
    }
    function Loader({ ...props }) {
      const router = useRouter()
      const [mouted, setMouted] = useState()
      const [update, setUpdate] = useState()
      const [data, setSetData] = useState({})
      const [isloading, setLoading] = useState()
      const { local } = useLocal()
      useEffect(() => {
        if (!mouted) {
          setMouted(true)
          return
        }
        let visible = true
        const getData = async () => {
          const { app, galleries } = await getAppInfo({
            locale: local,
          })
          let data = {}
          let pageInfo = {}
          if (getPageInfo) {
            pageInfo = await getPageInfo({
              locale: local,
              router,
            })
            data = pageInfo?.data
            if (typeof data === 'string') {
              data = JSON.parse(data)
            }
          }
          return {
            galleries,
            app,
            data,
            pageInfo,
          }
        }
        setLoading(true)
        getData()
          .then((data) => {
            if (visible) {
              setSetData(data)
              setUpdate(Date.now())
            }
          })
          .catch((error) => {
            console.error(error)
          })
          .finally(() => {
            setLoading(false)
          })
        return () => {
          visible = false
        }
      }, [local, router, mouted])
      return (
        <>
          {mouted && update && !isloading && (
            <>
              <AppConfig data={data?.app?.data}>
                {(appData) => {
                  return (
                    <>
                      <Form
                        {...props}
                        pageData={{
                          ...data,
                          app: {
                            data: appData,
                          },
                        }}
                        id={createPageId ? createPageId(router) : id}
                      />
                      <SeoConfig
                        id={createPageId ? createPageId(router) : id}
                        createPageId={createPageId}
                        seo={data?.app?.seo || {}}
                      />
                    </>
                  )
                }}
              </AppConfig>
            </>
          )}
          {update && isloading && (
            <div className="fixed inset-0 opacity-50 z-50 flex bg-element-5 bg-opacity-30 justify-center items-center">
              <LoadingDots />
            </div>
          )}
        </>
      )
    }
    return function WithBuilderForm(props) {
      return (
        <BuilderProvider>
          <Loader {...props} />
        </BuilderProvider>
      )
    }
  }
