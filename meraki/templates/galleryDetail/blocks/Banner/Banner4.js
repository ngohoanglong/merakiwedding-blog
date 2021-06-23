import { Image } from 'meraki/components/Image';
import React from 'react';
import Banner3 from './Banner3';
const Banner4 = ({ image = {}, ...rest }) => {
  return <>
    <div className="min h-screen relative -mt-header bg-element-9 py-header flex flex-col justify-center items-center">
      <div className='w-9/12 h-4/5 m-auto relative flex justify-center items-center'>
        <Image {...image} variant="cover" />
      </div>
    </div>
    <Banner3 {...rest} />
  </>
}
export default Banner4