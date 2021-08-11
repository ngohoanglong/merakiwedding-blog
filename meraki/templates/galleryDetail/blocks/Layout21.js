import Container from '@components/container'
import { createImageFieldConfig } from '@providers/tinacms/helpers'
import React from 'react'
import Image from '../components/Image'
import { RatioContaner } from './RatioContaner'
export const Layout21 = ({ image1, image2, variant }) => {
  if (variant === LAYOUT.layout2) {
    return (
      <Container>
        <div className="grid md:grid-cols-3 gap-1 md:gap-3">
          <div>
            <RatioContaner>
              <Image
                src={image1?.src}
                alt="meraki wedding planners"
                objectPosition="center center"></Image>
            </RatioContaner>
          </div>
          <div className="md:col-span-2">
            <RatioContaner variant="horizontal">
              <Image
                src={image2?.src}
                alt="meraki wedding planners"
                objectPosition="center center"></Image>
            </RatioContaner>
          </div>
        </div>
      </Container>
    )
  }
  return (
    <Container>
      <div className="grid md:grid-cols-3 gap-1 md:gap-3">
        <div className="md:col-span-2">
          <RatioContaner variant="horizontal">
            <Image
              src={image1?.src}
              alt="meraki wedding planners"
              objectPosition="center center"></Image>
          </RatioContaner>
        </div>
        <div className="grid">
          <RatioContaner>
            <Image
              src={image2?.src}
              alt="meraki wedding planners"
              objectPosition="center center"></Image>
          </RatioContaner>
        </div>
      </div>
    </Container>
  )
}
const LAYOUT = {
  layout1: 'layout1',
  layout2: 'layout2',
}
export const layout21_template = {
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
    createImageFieldConfig({ name: 'image1' }),
    createImageFieldConfig({ name: 'image2' }),
  ],
}
