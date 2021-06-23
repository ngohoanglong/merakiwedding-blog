import Container from "@components/container";
import { createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import React from 'react';
import { RatioContaner } from "./RatioContaner";
export const Layout20 = ({
  image = {}, variant
}) => {
  return <Container>
    <RatioContaner variant={variant}>
      <Image {...image} objectPosition="center center" />
    </RatioContaner>
  </Container>;
};
export const layout20_template = {
  defaultItem: {
    image: {
      src: '/home/explore-our-wedding/3.jpg'
    }
  },
  fields: [
    {
      name: 'variant',
      label: 'horizontal image',
      component: 'toggle',
    },
    createImageFieldConfig()
  ]
}