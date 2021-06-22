import { Image } from 'meraki/components/Image';
import React from 'react';
const Banner4 = ({ image = {} }) => {
  return <div className="min h-screen relative -mt-header bg-element-7 py-header flex flex-col justify-center items-center">
    <div className='w-9/12 h-4/5 m-auto relative flex justify-center items-center'>
      <Image {...image} variant="cover" />
    </div>
  </div>
}
export default Banner4