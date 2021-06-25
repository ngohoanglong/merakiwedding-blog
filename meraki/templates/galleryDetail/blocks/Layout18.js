import Container from '@components/container'
import { createImageFieldConfig } from '@providers/tinacms/helpers'
import { Image } from 'meraki/components/Image'
import React from 'react'
export const Layout18 = ({
  images = [],
}) => {
  return (
    <Container>
      <div
        className="grid relative"
        style={{
          paddingBottom: '70%',
        }}>
        <div className="absolute w-full h-full inset-0 gap-12 md:gap-3 grid grid-cols-4 grid-rows-4  content-between">
          <div className=" relative col-start-1 col-end-3 row-start-1 row-end-5 bg-gray-100">
            {images[0] && (
              <Image
                {...images[0]}
                objectPosition="center center"
              />
            )}
          </div>
          <div className=" relative col-start-3 col-end-4 row-start-1 row-end-3 bg-gray-100">
            {images[1] && (
              <Image
                {...images[1]}
                objectPosition="center center"
              />
            )}
          </div>
          <div className=" relative col-start-4 col-end-5 row-start-1 row-end-3 bg-gray-100">
            {images[2] && (
              <Image
                {...images[2]}
                objectPosition="center center"
              />
            )}
          </div>
          <div className=" relative col-start-3 col-end-5 row-start-3 row-end-5 bg-gray-100">
            {images[3] && (
              <Image
                {...images[3]}
                objectPosition="center center"
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}
export const layout18_template = {
  defaultItem: {
    images: [
      {
        src: '/home/explore-our-wedding/3.jpg',
      },
      {
        src: '/home/explore-our-wedding/3.jpg',
      },
      {
        src: '/home/explore-our-wedding/3.jpg',
      },
      {
        src: '/home/explore-our-wedding/3.jpg',
      },
    ],
  },
  fields: [
    {
      name: 'images',
      component: 'group-list',
      fields:
        createImageFieldConfig().fields,
    },
  ],
}
