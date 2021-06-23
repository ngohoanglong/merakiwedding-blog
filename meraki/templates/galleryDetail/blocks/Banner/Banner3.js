import Container from '@components/container';
import React from 'react';
const Banner3 = ({ title, subTitle, details, }) => {
  return <div className="relative text-center md:text-left flex flex-col md:flex-row w-full items-center justify-center " >
    <div className="">
      <Container>
        <div className="text-lg md:text-2xl">{subTitle}</div>
        <h1 className="leading-none text-xl  md:ext-3xl  md:text-5xl font-kinfolk pt-6 md:pt-6 max-w-sm">{title}</h1>
      </Container>
    </div>
    <div className="md:px-12">
      <Container>
        <ul className="py-8 md:py-12  md:text-lg space-y-2 lg:space-y-5">
          {details.map((item, i) => (<li key={i} className="flex md:flex-col flex-wrap justify-center truncate"><div className="font-extrabold ">{item.label}</div><div className="px-2 md:px-0">{item.value}</div></li>))}
        </ul>
      </Container>
    </div>
  </div>
}
export default Banner3