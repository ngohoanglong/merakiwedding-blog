import Container from '@components/container'
import {
  createFields,
  createImageFieldConfig,
} from '@providers/tinacms/helpers'
import { Image } from 'meraki/components/Image'
import { RatioContaner } from './RatioContaner'
import { SectionHeadline } from './SectionHeadline'
import { SectionTagline } from './SectionTagline'

export const Layout4 = ({
  title,
  description,
  content,
  image,
}) => {
  return (
    <Container>
      <div className="md:grid grid-cols-5 gap-2 md:gap-3">
        <div className="col-span-3 py-12 pr-12">
          <div className="mx-auto">
            <SectionHeadline>
              {title}
            </SectionHeadline>
            <div className="h-6"></div>
            <SectionTagline>
              {description}
            </SectionTagline>
            <div className="h-3"></div>
            <div
              className="text-justify whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: content,
              }}></div>
          </div>
        </div>
        <div className="col-span-2 relative">
          <div
            style={{
              minWidth: '200px',
              zIndex: '-1',
            }}>
            <RatioContaner>
              <Image
                src={image?.src}
                alt="meraki wedding planners"
                objectPosition="center center"></Image>
            </RatioContaner>
          </div>
        </div>
      </div>
    </Container>
  )
}
export const layout4_template = {
  defaultItem: {
    image: {
      src: '/home/explore-our-wedding/3.jpg',
    },
    title:
      'LOREM IPSUM DOLOR SIT AMET,',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing',
    content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
    consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
    velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
    at vero eros et accumsan et iusto odio dignissim qui blandit praesent
    luptatum zzril delenit augue duis dolore te feugait nulla facilisi.`,
  },
  fields: createFields([
    createImageFieldConfig(),
    'title',
    'description',
    {
      name: 'content',
      component: 'textarea',
    },
  ]),
}
