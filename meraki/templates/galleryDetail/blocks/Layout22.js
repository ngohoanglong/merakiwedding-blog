import Container from '@components/container'
import {
  createFields,
  createImageFieldConfig
} from '@providers/tinacms/helpers'
import { Image } from 'meraki/components/Image'
import { RatioContaner } from './RatioContaner'
import { SectionHeadline } from './SectionHeadline'
import { SectionTagline } from './SectionTagline'
const LAYOUT = {
  layout1: 'layout1',
  layout2: 'layout2',
}
export const Layout22 = ({
  title,
  description,
  content,
  image1 = {},
  image2 = {},
  image3 = {},
  variant,
}) => {
  if (variant === LAYOUT.layout2) {
    return (
      <Container>
        <div className="md:grid grid-cols-2 gap-1 md:gap-3 items-start">
          <div
            className="md:pr-12 flex-1"
            style={{
              minWidth: '320px',
            }}>
            <div className="">
              <div className="flex space-x-2 md:space-x-3 mb-6">
                <div className="flex-1">
                  <RatioContaner>
                    <Image
                      src={image2?.src}
                      alt="meraki wedding planners"
                      objectPosition="center center"></Image>
                  </RatioContaner>
                </div>
                <div className="flex-1">
                  <RatioContaner>
                    <Image
                      src={image3?.src}
                      alt="meraki wedding planners"
                      objectPosition="center center"></Image>
                  </RatioContaner>
                </div>
              </div>
              <SectionHeadline>
                {title}
              </SectionHeadline>
              <div className="h-2"></div>
              <SectionTagline>
                {description}
              </SectionTagline>
              <div className="h-6"></div>
              <div
                className="text-justify whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: content,
                }}></div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div
              style={{
                minWidth: '',
                zIndex: '-1',
              }}>
              <RatioContaner>
                <Image
                  src={image1?.src}
                  alt="meraki wedding planners"
                  objectPosition="center center"></Image>
              </RatioContaner>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3 items-start">
        <div className="flex-1 relative">
          <div
            style={{
              minWidth: '',
              zIndex: '-1',
            }}>
            <RatioContaner>
              <Image
                src={image1?.src}
                alt="meraki wedding planners"
                objectPosition="center center"></Image>
            </RatioContaner>
          </div>
        </div>
        <div
          className="md:pl-12 flex-1"
          style={{ minWidth: '320px' }}>
          <div className="">
            <div className="flex space-x-2 md:space-x-3 mb-6">
              <div className="flex-1">
                <RatioContaner>
                  <Image
                    src={image2?.src}
                    alt="meraki wedding planners"
                    objectPosition="center center"></Image>
                </RatioContaner>
              </div>
              <div className="flex-1">
                <RatioContaner>
                  <Image
                    src={image3?.src}
                    alt="meraki wedding planners"
                    objectPosition="center center"></Image>
                </RatioContaner>
              </div>
            </div>
            <SectionHeadline>
              {title}
            </SectionHeadline>
            <div className="h-2"></div>
            <SectionTagline>
              {description}
            </SectionTagline>
            <div className="h-6"></div>
            <div
              className="text-justify whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: content,
              }}></div>
          </div>
        </div>
      </div>
    </Container>
  )
}
export const layout22_template = {
  defaultItem: {
    image1: {
      src: '/home/explore-our-wedding/3.jpg',
    },
    image2: {
      src: '/home/explore-our-wedding/3.jpg',
    },
    image3: {
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
    {
      name: 'variant',
      label: 'layout',
      component: 'select',
      options: [
        {
          label: LAYOUT.layout1,
          value: LAYOUT.layout1,
        },
        {
          label: LAYOUT.layout2,
          value: LAYOUT.layout2,
        },
      ],
    },
    createImageFieldConfig({
      name: 'image1',
    }),
    createImageFieldConfig({
      name: 'image2',
    }),
    createImageFieldConfig({
      name: 'image3',
    }),
    'title',
    'description',
    {
      name: 'content',
      component: 'textarea',
    },
  ]),
}
