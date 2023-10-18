import Container from '@components/container'
import { createImageFieldConfig } from '@providers/tinacms/helpers'
import Image from '../components/Image'
export const Layout26 = ({ images = [] }) => {
  let imgs = images.map((item) => item?.image?.src || item?.src)

  return (
    <Container>
      <div className="md:pt-[70%] relative">
        <div className="md:absolute inset-0 w-full h-full grid grid-cols-2 md:grid-cols-4 md:grid-rows-3  gap-1 md:gap-3 ">
          <div className=" relative col-span-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 bg-gray-100">
            <div className="pt-[70%] md:hidden"></div>
            {imgs[0] && <Image src={imgs[0]} objectPosition="center center" />}
          </div>
          <div className=" relative col-span-1 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 bg-gray-100">
            <div className="pt-[70%] md:hidden"></div>
            {imgs[1] && <Image src={imgs[1]} objectPosition="center center" />}
          </div>
          <div className=" relative col-span-1 md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3 bg-gray-100">
            <div className="pt-[70%] md:hidden"></div>
            {imgs[2] && <Image src={imgs[2]} objectPosition="center center" />}
          </div>
          <div className=" relative col-span-2 md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-4 bg-gray-100">
            <div className="pt-[70%] md:hidden"></div>
            {imgs[3] && <Image src={imgs[3]} objectPosition="center center" />}
          </div>
          <div className=" relative col-span-1 md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4 bg-gray-100">
            <div className="pt-[70%] md:hidden"></div>
            {imgs[4] && <Image src={imgs[4]} objectPosition="center center" />}
          </div>
          <div className=" relative col-span-1 md:col-start-4 md:col-end-5 md:row-start-3 md:row-end-4 bg-gray-100">
            <div className="pt-[70%] md:hidden"></div>
            {imgs[5] && <Image src={imgs[5]} objectPosition="center center" />}
          </div>
        </div>
      </div>
    </Container>
  )
}
export const layout26_template = {
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
