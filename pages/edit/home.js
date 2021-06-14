
import Layout from "@components/layout";
import { useLocal } from "@providers/local";
import Home from '@templates/home/Home';
import LoadingDots from "meraki/components/LoadingDots";
import { useEffect, useState } from "react";
import { fetchGraphql } from 'react-tinacms-strapi';
import { useCMS, useForm, usePlugin } from "tinacms";
import BuilderProvider from "../../providers/tinacms";
import { createBlock, createImageFieldConfig, createScreenGroup } from "../../providers/tinacms/helpers";
function Index({ id, pageData, galleries, preview }) {
  const cms = useCMS();
  const { local } = useLocal()
  const formConfig = {
    id,
    label: `Homepage (${local})`,
    initialValues: pageData,
    onSubmit: async (values) => {
      const saveMutation = `
        mutation updateHomepage(
              $data: JSON
              $locale: String
          ) {
              updateHomepage(input: {data: {data: $data}} locale:$locale) {
                  homepage {
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
    fields: [
      {
        label: 'intro',
        name: 'IntroSlider',
        component: 'group',
        description: 'intro',
        fields: [
          createScreenGroup({
            label: 'Title',
            name: 'title',
            component: 'text',
          }),
          createScreenGroup({
            label: 'subTitle',
            name: 'subTitle',
            component: 'text',
          }),
          createScreenGroup({
            label: 'Images',
            name: 'items',
            component: 'group-list',
            description: 'Slider Images',
            itemProps: item => ({
              key: item.id,
              label: item.src ? item.src.replace(process.env.STRAPI_URL + '/uploads/', '') : 'undefined',
            }),
            defaultItem: () => ({
              name: 'Title',
              id: Math.random()
                .toString(36)
                .substr(2, 9),
            }),
            fields: [
              {
                label: 'alt',
                name: 'alt',
                component: 'text',
              },
              {
                label: 'Image',
                name: 'src',
                component: 'image',
                // Generate the frontmatter value based on the filename
                parse: media => process.env.STRAPI_URL + '/uploads/' + media.filename,

                // Decide the file upload directory for the post
                uploadDir: () => '/',

                // Generate the src attribute for the preview image.
                previewSrc: fullSrc => {
                  return fullSrc.replace('/uploads/', '/uploads/small_');
                },
              },
            ],
          })
        ]
      },
      createBlock({
        label: 'quotes',
        name: 'Block1',
        fields: [
          'title',
          'description',
          'text1',
          'text2',
          'text3',
          {
            label: 'image',
            name: 'image.src',
            component: 'image'
          }
        ]
      }),
      createBlock({
        label: 'about us',
        name: 'Block2',
        fields: [
          'title',
          'subTitle',
          'description',
          'url',
          'buttonText',
          {
            label: 'texts',
            name: 'texts',
            component: 'textarea'
          },
          {
            label: 'image',
            name: 'image',
            component: 'image',
          },
        ]
      }),
      createBlock({
        label: 'EXPLORE OUR WEDDINGS',
        name: 'Block3',
        fields: [
          'title',
          'description',
          'url',
          'buttonText',
          {
            label: 'custom gallery',
            name: 'customGallery',
            component: 'toggle'
          },
          {
            label: 'images',
            name: 'items',
            itemProps: item => ({
              key: item.id,
              label: item.title,
            }),
            component: 'group-list', defaultItem: () => ({
              title: 'Boundles Amour',
              subTitle: 'TESS & ANDY',
            }),
            fields: [
              {
                label: 'title',
                name: 'title',
                component: 'text'
              }, {
                label: 'title',
                name: 'subTitle',
                component: 'text'
              }, createImageFieldConfig()
            ],
          }
        ]
      }),
      createBlock({
        label: 'OUR SERVICES',
        name: 'Block4',
        fields: [
          'title',
          'description',
          'url',
          'buttonText',
          ({
            label: 'items',
            name: 'items',
            component: 'group-list',
            itemProps: item => ({
              key: item.id,
              label: item.title,
            }),
            fields: [
              {
                label: 'title',
                name: 'title',
                component: 'text'
              }, {
                label: 'description',
                name: 'description',
                component: 'text'
              }
            ],
          })
        ]
      }),
      createBlock({
        label: 'BLOG',
        name: 'Block5',
        fields: [
          'title',
          'description',
          'url',
          'buttonText',
          {
            label: 'image',
            name: 'image',
            component: 'image',
          },
        ]
      }),
      createBlock({
        label: 'KIND WORDS',
        name: 'Block6',
        fields: [
          'title',
          'description',
          'url',
          'buttonText',
          ({
            label: 'items',
            name: 'items',
            itemProps: item => ({
              key: item.id,
              label: item.title,
            }),
            component: 'group-list', defaultItem: () => ({
              title: 'Tess & Andy',
              subTitle: 'NEW ZEALAND / UNITED KINGDOM',
              description: "“Xuan and Tu were very attentive and insured our vision came true. They worked with us with great communication, informing us on all details – even if there were things we couldn’t achieve they talked us through reasons and available options. We were so happy to have Xuan and Tu as wedding planners and they became a special part of our wedding and remain our close friends today...”"
            }),
            fields: [
              {
                label: 'title',
                name: 'title',
                component: 'text'
              }, {
                label: 'title',
                name: 'subTitle',
                component: 'text'
              }, {
                label: 'description',
                name: 'description',
                component: 'text'
              }, createImageFieldConfig()
            ],
          })
        ]
      }),
      createBlock({
        label: 'CONTACT',
        name: 'Block7',
        fields: [
          'title',
          'description',
          'url',
          'buttonText',
          {
            label: 'image',
            name: 'image',
            component: 'image',
          },
        ]
      }),
      {
        label: 'Instagram Images',
        name: 'instagram',
        component: 'group-list',
        description: 'Instagram Images',
        itemProps: item => ({
          key: item.id,
          label: item.title,
        }),
        defaultItem: () => ({
          name: 'Title',
          id: Math.random()
            .toString(36)
            .substr(2, 9),
        }),
        fields: [
          {
            label: 'Title',
            name: 'title',
            component: 'text',
          },
          {
            label: 'Url',
            name: 'url',
            component: 'text',
          },
          {
            label: 'Image',
            name: 'image',
            component: 'image',
            // Generate the frontmatter value based on the filename
            parse: media => process.env.STRAPI_URL + '/uploads/' + media.filename,

            // Decide the file upload directory for the post
            uploadDir: () => '/',

            // Generate the src attribute for the preview image.
            previewSrc: fullSrc => {
              return fullSrc.replace('/uploads/', '/uploads/small_');
            },
          },
        ],
      },
    ],
  }
  const [post, form] = useForm(formConfig)
  usePlugin(form);
  return (
    <Home post={post} galleries={galleries} />
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
            homepage(locale: "${local}"){
              data
            }
          }
      `
      );
      const data = pageResults?.data?.homepage?.data || {}
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
      !isloading && <Index pageData={data[local] || {}} id={'homepage.' + local} galleries={props.galleries} />}
    {update && isloading && <div className="fixed inset-0 opacity-50 z-50 flex bg-element-5 bg-opacity-30 justify-center items-center">
      <LoadingDots />
    </div>}
  </>
}
export default (props) => {
  return <BuilderProvider><Layout preview={props.preview}>
    <EnchancedIndex {...props} />
  </Layout></BuilderProvider>
}
export async function getStaticProps({ preview = false }) {
  try {
    const pageResults = await fetchGraphql(
      process.env.STRAPI_URL,
      `
          query{
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
    const galleries = pageResults.data.galleries;
    return {
      props: { preview, galleries },
      revalidate: 300
    }
  } catch (error) {
    return {
      props: { preview, galleries: [] },
      revalidate: 300
    }
  }
}
