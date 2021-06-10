
import Home from '@templates/home/Home'
import Head from 'next/head'
import { getAllPostsForHome } from '@lib/api'
import { fetchGraphql } from 'react-tinacms-strapi'
import { useCMS, useForm, usePlugin } from "tinacms";
import Layout from "@components/layout";

export default function Index({ allPosts: { edges }, pageData, preview }) {
  const cms = useCMS();
  console.log(pageData);
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
        cms.alerts.success("Changes Saved");
      } else {
        cms.alerts.error("Error saving changes");
      }
    },
    fields: [
        {
        label: 'Instagram Images',
        name: 'instagram',
        component: 'group-list',
        description: 'Instagram Images',
        itemProps: item => ({
          key: item.id,
          label: item.name,
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
            parse: media => process.env.STRAPI_URL + '/uploads/' +media.filename,

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
  console.log(post);
  const morePosts = edges
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blog - Meraki Wedding Planner</title>
          <link rel="icon" href="/favicon.png" sizes="32x32"></link>
        </Head>
        <Home />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
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
}
