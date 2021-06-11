import Button from "@components/button";
import Container from "@components/container";
import SourceProvider, { useSource } from "@providers/source";
import IntroSlider from "@sections/IntroSlider";
import Slider from "@sections/Slider";
import classNames from 'classnames';
import homeData from "data/homeData";
import NextImage from "next/image";
const data = { en: homeData }
const Image = ({ src, alt, variant, ...rest }) => {
  let sizes = "(max-width: 400px) 300px, 800px"
  switch (variant) {
    case 'cover':
      sizes = "(max-width: 400px) 800px, 1400px"
      break;
    case 'card':
      sizes = "(max-width: 400px) 400px, 400px"
      break;
    case 'card-large':
      sizes = "(max-width: 400px) 400px, 800px"
      break;
    default:
      break;
  }
  return (
    <NextImage
      layout="fill"
      src={src || '/logo.png'}
      alt={alt || 'Meraki Image'}
      sizes={sizes}

      quality="85"
      objectFit="cover"
      objectPosition="bottom center"
      {...rest}
    />
  )
}

const local = 'en'
const Block = ({ title, description, children, small = true }) => {
  return <Container>
    <div className={classNames('w-full flex flex-col items-center  mx-auto py-8 lg:py-14', small && "max-w-5xl")}>
      <h2 className="text-5xl font-kinfolk text-center">{title}</h2>
      <div className="mt-2 text-center">{description}</div>
      {children}
    </div>
  </Container>
}
const LG = ({ children }) => {
  const { get } = useSource()
  const element = children((path, fallbackValue) => get(`${path}.lg`, get(`${path}.xs`, fallbackValue)))
  return React.cloneElement(element, {
    ...element.props,
    className: classNames(element.className, "hidden lg:block")
  })
}
const XS = ({ children }) => {
  const { get } = useSource()
  const element = children((path, ...args) => get(`${path}.xs`, ...args))
  return React.cloneElement(element, {
    ...element.props,
    className: classNames(element.className, "lg:hidden")
  })
}
const Intro = () => {
  const { get } = useSource()

  return <>
    <XS>
      {
        (get) => <div className="relative text-element-2">
          <IntroSlider >
            {Array.from(get('IntroSlider.items'), ({ src, alt }, i) => (
              <div
                key={i}
                className="w-full relative h-screen"
              >
                <div className="absolute inset-0">
                  <Image
                    variant="cover"
                    src={src}
                  />
                </div>
              </div>
            ))}
          </IntroSlider>
          <div className='z-10 text-center absolute top-header left-0 w-full text-white'>
            <Container>
              <div className="pt-12">
                <div className="text-3xl uppercase font-kinfolk">{get('IntroSlider.title')}</div>
                <div className="text-xl font-bold font-garamond italic">{get('IntroSlider.subTitle')}</div>
              </div>
            </Container>
          </div>
        </div>
      }
    </XS>
    <LG>
      {
        (get) => <div className="relative text-element-2">
          <IntroSlider >
            {Array.from(get('IntroSlider.items'), ({ src, alt }, i) => (
              <div
                key={i}
                className="w-full relative h-screen"
              >
                <div className="absolute inset-0">
                  <Image
                    variant="cover"
                    src={src}
                  />
                </div>
              </div>
            ))}
          </IntroSlider>
          <div className='z-10 text-center absolute bottom-14 left-0 w-full text-white'>
            <Container>
              <div>
                <div className="text-4xl uppercase font-kinfolk">{get('IntroSlider.title')}</div>
                <div className="text-2xl font-bold font-garamond italic">{get('IntroSlider.subTitle')}</div>
              </div>
            </Container>
          </div>
        </div>
      }
    </LG>
  </>


}
const Link = (props) => {
  return <a {...props} />
}
const Block1 = () => {
  const { get } = useSource()
  return <>
    <XS>
      {
        get => <div><div className='w-full flex flex-col items-center max-w-5xl mx-auto'>
          <div className="relative w-24 md:w-28">
            <div style={{
              paddingTop: `${1067 / 547 * 100}%`
            }} >
            </div>
            <Image src="/home/icons/web-homepage-icons-01.png" objectFit="contain" >
            </Image>
          </div>
          <h2 className="font-kinfolk uppercase text-2xl text-center leading-normal">
            {get('Block1.title')}
          </h2>
          <div className="font-garamond italic text-xl text-center mt-4" dangerouslySetInnerHTML={{ __html: get('Block1.description') }}></div>
          <div className="h-6" />
          <div className="w-full lg:flex items-center space-y-6 lg:space-y-0 lg:space-x-12 px-3">
            <div className="leading-relaxed flex-1 text-center">{get('Block1.text1')}</div>
            <div className="hidden lg:block w-px h-full bg-element-5 "></div>
            <div className="text-center flex-1 space-y-6 flex flex-col items-center">
              <div className="font-garamond italic leading-relaxed max-w-sm text-xl">{get('Block1.text2')}</div>
              <div className="font-semibold font-sweetsans text-xs">{get('Block1.text3')}</div>
            </div>
          </div>
          <div className="h-20" />
          <div className='lg:flex w-full bg-element-2'>
            <div className="lg:w-2/5 px-12 pt-8">
              <div className="relative w-full">
                <div style={{ paddingTop: `${2048 / 1364 * 100}%` }}></div>
                <Image src={get('Block2.image', {
                  src: '/logo-2.png'
                }).src}></Image>
              </div>
            </div>
            <div className='flex-1 pt-6 pb-8 leading-loose px-3'>
              <Container>
                <div className="flex flex-col text-center items-center">
                  <div className="text-3xl font-kinfolk">{get('Block2.title')}</div>
                  <div className="text font-garamond italic">{get('Block2.subTitle')}</div>
                  <div className="text font-commissioner font-bold">{get('Block2.description')}</div>
                  <div className="space-y-6 mt-3 leading-normal text-justify w-full">
                    {
                      get('Block2.texts', '').split("\n").map((item, i) => {
                        return <div key={i}>
                          {item}
                        </div>
                      })
                    }
                  </div>
                  <div className="h-4" />
                  <div className='flex justify-center'>
                    <a href={get('Block2.url', '/')}>
                      <Button>{get('Block2.buttonText', 'read more')}</Button>
                    </a>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div></div>
      }
    </XS>
    <LG>
      {
        get => <div>
          <div className='w-full flex flex-col items-center max-w-5xl mx-auto'>
            <div className="relative w-24 md:w-28">
              <div style={{
                paddingTop: `${1067 / 547 * 100}%`
              }} >
              </div>
              <Image src="/home/icons/web-homepage-icons-01.png" objectFit="contain" >
              </Image>
            </div>
            <h2 className="font-kinfolk uppercase text-xl text-center ">
              {get('Block1.title')}
            </h2>
            <div className="font-garamond italic text-2xl text-center" dangerouslySetInnerHTML={{ __html: get('Block1.description') }}></div>
            <div className="h-14" />
            <div className="w-full flex space-x-14 justify-evenly">
              <div className="leading-loose max-w-sm py-12 flex-1 text-justify">{get('Block1.text1')}</div>
              <div className=" w-px bg-element-5 "></div>
              <div className="text-center max-w-sm py-12 flex-1 space-y-6 flex flex-col items-center">
                <div className="font-garamond italic leading-loose max-w-sm text-2xl">{get('Block1.text2')}</div>
                <div className="font-semibold text-sm font-sweetsans">{get('Block1.text3')}</div>
              </div>
            </div>
            <div className="h-20" />
            <div className='lg:flex w-full'>
              <div className="lg:w-2/5 flex justify-center items-center">
                <div className="relative w-4/6">
                  <div style={{ paddingTop: `${2048 / 1364 * 100}%` }}></div>
                  <Image src={get('Block2.image', {
                    src: data[local].Block2.image.src
                  }).src}></Image>
                </div>
              </div>
              <div className='flex-1 pt-6 pb-8 leading-loose px-6'>
                <Container>
                  <div className="flex flex-col">
                    <div className="text-4xl font-kinfolk">{get('Block2.title')}</div>
                    <div className="text font-garamond italic text-lg mt-2">{get('Block2.subTitle')}</div>
                    <div className="text font-commissioner font-bold">{get('Block2.description')}</div>
                    <div className="space-y-6 mt-6 text-justify">
                      {
                        get('Block2.texts', '').split("\n").map((item, i) => {
                          return <div key={i}>
                            {item}
                          </div>
                        })
                      }
                    </div>
                    <div className="h-14" />
                    <div className='flex'>
                      <Button>{data[local].others["read more"]}</Button>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </div></div>
      }
    </LG>
  </>
}
// gallery
const Block3 = () => {
  const { get } = useSource()

  const galleries = get('galleries', [])
  return (
    <>
      <XS>
        {
          get => <div>
            <Block
              {
              ...{
                title: get('Block3.title'),
                description: get('Block3.description')
              }
              }
            >

              <div className="mt-4 w-full">
                {
                  get('Block3.customGallery') === true ? <Slider>
                    {
                      get('Block3.items', []).map((item, i) => <div key={i} className="p-3 relative pb-12">
                        <div className="relative">
                          <div style={{ paddingTop: `${5788 / 3864 * 100}%` }}></div>
                          <Image {...item.image}></Image>
                        </div>
                        <div className='absolute bottom-0 left-0 right-0 px-8'>
                          <div style={{ minHeight: '82px' }} className="w-full justify-center px-6 py-2 flex flex-col items-center text-center bg-element-1">
                            <div className="font-garamond font-bold text-2xl leading-none font-bolder">{item.title}</div>
                            <div style={{ fontSize: '0.6em' }} className="uppercase font-sweetsans mt-2 ">{item.subTitle}</div>
                          </div>
                        </div>
                      </div>)
                    }
                  </Slider> : <Slider>
                    {
                      galleries.map((item, i) => <div key={i} className="p-3 relative pb-12">
                        <div className="relative">
                          <div style={{ paddingTop: `${5788 / 3864 * 100}%` }}></div>
                          <Image {...{
                            src: item?.photo?.url && process.env.STRAPI_URL + item?.photo?.url || '/logo-2.png'
                          }}></Image>
                        </div>
                        <div className='absolute bottom-0 left-0 right-0 px-8'>
                          <div style={{ minHeight: '82px' }} className="w-full justify-center px-6 py-2 flex flex-col items-center text-center bg-element-1">
                            <div className="font-garamond font-bold text-2xl leading-none font-bolder">{item.title}</div>
                            <div style={{ fontSize: '0.6em' }} className="uppercase font-sweetsans mt-2 ">{item.couples}</div>
                          </div>
                        </div>
                      </div>)
                    }
                  </Slider>
                }


              </div>
              <div className="h-12"></div>
              <div className="flex justify-center">
                <a href={get('Block3.url', '/')}>
                  <Button>{get('Block3.buttonText', 'read more')}</Button>
                </a>
              </div>
            </Block>
          </div>
        }
      </XS>
      <LG>
        {get => <div>
          <Block
            {
            ...{
              title: get('Block3.title'),
              description: get('Block3.description')
            }
            }
          >
            <div className="mt-8 w-full">
              {
                get('Block3.customGallery') === true ? <Slider>
                  {
                    data[local].Block3.slider.map((item, i) => <div key={i} className="relative pb-12 px-4">
                      <div className="relative">
                        <div style={{ paddingTop: `${5788 / 3864 * 100}%` }}></div>
                        <Image {...item.image}></Image>
                      </div>
                      <div className='absolute bottom-0 left-0 right-0 px-12'>
                        <div style={{ minHeight: '82px' }} className="w-full justify-center px-6 py-2 flex flex-col items-center text-center bg-element-1">
                          <div className="font-garamond font-bold text-xl leading-none font-bolder">{item.title}</div>
                          <div style={{ fontSize: '0.7em' }} className="uppercase font-sweetsans mt-2 ">{item.subTitle}</div>
                        </div>
                      </div>
                    </div>)
                  }
                </Slider> : <Slider>
                  {
                    galleries.map((item, i) => <div key={i} className="relative pb-12 px-4">
                      <div className="relative">
                        <div style={{ paddingTop: `${5788 / 3864 * 100}%` }}></div>
                        <Image {...{
                          src: item?.photo?.url && process.env.STRAPI_URL + item?.photo?.url || '/logo-2.png'
                        }}></Image>
                      </div>
                      <div className='absolute bottom-0 left-0 right-0 px-12'>
                        <div style={{ minHeight: '82px' }} className="w-full justify-center px-6 py-2 flex flex-col items-center text-center bg-element-1">
                          <div className="font-garamond font-bold text-xl leading-none font-bolder">{item.title}</div>
                          <div style={{ fontSize: '0.7em' }} className="uppercase font-sweetsans mt-2 ">{item.couples}</div>
                        </div>
                      </div>
                    </div>)
                  }
                </Slider>
              }
            </div>
            <div className="h-12"></div>
            <div className="flex justify-center">
              <Button>read more</Button>
            </div>
          </Block>
        </div>}
      </LG>
    </>
  )
}
const Instagram = () => {
  const { get } = useSource()
  console.log({
    instagram: get('instagram')
  })
  return <div className="lg:max-w-5xl mx-auto lg:px-12">
    <div className="flex flex-col items-center text-center">
      <div className="text-2xl font-sweetsans">
        {get('instagram.title', 'INSTAGRAM')}
      </div>
      <div className="w-40 h-14 relative">
        <Image {...get('instagram.image', {
          src: '/home/icons/web-homepage-icons-04.png'
        })} objectFit="contain"></Image>
      </div>
      <div className='h-12'></div>
      <div className="flex flex-wrap w-full justify-center" >
        {
          get('instagram', []).map((item, i) => {
            const src = item.image
            if (!src) return null
            return <div key={i} className="flex-1 w-1/3 lg:w-32 p-px lg:p-3">
              <div className="w-full relative bg-element-4">
                <div style={{ paddingTop: '100%' }}></div>
                <Image variant="card" src={item.image || '/logo.png'}></Image>
              </div>
            </div>
          })
        }
      </div>
    </div>
  </div>
}
// services
const Block4 = () => {
  return <>
    <XS>
      {
        get => <div>
          <Block title={get("Block4.title")} description={get("Block4.description")}>
            <div className="h-6"></div>
            <div className="flex justify-center">
              <Link href={get("Block4.url")}>
                <Button>{get("Block4.buttonText")}</Button>
              </Link>
            </div>
            <div className="h-8"></div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-center justify-center justify-items-center '>
              {
                get("Block4.items", []).map((item, i) => {
                  return (
                    <div className="flex flex-col items-center text-center max-w-md">
                      <div className="text-3xl font-kinfolk ">{`${i < 9 ? '0' : ''}${i + 1}.`}</div>
                      <div className="font-sweetsans text-sm uppercase">{item.title}</div>
                      <div className="leading-relaxed mt-1 ">{item.description}</div>
                    </div>
                  )
                })
              }
            </div>
            <div className="h-8"></div>
            <div className="flex justify-center">
              <div className="w-14 h-14 relative">
                <Image {...{
                  src: get("Block4.image", {
                    src: '/home/icons/web-homepage-icons-02.png'
                  }).src
                }}></Image>
              </div>
            </div>
            <div className="h-2"></div>
          </Block>
        </div>
      }
    </XS>
    <LG>
      {
        get => <div>
          <Block title={data[local].Block4.title} description={data[local].Block4.description}>
            <div className="h-6"></div>
            <div className="flex justify-center">
              <Button>see details</Button>
            </div>
            <div className="h-14"></div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 w-full items-center'>
              {
                data[local].Block4.items.map((item, i) => {
                  return (
                    <div className="flex flex-col items-center text-center max-w-md">
                      <div className="text-6xl font-kinfolk px-6">{`${i < 9 ? '0' : ''}${i + 1}.`}</div>
                      <div className="font-sweetsans mt-2  px-12 uppercase">{item.title}</div>
                      <div className="leading-loose mt-6 ">{item.description}</div>
                    </div>
                  )
                })
              }
            </div>
            <div className="h-14"></div>
            <div className="flex justify-center">
              <div className="w-14 h-14 relative">
                <Image {...data[local].Block4.image}></Image>
              </div>
            </div>
            <div className="h-6"></div>
            <div className="w-full font-garamond italic text-center text-xl">
              {data[local].Block4.text}
            </div>
            <div className="h-14"></div>
          </Block>
        </div>
      }
    </LG>
  </>
}
// blog
const Block5 = () => {
  return <>
    <XS>
      {
        get => <div className='flex flex-col'>
          <div className='flex-1 relative'>
            <div style={{
              paddingTop: `${2400 / 3828 * 100}%`,
            }}></div>
            <Image {...get('Block5.image')}></Image>
          </div>
          <div className='flex-1 relative bg-element-3'>
            <div style={{
              paddingTop: `${2400 / 3828 * 100}%`,
            }}></div>
            <Image {...data[local].Block5.imageLeft} objectFit="contain" className="opacity-40" ></Image>
            <div className="absolute inset-0 flex justify-center items-center isolate">
              <div className="max-w-sm mx-auto text-element-2">
                <Block title={get('Block5.title')} description={get('Block5.description')}>
                  <div className="mt-6 flex justify-center">
                    <Link href={get('Block5.url')}><Button reverse>{get('Block5.buttonText')}</Button></Link>
                  </div>
                </Block>
              </div>
            </div>
          </div>

        </div>
      }
    </XS>
    <LG>
      {
        get => <div>
          <div className='flex'>
            <div className='flex-1 relative bg-element-3'>
              <div style={{
                paddingTop: `${2400 / 3828 * 100}%`,
              }}></div>
              <Image {...data[local].Block5.imageLeft} objectFit="contain" className="opacity-40" ></Image>
              <div className="absolute inset-0 flex justify-center items-center isolate">
                <div className="max-w-md mx-auto text-element-2">
                  <Block title={get('Block5.title')} description={<div className="text-base">{get('Block5.description')}</div>}>
                    <div className="mt-6 flex justify-center">
                      <Link href={get('Block5.url')}><Button reverse>{get('Block5.buttonText')}</Button></Link>
                    </div>
                  </Block>
                </div>
              </div>
            </div>
            <div className='flex-1 relative'>
              <Image {...get('Block5.image', data[local].Block5.imageRight)}></Image>
            </div>
          </div>
        </div>
      }
    </LG>
  </>
}
// kind words
const Block6 = () => {
  return <>
    <XS>
      {
        get => <div>
          <Block {...{
            small: false,
            title: get('Block6.title'),
            description: get('Block6.description')
          }}>
            <div className="h-3"></div>
            <div className="w-px  h-10 bg-element-5">
            </div>
            <div className="h-3"></div>
            <div className="flex justify-center">
              <Link href={get("Block6.url", '/')}>
                <Button>{get('Block6.buttonText', 'BROWSE FOR TIPS AND INSPIRATION')}</Button>
              </Link>
            </div>
            <div className="h-2"></div>
          </Block>
        </div>
      }
    </XS>
    <LG>
      {
        get => <div>
          <Block {...{
            small: false,
            title: get('Block6.title'),
            description: get('Block6.description')
          }}>
            <div className="h-6"></div>
            <div className="flex justify-center">
              <Link href={get("Block6.url", '/')}>
                <Button>{get('Block6.buttonText', 'BROWSE FOR TIPS AND INSPIRATION')}</Button>
              </Link>
            </div>
            <div className="h-20"></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {
                get('Block6.items', data[local].Block6.items).map((item, i) => {
                  return <div key={i} className='flex flex-col lg:flex-row '>
                    <div className="flex-1 py-6 h-full">
                      <div style={{ minHeight: "300px" }} className="w-full h-full relative">
                        <Image {...item.image} variant="card"></Image>
                      </div>
                    </div>
                    <div className="flex-1 px-6 pt-3 pb-6 bg-element-2">
                      <div className="font-garamond font-bold text-2xl italic">{item.title}</div>
                      <div style={{ fontSize: '0.8em' }} className='font-sweetsans'>{item.subTitle}</div>
                      <div className="mt-4 text-justify text-sm leading-loose">{item.description}</div>
                    </div>
                  </div>
                })
              }
            </div>
          </Block>
        </div>
      }
    </LG>
  </>
}

