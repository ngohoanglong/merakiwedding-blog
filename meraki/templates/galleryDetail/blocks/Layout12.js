import Container from "@components/container";
import { createFields, createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import { RatioContaner } from "./RatioContaner";
import { SectionHeadline } from "./SectionHeadline";
import { SectionTagline } from "./SectionTagline";

export const Layout12 = ({
  title, description, content, image1, image2
}) => {
  return <Container>
    <div className="md:flex items-center space-x-12 flex-row-reverse space-x-reverse">
      <div className="flex-1 relative flex space-x-3">
        <div className="flex-1" style={{ minWidth: '200px', zIndex: '-1' }}>
          <RatioContaner >
            <Image src={image1?.src} alt="meraki wedding planners"></Image>
          </RatioContaner>
        </div>
        <div className="flex-1" style={{ minWidth: '200px', zIndex: '-1' }}>
          <RatioContaner >
            <Image src={image2?.src} alt="meraki wedding planners"></Image>
          </RatioContaner>
        </div>
      </div>
      <div className="py-12" style={{ minWidth: '320px', width: '45%', }}>
        <div className="max-w-md mx-auto">
          <SectionHeadline>{title}</SectionHeadline>
          <div className="h-6"></div>
          <SectionTagline>{description}</SectionTagline>
          <div className="h-3"></div>
          <div className='text-justify' dangerouslySetInnerHTML={{ __html: content }}>
          </div>
        </div>
      </div>
    </div>
  </Container>;
};
export const layout12_template = {
  defaultItem: {
    image1: {
      src: '/home/explore-our-wedding/3.jpg'
    },
    image2: {
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
  fiels: createFields([
    createImageFieldConfig(),
    'title', 'description', { name: 'content', component: 'textarea' }
  ])
}