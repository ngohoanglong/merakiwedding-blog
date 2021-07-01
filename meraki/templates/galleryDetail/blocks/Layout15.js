import Container from "@components/container";
import { createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import React from 'react';
import { RatioContaner } from "./RatioContaner";
export const Layout15 = ({
  image1, image2
}) => {
  return <Container>
    <div className="grid grid-cols-2 gap-1 md:gap-3 space-y-28">
      <div>
        <RatioContaner variant="square">
          <Image src={image1?.src} alt="meraki wedding planners" objectPosition="center center"></Image>
        </RatioContaner>
      </div>
      <div>
        <RatioContaner variant="square">
          <Image src={image2?.src} alt="meraki wedding planners" objectPosition="center center"></Image>
        </RatioContaner>
      </div>
    </div>
  </Container>;
};
export const layout15_template = {
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