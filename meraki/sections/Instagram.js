import Container from '@components/container'
import { useSource } from '@providers/source'
import { Link } from 'meraki/components/Link'
import NextImage from 'next/image'
import { useEffect, useState } from 'react'
import { Image } from '../components/Image'
export const Instagram = () => {
  const { get } = useSource()
  const [data, setData] = useState()
  // console.log({
  //   instagram: get('app.data.instagram')
  // });
  useEffect(() => {
    fetch('/api/instagram')
      .then((res) => res.json())
      .then((res) => {
        setData(
          res.data.map((item) => ({
            ...item,
            url: item.permalink,
            image: item.media_url,
            alt: item.caption,
          }))
        )
      })
  }, [])
  return (
    <Container>
      <div className="">
        <div className="flex flex-col items-center text-center">
          <div className="text-2xl font-sweetsans">
            {get('app.data.instagram.title', 'INSTAGRAM')}
          </div>
          <div className="relative w-40 h-14">
            <Image
              {...get('app.data.instagram.image', {
                src: '/home/icons/web-homepage-icons-04.png',
              })}
              objectFit="contain"></Image>
          </div>
          <div className="h-12"></div>
          <div className="grid w-full grid-cols-3 gap-1 lg:grid-cols-6 lg:gap-3 lg:flex-wrap ">
            {(data || get('app.data.instagram', [])).map((item, i) => {
              const src = item.image
              if (!src || i >= 6) return null
              return (
                <Link
                  href={item.url || '#'}
                  key={i}
                  className="transition-transform transform group">
                  <div className="relative w-full overflow-hidden bg-element-4">
                    <div style={{ paddingTop: '100%' }}></div>
                    <NextImage
                      className="absolute inset-0 object-cover w-full h-full transition-transform duration-1000 transform scale-100 group-hover:scale-105"
                      alt={item.alt}
                      layout="fill"
                      sizes="(max-width: 600px) 245px,
                      245px"
                      src={item.image}></NextImage>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}
