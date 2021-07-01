import Container from "@components/container";
import { createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import React from 'react';
import { RatioContaner } from "./RatioContaner";
export const Layout1 = ({
  images = [], variant
}) => {
  const image1 = images[0]
  const image2 = images[1]
  const image3 = images[2]
  return <Container>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
      <div className="col-span-1 order-1"><RatioContaner variant={variant}>
        {image1 && <Image src={image1.src} alt="meraki wedding planners" objectPosition="center center"></Image>}
      </RatioContaner></div>
      <div className="col-span-2 md:col-span-1 order-2 md:order-1"><RatioContaner variant={variant}>
        {image2 && <Image src={image2.src} alt="meraki wedding planners" objectPosition="center center"></Image>}
      </RatioContaner></div>
      <div className="col-span-1 order-1"><RatioContaner variant={variant}>
        {image3 && <Image src={image3.src} alt="meraki wedding planners" objectPosition="center center"></Image>}
      </RatioContaner></div>
    </div>
  </Container>;
};
export const layout1_template = {
  defaultItem: {
    images: [
      {
        src: '/home/explore-our-wedding/3.jpg'
      },
      {
        src: '/home/explore-our-wedding/3.jpg'
      }
      ,
      {
        src: '/home/explore-our-wedding/3.jpg'
      },
    ]
  },

  fields: [
    {
      name: 'variant',
      label: 'horizontal image',
      component: 'select',
      options: [
        {
          label: 'horizontal',
          value: 'horizontal',
        },
        {
          label: 'verticle',
          value: 'verticle',
        },
        {
          label: 'square',
          value: 'square',
        }
      ]
    },
    {
      name: 'images',
      component: 'group-list',
      fields: createImageFieldConfig().fields
    }
  ]
}