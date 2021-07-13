import Image from 'next/image'

export default function Intro() {
  const text =
    'we are here not only for just stories and photos but also useful information that you might need for the big day'
  return (
    <>
      <section
        style={{
          marginTop:
            'calc(0px - var(--header-height))',
        }}
        className="relative hidden md:block  w-full">
        <div
          style={{
            width: '100%',
            paddingTop: `${
              (737 / 1439) * 100
            }%`,
          }}></div>
        <div className="w-full absolute inset-0 bg-gray-100">
          <Image
            layout="fill"
            className="w-full h-full object-cover"
            src={'/intro-web.png'}
          />
        </div>
      </section>
      <section
        style={{
          marginTop:
            'calc(0px - var(--header-height))',
        }}
        className="relative block md:hidden w-full">
        <div
          style={{
            width: '100%',
            paddingTop: `${
              (800 / 600) * 100
            }%`,
          }}></div>
        <div className="w-full absolute inset-0 bg-gray-100">
          <Image
            layout="fill"
            className="w-full h-full object-cover"
            src={'/intro.png'}
          />
        </div>
      </section>
    </>
  )
}
