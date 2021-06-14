
import Layout from "@components/layout";
import { useLocal } from "@providers/local";
import Home from '@templates/home/Home';
import LoadingDots from "meraki/components/LoadingDots";
import Head from 'next/head';
import { useEffect, useState } from "react";
import { fetchGraphql } from 'react-tinacms-strapi';
import { useCMS, useForm, usePlugin } from "tinacms";
import BuilderProvider from "../../providers/tinacms";
const screens = ['xs', 'lg']
const createScreenGroup = ({
  label,
  name,
  component,
  description,
  ...rest
}) => {
  return {
    label,
    name,
    component: 'group',
    description,
    fields: screens.map(str => {
      return {
        label: `${label} - ${str}`,
        name: str,
        component,
        ...rest
      }
    }),
  }
}
const createBlock = ({
  label, name, description, fields = []
}) => {
  return ({
    label,
    name,
    component: 'group',
    description,
    fields: fields.map(item => {
      console.log({ item })
      if (typeof item === 'string') {
        return createScreenGroup({
          label: item,
          name: item,
          component: 'text',
        })
      }
      if (item && item.component === 'image') {
        return createScreenGroup({
          ...item,
          component: 'group',
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
                return fullSrc;
              },
            },
          ],

        })
      }
      return createScreenGroup(item)
    }).filter(Boolean)
  })
}
const createImageFieldConfig = ({
  label = 'image', name = 'image'
} = {
    label: 'image', name: 'image'
  }) => {
  return {
    label, name,
    component: 'group',
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
          return fullSrc;
        },
      },
    ],
  }
}
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
        console.log({
          data: response.data
        })
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
                  return fullSrc;
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
              return fullSrc;
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
      console.log(pageResults, pageResults?.data?.homepage?.data)
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
    <Head>
      <title>Home - Meraki Wedding Planner</title>
      <link rel="icon" href="/favicon.png" sizes="32x32"></link>
    </Head>
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
