import { Image } from 'meraki/components/Image';
import React from 'react';
const Banner1 = ({ image = {} }) => {
  return <div className="min min-h-screen relative -mt-header bg-element-7">
    <div className='absolute inset-0'>
      <Image {...image} variant="cover" />
    </div>
  </div>
}
export default Banner1