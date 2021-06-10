
import Layout from "@components/layout";
import { getAllPostsForHome } from '@lib/api';
import Home from '@templates/home/Home';
import Head from 'next/head';
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
      return createScreenGroup(item)
    }).filter(Boolean)
  })
}
function Index({ pageData, preview }) {
  const cms = useCMS();
  const formConfig = {
    id: "homepage",
    label: 'Homepage',
    initialValues: pageData,
    onSubmit: async (values) => {
      const saveMutation = `
            mutation updateHomepage(
                $data: JSON
            ) {
                updateHomepage(input: {data: {data: $data}}) {
                    homepage {
                        data
                    }
                }
            }`;
      const response = await cms.api.strapi.fetchGraphql(
        saveMutation,
        {
          data: JSON.stringify(values),
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
        label: 'block1',
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
    <>
      <Layout preview={preview}>
        <Head>
          <title>Home - Meraki Wedding Planner</title>
          <link rel="icon" href="/favicon.png" sizes="32x32"></link>
        </Head>
        <Home post={post} />
      </Layout>
    </>
  )
}
export default (props) => {
  return <BuilderProvider>
    <Index {...props} />
  </BuilderProvider>
}
export async function getStaticProps({ preview = false }) {
  try {
    const pageResults = await fetchGraphql(
      process.env.STRAPI_URL,
      `
          query{
              homepage {
                  data
              }
          }
      `
    );
    const pageData = JSON.parse(pageResults.data.homepage.data);
    const allPosts = await getAllPostsForHome(preview);
    return {
      props: { allPosts, pageData, preview },
      revalidate: 300
    }
  } catch (error) {
    return {
      props: { allPosts: [], pageData: [], preview },
      revalidate: 300
    }
  }


}
