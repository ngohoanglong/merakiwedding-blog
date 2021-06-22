import Container from '@components/container';
import React from 'react';
const Banner3 = ({ title, subTitle, details }) => {
  return <div className=" h-screen py-header relative -mt-header  flex w-full items-center justify-center px-12" >
    <div className="">
      <Container>
        <div className="text-xl md:text-2xl">{subTitle}</div>
        <h1 className="leading-none text-3xl  md:text-5xl font-kinfolk pt-6 max-w-sm">{title}</h1>
      </Container>
    </div>
    <div className="">
      <Container>
        <ul className="py-12 md:text-lg space-y-5">
          {details.map((item, i) => (<li key={i}><div className="font-extrabold truncate">{item.label}</div><div>{item.value}</div></li>))}
        </ul>
      </Container>
    </div>

  </div>
}
export default Banner3