const Block7 = () => {
  return <>
    <XS>
      {
        get => <div>
          <div style={{ minHeight: '350px' }} className="bg-element-3 relative">
            <div style={{ paddingTop: `${2428 / 5760 * 100}%` }}></div>
            <Image {...get('Block7.image', data[local].Block7.image)}></Image>
            <div className="absolute inset-0 flex text-white flex-col justify-center items-center text-center p-12">
              <div className="leading-none font-garamond italic text-xl font-bold">{get('Block7.subTitle', data[local].Block7.subTitle)}</div>
              <div className='h-5'></div>
              <div className="leading-none text-4xl font-kinfolk">{get('Block7.title', data[local].Block7.title)}</div>
              <div className='h-6'></div>
              <div className='flex justify-center'>
                <Link href={get('Block7.url', '/')}>
                  <Button reverse>{get('Block7.buttonText', data[local].Block7.buttonText)}</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      }
    </XS>
    <LG>
      {
        get => <div> <div style={{ minHeight: '350px' }} className="bg-element-3 relative">
          <div style={{ paddingTop: `${2428 / 5760 * 100}%` }}></div>
          <Image {...data[local].Block7.image}></Image>
          <div className="absolute inset-0 text-element-2 flex flex-col justify-center items-center text-center p-12">
            <div className="leading-none font-garamond italic text-3xl">{get('Block7.subTitle', data[local].Block7.subTitle)}</div>
            <div className='h-5'></div>
            <div className="leading-none text-5xl font-kinfolk">{get('Block7.title', data[local].Block7.title)}</div>
            <div className='h-6'></div>
            <div className='flex justify-center'>
              <Link href={get('Block7.url', '/')}>
                <Button reverse>{get('Block7.buttonText', data[local].Block7.buttonText)}</Button>
              </Link>
            </div>
          </div>
        </div></div>
      }
    </LG>
  </>
}
export default function Home({ post, galleries }) {
  // const {local='en'}=  useLocal()
  const local = 'en'
  console.log({ data })
  return (
    <SourceProvider source={
      {
        en: {
          ...homeData.en,
          ...post,
          galleries,
        }
      }
    }>
      <div className="-mt-header">
        <div className="bg-element-3">
          <Intro />
        </div>
        <div className="bg-element-1 py-12">
          <Container>
            <Block1 />
          </Container>
        </div>
        <div className="bg-white">
          <Block3 />
        </div>
        <div className="bg-element-1">
          <Block4 />
        </div>
        <div className="bg-white">
          <Block5 />
        </div>
        <div className="bg-element-1">
          <Block6 />
        </div>
        <div className="bg-element-3">
          <Block7 />
        </div>
        <div className=" py-14">
          <Instagram />
        </div>
        <div>
          <Container>
            <div className="w-full flex justify-center">

            </div>
          </Container>
        </div>
      </div>
    </SourceProvider>

  )
}


