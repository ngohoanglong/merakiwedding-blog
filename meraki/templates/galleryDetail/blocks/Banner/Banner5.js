import Container from '@components/container';
import { Image } from 'meraki/components/Image';
import React from 'react';
import { RatioContaner } from '../RatioContaner';
const Banner5 = ({ image = {}, title, subTitle, details = [] }) => {
  return <div className=" h-screen relative -mt-header  flex w-full justify-center" >
    <div style={{ zIndex: '-1' }} className='h-full absolute inset-0 flex-shrink-0 grey'>
      <Image {...image} />
    </div>
    <div className="py-header flex items-center w-full max-w-4xl">
      <Container>
        <div className="text-xl md:text-2xl">{subTitle}</div>
        <h1 className="leading-none text-3xl  md:text-5xl font-kinfolk pt-6 max-w-sm">{title}</h1>
        <ul className="py-12 mt-12 md:text-lg space-y-3" >
          {details.map((item, i) => (<li className="flex items-baseline space-x-2" key={i}><div className="font-extrabold">{item.label}</div><div>{item.value}</div></li>))}
        </ul>
      </Container>
      <div style={{ zIndex: '-1' }} className='hidden h-full w-5/12 relative flex-shrink-0 md:flex flex-col justify-center'>
        <RatioContaner>
          <Image {...image} />
        </RatioContaner>
      </div>
    </div>

  </div>
}
export default Banner5