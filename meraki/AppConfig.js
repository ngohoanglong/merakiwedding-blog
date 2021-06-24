import { useLocal } from "@providers/local";
import { createFields, createImageFieldConfig } from "@providers/tinacms/helpers";
import { useCMS, useForm, usePlugin } from 'tinacms';

const AppConfig = ({ data = {}, children }) => {
  const cms = useCMS();
  const { local } = useLocal()
  const formConfig = {
    id: `App (${local})`,
    label: `App (${local})`,
    initialValues: data,
    onSubmit: async (values) => {
      const saveMutation = `
        mutation updateApp(
              $data: JSON
              $locale: String
          ) {
              updateApp(input: {data: {data: $data}} locale:$locale) {
                  app{
                      data
                  }
              }
        }`;
      const response = await cms.api.strapi.fetchGraphql(
        saveMutation,
        {
          data: (values),
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
      'description',
      'email',
      createImageFieldConfig(),
      {
        name: 'socials',
        component: 'group',
        itemProps: item => ({
          key: item.id,
          label: item.title,
        }),
        fields: [
          {
            name: 'facebook', component: 'text'
          },
          {
            name: 'instagram', component: 'text'
          },
          {
            name: 'pinterest', component: 'text'
          },

        ]
      },
      {
        label: 'navbar',
        name: 'navbar',
        itemProps: item => ({
          key: item.id,
          label: item.title,
        }),
        component: 'group-list',
        fields: createFields([
          'title',
          'href'
        ]),
      },
      ({
        label: 'Gallery',
        name: 'gallery',
        component: 'group-list',
        defaultItem: () => ({
          title: 'Boundles Amour',
          subTitle: 'TESS & ANDY',
          url: '/'
        }),
        itemProps: (item, i) => {
          return ({
            label: item.title,
            key: i
          })
        },
        fields: [
          {
            label: 'title',
            name: 'title',
            component: 'text'
          }, {
            label: 'subTitle',
            name: 'subTitle',
            component: 'text'
          }, {
            label: 'url',
            name: 'url',
            component: 'text'
          }, createImageFieldConfig()
        ],
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
    ]),
  }
  const [formdata, form] = useForm(formConfig)
  usePlugin(form);
  return (children || null) && children(formdata)
}
export default AppConfig