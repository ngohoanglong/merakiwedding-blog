import Container from '@components/container'
import { createImageFieldConfig } from '@providers/tinacms/helpers'
import React from 'react'
import Image from '../components/Image'
import { RatioContaner } from './RatioContaner'
export const Layout3 = ({ image1, image2, variant }) => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-1 md:gap-3">
        <RatioContaner variant={variant}>
          <Image
            src={image1?.src}
            alt="meraki wedding planners"
            objectPosition="center center"></Image>
        </RatioContaner>
        <RatioContaner variant={variant}>
          <Image
            src={image2?.src}
            alt="meraki wedding planners"
            objectPosition="center center"></Image>
        </RatioContaner>
      </div>
    </Container>
  )
}
export const layout3_template = {
  defaultItem: {
    image1: {
      src: '/home/explore-our-wedding/3.jpg',
    },
    image2: {
      src: '/home/explore-our-wedding/3.jpg',
    },
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
        },
      ],
    },
    createImageFieldConfig({ name: 'image1' }),
    createImageFieldConfig({ name: 'image2' }),
  ],
}
