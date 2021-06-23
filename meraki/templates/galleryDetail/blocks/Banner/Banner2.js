import Container from '@components/container';
import { Image } from 'meraki/components/Image';
import React from 'react';
import { RatioContaner } from '../RatioContaner';
const Banner2 = ({ image = {}, image2 = {}, title, subTitle, details = [] }) => {
  return <div className=" min-h-screen -mt-header  flex flex-col justify-center items-center w-full relative bg-element-9" >
    <div className="flex relative w-full">
      <div className='min-h-screen absolute inset-0 w-full md:w-1/3 md:relative flex-shrink-0'>
        <Image {...image} variant="cover" />
      </div>
      <div className="py-header flex items-center flex-1">
        <Container>
          <div className="text-xl md:text-2xl">{subTitle}</div>
          <h1 className="leading-none text-3xl  md:text-5xl font-kinfolk pt-6 max-w-sm">{title}</h1>
          <ul className="py-12 md:text-lg space-y-3" >
            {details.map((item, i) => (<li key={i} className="flex items-baseline space-x-2"><div className="font-extrabold truncate">{item.label}</div><div>{item.value}</div></li>))}
          </ul>
        </Container>
        <div className='hidden h-full w-1/4 relative flex-shrink-0 md:flex flex-col justify-center'>
          <RatioContaner>
            <Image {...image2} />
          </RatioContaner>
        </div>
      </div>
    </div>

  </div>
}
export default Banner2