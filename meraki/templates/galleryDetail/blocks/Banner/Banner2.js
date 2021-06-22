import Container from '@components/container';
import { Image } from 'meraki/components/Image';
import React from 'react';
import { RatioContaner } from '../RatioContaner';
const Banner2 = ({ image = {}, title, subTitle, details = [] }) => {
  return <div className=" h-screen -mt-header  flex w-full relative" >
    <div style={{ zIndex: '-1' }} className='h-full absolute inset-0 w-full md:w-1/3 md:relative flex-shrink-0'>
      <Image {...image} />
    </div>
    <div className="py-header flex items-center flex-1">
      <Container>
        <div className="text-xl md:text-2xl">{subTitle}</div>
        <h1 className="leading-none text-3xl  md:text-5xl font-kinfolk pt-6 max-w-sm">{title}</h1>
        <ul className="py-12 md:text-lg space-y-3" >
          {details.map((item, i) => (<li key={i} className="flex items-baseline"><div className="font-extrabold">{item.label}</div><div>{item.value}</div></li>))}
        </ul>
      </Container>
      <div style={{ zIndex: '-1' }} className='hidden h-full w-1/4 relative flex-shrink-0 md:flex flex-col justify-center'>
        <RatioContaner>
          <Image {...image} />
        </RatioContaner>
      </div>
    </div>

  </div>
}
export default Banner2