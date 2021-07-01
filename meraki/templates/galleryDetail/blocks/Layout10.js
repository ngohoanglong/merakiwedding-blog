import Container from "@components/container";
import { createFields, createImageFieldConfig } from "@providers/tinacms/helpers";
import { SectionHeadline } from "./SectionHeadline";
import { SectionTagline } from "./SectionTagline";

export const Layout10 = ({
  title, description, content
}) => {
  return <Container>
    <div className="md:flex items-center space-x-2 md:space-x-3">
      <div className="flex-1 relative">
        <SectionHeadline>{title}</SectionHeadline>
      </div>
      <div className="w-full flex-1 md:pl-12" >
        <div className="py-6 md:py-0">
          <SectionTagline>{description}</SectionTagline>
          <div className="h-3"></div>
          <div className='text-center md:text-justify whitespace-pre-line' dangerouslySetInnerHTML={{ __html: content }}>
          </div>
        </div>
      </div>
    </div>
  </Container>;
};
export const layout10_template = {
  defaultItem: {
    image1: {
      src: '/home/explore-our-wedding/3.jpg'
    },
    title: 'LOREM IPSUM DOLOR SIT AMET,',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
    content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
    consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
    velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
    at vero eros et accumsan et iusto odio dignissim qui blandit praesent
    luptatum zzril delenit augue duis dolore te feugait nulla facilisi.`
  },
  fields: createFields([
    createImageFieldConfig(),
    'title', 'description', { name: 'content', component: 'textarea' }
  ])
}