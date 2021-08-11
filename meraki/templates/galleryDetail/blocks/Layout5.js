import Container from '@components/container'
import { createImageFieldConfig } from '@providers/tinacms/helpers'
import React from 'react'
import Image from '../components/Image'
import { RatioContaner } from './RatioContaner'
export const Layout5 = ({ image1 }) => {
  return (
    <Container>
      <RatioContaner variant={'horizontal'}>
        <Image
          src={image1?.src}
          alt="meraki wedding planners"
          objectPosition="center center"></Image>
      </RatioContaner>
    </Container>
  )
}
export const layout5_template = {
  defaultItem: {
    image1: {
      src: '/home/explore-our-wedding/3.jpg',
    },
  },
  fields: [createImageFieldConfig({ name: 'image1' })],
}
