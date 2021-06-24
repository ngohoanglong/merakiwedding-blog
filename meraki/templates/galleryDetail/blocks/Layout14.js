import Container from "@components/container";
import { createFields } from "@providers/tinacms/helpers";
import { SectionHeadline } from "./SectionHeadline";
import { SectionTagline } from "./SectionTagline";

export const Layout14 = ({
  title, contents = []
}) => {
  return <Container>
    <div className="items-center space-y-12 py-12 text-center">
      <SectionHeadline>{title}</SectionHeadline>
      <div className="grid lg:grid-cols-3  gap-3  lg:gap-12">
        {
          contents.map((block, i) => (
            <div key={i}>
              <SectionTagline>{block.title}</SectionTagline>
              <div className="h-3"></div>
              <div className='text-justify' dangerouslySetInnerHTML={{ __html: block.description }}>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  </Container>;
};
export const layout14_template = {
  defaultItem: {
    title: 'LOREM IPSUM DOLOR SIT AMET,',
    contents: [
      {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
      nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
      erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
      tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
      consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
      velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
      at vero eros et accumsan et iusto odio dignissim qui blandit praesent
      luptatum zzril delenit augue duis dolore te feugait nulla facilisi.`
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
      nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
      erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
      tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
      consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
      velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
      at vero eros et accumsan et iusto odio dignissim qui blandit praesent
      luptatum zzril delenit augue duis dolore te feugait nulla facilisi.`
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
      nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
      erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
      tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
      consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
      velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
      at vero eros et accumsan et iusto odio dignissim qui blandit praesent
      luptatum zzril delenit augue duis dolore te feugait nulla facilisi.`
      }
    ]
  },
  fields: createFields([
    'title',
    {
      name: 'contents',
      component: 'group-list',
      fields: createFields(['title', 'description'])
    }
  ])
}