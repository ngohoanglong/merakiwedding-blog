import Container from '@components/container'
import { createImageFieldConfig } from '@providers/tinacms/helpers'
import Image from '../components/Image'
export const Layout19 = ({ images = [] }) => {
  let imgs = images.map((item) => ({ src: item?.image?.src || item?.src }))
  return (
    <Container>
      <div className="md:pt-[70%] md:relative">
        <div className="md:absolute inset-0 w-full h-full grid grid-cols-1 md:grid-cols-6 md:grid-rows-6  gap-1 md:gap-3 ">
          <div className=" relative row-span-2 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 bg-gray-100">
            <div className="pt-[70%] md:hidden"></div>
            {imgs[0] && <Image {...imgs[0]} objectPosition="center center" />}
          </div>
          <div className=" relative row-span-4 md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-5 bg-gray-100">
            <div className="pt-[130%] md:hidden"></div>
            {imgs[1] && <Image {...imgs[1]} objectPosition="center center" />}
          </div>
          <div className=" relative  md:col-start-5 md:col-end-7 md:row-start-1 md:row-end-3 bg-gray-100">
            <div className="pt-[70%] md:hidden"></div>
            {imgs[2] && <Image {...imgs[2]} objectPosition="center center" />}
          </div>
          <div className=" relative  md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-7 bg-gray-100">
            <div className="pt-[130%] md:hidden"></div>
            {imgs[3] && <Image {...imgs[3]} objectPosition="center center" />}
          </div>
          <div className=" relative  md:col-start-3 md:col-end-5 md:row-start-5 md:row-end-7 bg-gray-100">
            <div className="pt-[70%] md:hidden"></div>
            {imgs[4] && <Image {...imgs[4]} objectPosition="center center" />}
          </div>
          <div className=" relative  md:col-start-5 md:col-end-7 md:row-start-3 md:row-end-7 bg-gray-100">
            <div className="pt-[130%] md:hidden"></div>
            {imgs[5] && <Image {...imgs[5]} objectPosition="center center" />}
          </div>
        </div>
      </div>
    </Container>
  )
}
export const layout19_template = {
  defaultItem: {
    images: [
      {
        src: '/home/explore-our-wedding/3.jpg',
      },
      {
        src: '/home/explore-our-wedding/3.jpg',
      },
      {
        src: '/home/explore-our-wedding/3.jpg',
      },
      {
        src: '/home/explore-our-wedding/3.jpg',
      },
      {
        src: '/home/explore-our-wedding/3.jpg',
      },
      {
        src: '/home/explore-our-wedding/3.jpg',
      },
    ],
  },
  fields: [
    {
      name: 'images',
      component: 'group-list',
      fields: [
        ,
        {
          name: 'variant',
          label: 'horizontal image',
          component: 'toggle',
        },
        createImageFieldConfig(),
      ],
    },
  ],
}
