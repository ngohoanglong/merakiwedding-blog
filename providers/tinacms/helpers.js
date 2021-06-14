const screens = ['xs', 'lg'];
export const createScreenGroup = ({
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
      };
    }),
  };
};
export const createFields = (fields) => {
  return fields.map(item => {
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
  label, name, description, fields = []
}) => {
  return ({
    label,
    name,
    component: 'group',
    description,
    fields: fields.map(item => {
      if (typeof item === 'string') {
        return createScreenGroup({
          label: item,
          name: item,
          component: 'text',
        });
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
        });
      }
      return createScreenGroup(item);
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
