import { Image } from 'meraki/components/Image';
import React from 'react';
const Banner4 = ({ image = {} }) => {
  return <div className="min h-screen relative -mt-header lg:bg-element-7 flex justify-center items-center py-header">
    <div className='w-9/12 h-full relative'>
      <Image {...image} />
    </div>
  </div>
}
export default Banner4