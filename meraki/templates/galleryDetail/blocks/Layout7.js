import Container from "@components/container";
import { createFields } from "@providers/tinacms/helpers";
import { SectionHeadline } from "./SectionHeadline";
import { SectionTagline } from "./SectionTagline";

export const Layout7 = ({
  title, description, content
}) => {
  return <Container>
    <div className="md:flex items-center max-w-prose mx-auto">
      <div className="max-w-5xl mx-auto w-full text-center">
        <SectionHeadline>{title}</SectionHeadline>
        <div className="h-6"></div>
        <SectionTagline>{description}</SectionTagline>
        <div className="h-3"></div>
        <div className="justify-center" dangerouslySetInnerHTML={{ __html: content }}>
        </div>
      </div>
    </div>
  </Container>;
};
export const layout7_template = {
  defaultItem: {
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
    'title', 'description', { name: 'content', component: 'textarea' }
  ])
}