import { useLocal } from "@providers/local";
import { useCMS, useForm, usePlugin } from 'tinacms';
import { createFields, createImageFieldConfig, createImageFields } from "./helpers";

const AppConfig = ({ data = {} }) => {
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
  return null
}
export default AppConfig