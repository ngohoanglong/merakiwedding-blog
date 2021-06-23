import Container from "@components/container";
import { createFields, createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import React from 'react';
import { RatioContaner } from "./RatioContaner";
import { SectionTagline } from "./SectionTagline";
export const Layout16 = ({
  contents = []
}) => {
  return <Container>
    <div className="grid grid-cols-2 gap-2 lg:gap-3 space-y-28">
      {
        contents.map((item, i) => {
          return <div key={i} className="flex flex-col justify-start odd:flex-col-reverse">
            <RatioContaner variant="horizontal">
              <Image src={item.image.src} alt="meraki wedding planners" objectPosition="center center"></Image>
            </RatioContaner>
            <div className="py-8 px-16">
              <SectionTagline>{item.title}</SectionTagline>
              <div className="h-3"></div>
              <div className='text-justify' dangerouslySetInnerHTML={{ __html: item.description }}>
              </div>
            </div>
          </div>
        })
      }
    </div>
  </Container>;
};
export const layout16_template = {
  defaultItem: {
    contents: [
      {
        image: {
          src: '/home/explore-our-wedding/3.jpg'
        },
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
        image: {
          src: '/home/explore-our-wedding/3.jpg'
        },
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
    ]
    ,
  },
  fields: [
    {
      component: 'group-list',
      name: 'contents',
      fields: createFields([
        createImageFieldConfig(),
        'title',
        'description'
      ])
    }

  ]
}