const screens = ['xs', 'lg'];
const screensdescriptions = ['mobile', 'laptop'];

export const createScreenGroup = ({
  label,
  name,
  component,
  description,
  ...rest
}) => {
  return {
    name,
    component: 'group',
    description,
    fields: screens.map((str, i) => {
      return {
        name: str,
        component,
        description: label + ' ' + screensdescriptions[i],
        ...rest
      };
    }),
  };
};
export const createImageFields = () => {
  return [
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
  ]
}
export const getThumb = src => (src) && src.replace('/uploads/', '/uploads/thumbnail_')
export const createFields = (fields) => {
  return fields.map(item => {
    if (item === 'description') {
      return ({
        label: item,
        name: item,
        component: 'textarea',
      });
    }
    if (item === 'content') {
      return ({
        label: item,
        name: item,
        component: 'html',
      });
    }
    if (typeof item === 'string') {
      return ({
        label: item,
        name: item,
        component: 'text',
      });
    }
    if (item && item.component === 'image') {
      return ({
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
              return fullSrc.replace('/uploads/', '/uploads/small_');
            },
          },
        ],
      });
    }
    return (item);
  }).filter(Boolean)
}
export const createBlock = ({
  label, name, description, fields = [], composeField = createScreenGroup
}) => {
  return ({
    label,
    name,
    component: 'group',
    description,
    fields: fields.map(item => {
      if (typeof item === 'string') {
        return composeField({
          label: item,
          name: item,
          component: 'text',
        });
      }
      if (item && item.component === 'image') {
        return composeField({
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
        });
      }
      return composeField(item);
    }).filter(Boolean)
  });
};
export const createImageFieldConfig = ({
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
  };
};
