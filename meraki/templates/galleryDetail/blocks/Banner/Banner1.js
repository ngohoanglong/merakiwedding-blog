import { Image } from 'meraki/components/Image'
import React from 'react'
import Banner3 from './Banner3'
const Banner1 = ({ image = {}, ...rest }) => {
  return (
    <>
      <div
        style={{ height: '60vh' }}
        className=" relative -mt-header bg-element-9">
        <div className="absolute inset-0">
          <Image {...image} variant="cover" />
        </div>
      </div>
      <Banner3 {...rest} />
    </>
  )
}
export default Banner1
