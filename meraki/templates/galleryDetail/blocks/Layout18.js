import Container from "@components/container";
import { createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import React from 'react';
import { RatioContaner } from "./RatioContaner";
export const Layout18 = ({
  images = [],
}) => {
  return <Container>
    <RatioContaner ratio={80 / 100}>
      <div className="absolute inset-0 gap-1 md:gap-6 grid grid-cols-4 grid-rows-6">
        <div className=" relative col-start-1 col-end-3 row-start-1 row-end-7 bg-gray-100">
          {images[0] && <Image {...images[0]} />}
        </div>
        <div className=" relative col-start-3 col-end-4 row-start-1 row-end-4 bg-gray-100">
          {images[1] && <Image {...images[1]} />}
        </div>
        <div className=" relative col-start-4 col-end-5 row-start-1 row-end-4 bg-gray-100">
          {images[2] && <Image {...images[2]} />}
        </div>
        <div className=" relative col-start-3 col-end-5 row-start-4 row-end-7 bg-gray-100">
          {images[3] && <Image {...images[3]} />}
        </div>
      </div>
    </RatioContaner>
  </Container>;
};
export const layout18_template = {
  defaultItem: {
    images: [
      {
        src: '/home/explore-our-wedding/3.jpg'
      },
      {
        src: '/home/explore-our-wedding/3.jpg'
      },
      {
        src: '/home/explore-our-wedding/3.jpg'
      },
      {
        src: '/home/explore-our-wedding/3.jpg'
      }
    ]
  },
  fiels: [
    {
      name: 'images',
      component: 'group-list',
      fields: [,
        {
          name: 'variant',
          label: 'horizontal image',
          component: 'toggle',
        },
        createImageFieldConfig()
      ]
    }
  ]
}