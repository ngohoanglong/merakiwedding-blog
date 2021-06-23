import Container from "@components/container";
import { createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import React from 'react';
import { RatioContaner } from "./RatioContaner";
export const Layout1 = ({
  images = [], variant
}) => {
  return <Container>
    <div className="grid grid-cols-3 gap-2 lg:gap-3">
      {images.map((item, i) => {
        return <RatioContaner key={i} variant={variant}>
          <Image src={item.src} alt="meraki wedding planners" objectPosition="center center"></Image>
        </RatioContaner>
      })}

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
      component: 'toggle',
    },
    {
      name: 'images',
      component: 'group-list',
      fields: createImageFieldConfig().fields
    }
  ]
}