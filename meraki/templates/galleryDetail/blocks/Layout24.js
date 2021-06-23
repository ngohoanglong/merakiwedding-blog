import Container from "@components/container";
import { createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import React from 'react';
import { RatioContaner } from "./RatioContaner";
export const Layout24 = ({
  images = [],
}) => {
  return <Container>
    <RatioContaner ratio={70 / 100}>
      <div className="absolute inset-0 w-full h-full grid grid-cols-3 grid-rows-3  gap-3 ">
        <div className=" relative col-start-1 col-end-2 row-start-1 row-end-2 bg-gray-100">
          {images[0] && <Image {...images[0]} />}
        </div>
        <div className=" relative col-start-2 col-end-4 row-start-1 row-end-3 bg-gray-100">
          {images[1] && <Image {...images[1]} />}
        </div>
        <div className=" relative col-start-1 col-end-2 row-start-2 row-end-4 bg-gray-100">
          {images[2] && <Image {...images[2]} />}
        </div>
        <div className=" relative col-start-2 col-end-3 row-start-3 row-end-4 bg-gray-100">
          {images[3] && <Image {...images[3]} />}
        </div>
        <div className=" relative col-start-3 col-end-4 row-start-3 row-end-4 bg-gray-100">
          {images[4] && <Image {...images[4]} />}
        </div>

      </div>
    </RatioContaner>
  </Container>;
};
export const layout24_template = {
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
      },
      {
        src: '/home/explore-our-wedding/3.jpg'
      },
    ]
  },
  fields: [
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