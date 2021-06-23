import Container from "@components/container";
import { createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import React from 'react';
import { RatioContaner } from "./RatioContaner";
export const Layout21 = ({
  image1, image2
}) => {
  return <Container>
    <div className="grid md:grid-cols-3 gap-3 lg:gap-6">
      <div className="md:col-span-2">
        <RatioContaner variant="horizontal">
          <Image src={image1?.src} alt="meraki wedding planners" objectPosition="center center"></Image>
        </RatioContaner>
      </div>
      <RatioContaner>
        <Image src={image2?.src} alt="meraki wedding planners" objectPosition="center center"></Image>
      </RatioContaner>
    </div>
  </Container>;
};
export const layout21_template = {
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