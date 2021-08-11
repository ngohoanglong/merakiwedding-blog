import Container from '@components/container'
import { createImageFieldConfig } from '@providers/tinacms/helpers'
import React from 'react'
import Image from '../components/Image'
import { RatioContaner } from './RatioContaner'
export const Layout8 = ({ image1, image2 }) => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-1 md:gap-3">
        <RatioContaner>
          <Image
            src={image1?.src}
            alt="meraki wedding planners"
            objectPosition="center center"></Image>
        </RatioContaner>
        <div className="flex justify-end items-center">
          <div className="w-2/3">
            <RatioContaner>
              <Image
                src={image2?.src}
                alt="meraki wedding planners"
                objectPosition="center center"></Image>
            </RatioContaner>
          </div>
        </div>
      </div>
    </Container>
  )
}
export const layout8_template = {
  defaultItem: {
    image1: {
      src: '/home/explore-our-wedding/3.jpg',
    },
    image2: {
      src: '/home/explore-our-wedding/3.jpg',
    },
  },
  fields: [
    createImageFieldConfig({ name: 'image1' }),
    createImageFieldConfig({ name: 'image2' }),
  ],
}
