import Container from "@components/container";
import { createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import React from 'react';
import { RatioContaner } from "./RatioContaner";
export const Layout3 = ({
  image1, image2
}) => {
  return <Container>
    <div className="grid grid-cols-2 gap-3 lg:gap-6">
      <RatioContaner>
        <Image src={image1?.src} alt="meraki wedding planners" objectPosition="center center"></Image>
      </RatioContaner>
      <RatioContaner>
        <Image src={image2?.src} alt="meraki wedding planners" objectPosition="center center"></Image>
      </RatioContaner>
    </div>
  </Container>;
};
export const layout3_template = {
  defaultItem: {
    image1: {
      src: '/home/explore-our-wedding/3.jpg'
    },
    image2: {
      src: '/home/explore-our-wedding/3.jpg'
    }
    ,
  },
  fields: [
    createImageFieldConfig({ name: 'image1' }),
    createImageFieldConfig({ name: 'image2' }),
  ]
}