import Container from "@components/container";
import { createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import React from 'react';
export const Layout24 = ({
  images = [],
}) => {
  return <Container>
    <div className="md:pt-[70%] md:relative">
      <div className="md:absolute inset-0 w-full h-full grid md:grid-cols-3 md:grid-rows-3  gap-1 md:gap-3 ">
        <div className="order-3 relative md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 bg-gray-300">
          <div className="pt-[70%] md:hidden"></div>
          {images[0]?.image && <Image {...images[0]?.image || {}} />}
        </div>
        <div className="order-1 md:order-2 relative md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3 bg-gray-300">
          <div className="pt-[70%] md:hidden"></div>
          {images[1]?.image && <Image {...images[1]?.image || {}} />}
        </div>
        <div className="order-2 relative md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4 bg-gray-300">
          <div className="pt-[130%] md:hidden"></div>
          {images[2]?.image && <Image {...images[2]?.image || {}} />}
        </div>
        <div className="order-3 relative md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4 bg-gray-300">
          <div className="pt-[70%] md:hidden"></div>
          {images[3]?.image && <Image {...images[3]?.image || {}} />}
        </div>
        <div className="order-3 relative md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4 bg-gray-300">
          <div className="pt-[70%] md:hidden"></div>
          {images[4]?.image && <Image {...images[4]?.image || {}} />}
        </div>
      </div>
    </div>
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