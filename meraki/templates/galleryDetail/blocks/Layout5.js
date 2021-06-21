import Container from "@components/container";
import { createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import React from 'react';
import { RatioContaner } from "./RatioContaner";
export const Layout5 = ({
  image1
}) => {
  return <Container>
    <RatioContaner variant={"horizontal"}>
      <Image src={image1?.src} alt="meraki wedding planners"></Image>
    </RatioContaner>
  </Container>;
};
export const layout5_template = {
  defaultItem: {
    image1: {
      src: '/home/explore-our-wedding/3.jpg'
    },
  },
  fiels: [
    createImageFieldConfig({ name: 'image1' }),
  ]
}