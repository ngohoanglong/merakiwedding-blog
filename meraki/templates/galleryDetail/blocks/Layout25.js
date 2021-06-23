import Container from "@components/container";
import { createImageFieldConfig } from "@providers/tinacms/helpers";
import { Image } from "meraki/components/Image";
import React from 'react';
import { RatioContaner } from "./RatioContaner";
export const Layout25 = ({
  image1 = {}, image2 = {}, image3 = {}
}) => {
  return <Container>
    <div className="grid md:grid-cols-2 items-center gap-2 lg:gap-3">
      <div className="">
        <RatioContaner >
          <Image src={image1?.src} alt="meraki wedding planners" objectPosition="center center"></Image>
        </RatioContaner>
      </div>
      <div className='flex space-x-3 lg:space-x-6'>
        <div className="flex-1 relative">
          <RatioContaner >
            <Image src={image2?.src} alt="meraki wedding planners" objectPosition="center center"></Image>
          </RatioContaner>
        </div>
        <div className="flex-1 relative">
          <RatioContaner >
            <Image src={image3?.src} alt="meraki wedding planners" objectPosition="center center"></Image>
          </RatioContaner>
        </div>
      </div>
    </div>
  </Container>;
};
export const layout25_template = {
  defaultItem: {
    image1: {
      src: '/home/explore-our-wedding/3.jpg'
    },
    image2: {
      src: '/home/explore-our-wedding/3.jpg'
    }
    , image3: {
      src: '/home/explore-our-wedding/3.jpg'
    }
    ,
  },
  fields: [
    createImageFieldConfig({ name: 'image1' }),
    createImageFieldConfig({ name: 'image2' }),
    createImageFieldConfig({ name: 'image3' }),
  ]
}