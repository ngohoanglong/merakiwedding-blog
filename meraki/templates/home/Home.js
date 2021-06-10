import Button from "@components/button";
import Container from "@components/container";
import IntroSlider from "@sections/IntroSlider";
import Slider from "@sections/Slider";
import classNames from 'classnames';
import NextImage from "next/image";
const Image = ({ src, alt, variant, ...rest }) => {
  let sizes = "(max-width: 400px) 300px, 800px"
  switch (variant) {
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
      src={src}
      alt={alt || 'Meraki Image'}
      sizes={sizes}
      quality="85"
      objectFit="cover"
      objectPosition="bottom center"
      {...rest}
    />
  )
}
const data = {
  en: {
    others: {
      'read more': 'read more'
    },
    IntroSlider: {
      items: [
        {
          alt: '',
          src: '/home/banner/banner-1.jpg'
        },
        {
          alt: '',
          src: '/home/banner/banner-2.jpg'
        }, {
          alt: '',
          src: '/home/banner/banner-3.jpg'
        }, {
          alt: '',
          src: '/home/banner/banner-4.jpg'
        }, {
          alt: '',
          src: '/home/banner/banner-5.jpg'
        }, {
          alt: '',
          src: '/home/banner/banner-6.jpg'
        }, {
          alt: '',
          src: '/home/banner/banner-7.jpg'
        },
      ],
      title: 'DESTINATION WEDDING PLANNER',
      subTitle: 'Based in Vietnam'
    },
    Block1: {
      image: {
        src: '/home/icons/web-homepage-icons-01.png',
        alt: ''
      },
      title: 'INDEPENDENT / ATTENTIVENESS / DEDICATION',
      description: 'Every wedding crafted by Meraki is a <b class="font-bold">unique experience</b> that was delivered beautifully.',
      text1: `We love weddings and we are here to serve you with everything we have while providing an experience you will never forget. We want to laugh with you, dance with you, jump around and adventure. We want the small moments to be memorable, and the big moments to become framed memories. Yes, we are absolutely thrilled to be considered as your potential wedding planner. Let’s get connected and let us fulfill the beginning of your journey with joy and amusement.`,
      text2: `"There is so much joy that goes into the planning and dreaming of your wedding - It is the happiest of projects"`,
      text3: `- MARTHA STEWART -`
    },
    Block2: {
      image: {
        src: '/home/web-homepage-about.JPG',
        alt: ''
      },
      title: 'MERAKI',
      subTitle: '[may-rah-kee] Greek',
      description: 'Doing something with soul, creativity, and love',
      texts: [
        `Wedding is a notable milestone in life. It is the beginning of a lifetime commitment. As wedding planners, we want the bride and groom to enjoy their celebration to the fullest so that they can begin the shared journey with many great memories.`,
        `Meraki has been walking on a fascinating journey. As we are devoted to do what we love and are passionate about, our hearts are nurtured each day and every day. Each team member is an essential part, we complete each other, bringing balance and making Meraki a diverse and aggregate team. We stay behind the scenes to spark your special day and translate your vision into life.`
      ]
    },
    Block3: {
      title: 'EXPLORE OUR WEDDINGS',
      description: 'We hope you find inspiration through the beautiful photos from our amazing photographers',
      slider: [
        {
          image: {
            src: '/home/explore-our-wedding/1.jpg',
            alt: ''
          },
          title: 'Boundles Amour',
          subTitle: 'TESS & ANDY'
        }, {
          image: {
            src: '/home/explore-our-wedding/2.jpg',
            alt: ''
          },
          title: 'Elopement on the top of Halong Bay',
          subTitle: 'PHONG & HOANG'
        }, {
          image: {
            src: '/home/explore-our-wedding/3.jpg',
            alt: ''
          },
          title: 'An Esthetic Conviviality',
          subTitle: 'LUCIA & QUI'
        }, {
          image: {
            src: '/home/explore-our-wedding/4.jpg',
            alt: ''
          },
          title: 'Boundles Amour',
          subTitle: 'TESS & ANDY'
        }, {
          image: {
            src: '/home/explore-our-wedding/5.jpg',
            alt: ''
          },
          title: 'Elopement on the top of Halong Bay',
          subTitle: 'PHONG & HOANG'
        }, {
          image: {
            src: '/home/explore-our-wedding/6.jpg',
            alt: ''
          },
          title: 'An Esthetic Conviviality',
          subTitle: 'LUCIA & QUI'
        },
      ]
    },
    Block4: {
      image: {
        src: '/home/icons/web-homepage-icons-02.png',
        alt: ''
      },
      title: 'OUR SERVICES',
      description: 'Our services are customized for your needs',
      items: [
        {
          title: 'PARTIAL SERVICE WEDDING PLANNING',
          description: 'Designed for everyone, this package is our most popular option for couples who need guidance in wedding planning.'
        },
        {
          title: 'FULL - SERVICE WEDDING PLANNING',
          description: 'This package is designed for couples who need us to take the lead on every aspect of the wedding.'
        },
        {
          title: 'MONTH OF COORDINATION',
          description: 'This package is for couple who want to plan the wedding by themselves but still need an expert for guidance.'
        },
      ],
      text: 'Our top priority is delivering an intimate wedding where you and your guests can enjoy and get lost in the moment. We are here to plan, give advice, organize, and hold your hand throughout the whole planning phase to ensure your wedding day is stress-free.'
    },
    Block5: {
      imageLeft: {
        src: '/home/icons/web-homepage-icons-03.png',
        alt: ''
      },
      imageRight: {
        src: '/home/web-homepage-blog.jpg',
        alt: ''
      },
      title: 'BLOG',
      description: 'We are here not for just inspiration but also for practical advice',
      button: {
        text: 'BROWSE FOR TIPS AND INSPIRATION'
      }
    },
    Block6: {
      title: 'KIND WORDS',
      description: 'Sweet testimonials from clients are our motivation in the whole journey',
      items: [
        {
          image: {
            src: '/home/kind-words/web-homepage-kindwords-1.jpg', alt: ''
          },
          title: 'Tess & Andy',
          subTitle: 'NEW ZEALAND / UNITED KINGDOM',
          description: '“Xuan and Tu were very attentive and insured our vision came true. They worked with us with great communication, informing us on all details – even if there were things we couldn’t achieve they talked us through reasons and available options. We were so happy to have Xuan and Tu as wedding planners and they became a special part of our wedding and remain our close friends today...”'
        },
        {
          image: {
            src: '/home/kind-words/web-homepage-kindwords-2.jpg', alt: ''
          },
          title: 'Tess & Andy',
          subTitle: 'NEW ZEALAND / UNITED KINGDOM',
          description: '“Xuan and Tu were very attentive and insured our vision came true. They worked with us with great communication, informing us on all details – even if there were things we couldn’t achieve they talked us through reasons and available options. We were so happy to have Xuan and Tu as wedding planners and they became a special part of our wedding and remain our close friends today...”'
        }, {
          image: {
            src: '/home/kind-words/web-homepage-kindwords-3.jpg', alt: ''
          },
          title: 'Tess & Andy',
          subTitle: 'NEW ZEALAND / UNITED KINGDOM',
          description: '“Xuan and Tu were very attentive and insured our vision came true. They worked with us with great communication, informing us on all details – even if there were things we couldn’t achieve they talked us through reasons and available options. We were so happy to have Xuan and Tu as wedding planners and they became a special part of our wedding and remain our close friends today...”'
        }, {
          image: {
            src: '/home/kind-words/web-homepage-kindwords-4.jpg', alt: ''
          },
          title: 'Tess & Andy',
          subTitle: 'NEW ZEALAND / UNITED KINGDOM',
          description: '“Xuan and Tu were very attentive and insured our vision came true. They worked with us with great communication, informing us on all details – even if there were things we couldn’t achieve they talked us through reasons and available options. We were so happy to have Xuan and Tu as wedding planners and they became a special part of our wedding and remain our close friends today...”'
        },
      ],
    },
    Block7: {
      image: {
        src: '/home/web-homepage-contact.jpg',
        alt: ''
      },
      title: 'BOOK YOUR CONSULTATION',
      subTitle: 'Tell us how we can help',
      button: {
        text: 'CONTACT US',

      }
    }
  },
}
const Block = ({ title, description, children, small = true }) => {
  return <Container>
    <div className={classNames('w-full flex flex-col items-center  mx-auto py-14', small && "max-w-5xl")}>
      <h2 className="text-3xl font-kinfolk text-center">{title}</h2>
      <div className="mt-2 text-center">{description}</div>
      {children}
    </div>
  </Container>
}
export default function Home() {
  // const {local='en'}=  useLocal()
  const local = 'en'
  return (
    <div className="-mt-header">
      <div className="bg-element-1 relative">
        <IntroSlider >
          {Array.from(data[local].IntroSlider.items, ({ src, alt }, i) => (
            <div
              key={i}
              className="w-full relative h-screen"
            >
              <div className="absolute inset-0">
                <Image
                  src={src}
                />
              </div>
            </div>
          ))}
        </IntroSlider>
        <div className='z-10 text-center absolute bottom-12 left-0 w-full text-white'>
          <Container>
            <div>
              <div className="text-4xl uppercase font-kinfolk">{data[local].IntroSlider.title}</div>
              <div className="text-2xl font-bold font-garamond italic">{data[local].IntroSlider.subTitle}</div>
            </div>
          </Container>
        </div>
      </div>
      <div className="bg-element-1 py-12">
        <Container>
          <div className='w-full flex flex-col items-center max-w-5xl mx-auto'>
            <div className="relative w-28">
              <div style={{
                paddingTop: `${1067 / 547 * 100}%`
              }} >
              </div>
              <Image {...data[local].Block1.image} objectFit="contain" >
              </Image>
            </div>
            <h2 className="font-kinfolk uppercase text-2xl text-center">
              {data[local].Block1.title}
            </h2>
            <div className="font-garamond italic text-2xl text-center" dangerouslySetInnerHTML={{ __html: data[local].Block1.description }}></div>
            <div className="h-14" />
            <div className="w-full lg:flex items-center space-y-6 lg:space-y-0 lg:space-x-12">
              <div className="leading-loose flex-1 text-justify">{data[local].Block1.text1}</div>
              <div className="hidden lg:block w-px h-full bg-element-5 "></div>
              <div className="text-center flex-1 space-y-6 flex flex-col items-center">
                <div className="font-garamond italic leading-loose max-w-sm text-2xl">{data[local].Block1.text2}</div>
                <div className="font-semibold text-sm">{data[local].Block1.text3}</div>
              </div>
            </div>
            <div className="h-20" />
            <div className='lg:flex w-full bg-element-2'>
              <div className="lg:w-2/5 relative">
                <div style={{ paddingTop: `${2048 / 1364 * 100}%` }}></div>
                <Image src={data[local].Block2.image.src}></Image>
              </div>
              <div className='flex-1 pt-6 pb-8 leading-loose px-6'>
                <Container>
                  <div className="flex flex-col">
                    <div className="text-3xl font-kinfolk">{data[local].Block2.title}</div>
                    <div className="text font-garamond italic">{data[local].Block2.subTitle}</div>
                    <div className="text font-commissioner font-bold">{data[local].Block2.description}</div>
                    <div className="space-y-6 mt-6 text-justify">
                      {
                        data[local].Block2.texts.map((item, i) => {
                          return <div key={i}>
                            {item}
                          </div>
                        })
                      }
                    </div>
                    <div className="h-4" />
                    <div className='flex justify-center'>
                      <Button>{data[local].others["read more"]}</Button>
                    </div>
                  </div>

                </Container>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-white">
        <Block
          {
          ...{
            title: data[local].Block3.title,
            description: data[local].Block3.description
          }
          }
        >

          <div className="mt-4 w-full">
            <Slider>
              {
                data[local].Block3.slider.map((item, i) => <div key={i} className="p-3 relative pb-12">
                  <div className="relative">
                    <div style={{ paddingTop: `${5788 / 3864 * 100}%` }}></div>
                    <Image {...item.image}></Image>
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 px-12'>
                    <div style={{ minHeight: '82px' }} className="w-full justify-center px-6 py-2 flex flex-col items-center text-center bg-element-1">
                      <div className="font-garamond text-xl leading-none font-bolder">{item.title}</div>
                      <div style={{ fontSize: '0.6em' }} className="uppercase font-sweetsans mt-2 ">{item.subTitle}</div>
                    </div>
                  </div>
                </div>)
              }
            </Slider>
          </div>
          <div className="h-12"></div>
          <div className="flex justify-center">
            <Button>read more</Button>
          </div>
        </Block>
      </div>
      <div className="bg-element-1">
        <Block title={data[local].Block4.title} description={data[local].Block4.description}>
          <div className="h-6"></div>
          <div className="flex justify-center">
            <Button>see details</Button>
          </div>
          <div className="h-14"></div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 w-full'>
            {
              data[local].Block4.items.map((item, i) => {
                return (
                  <div className="flex flex-col items-center text-center">
                    <div className="text-6xl font-kinfolk px-6">{`${i < 9 ? '0' : ''}${i + 1}.`}</div>
                    <div className="font-sweetsans mt-2  px-12 uppercase">{item.title}</div>
                    <div className="leading-loose mt-6 text-lg">{item.description}</div>
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
          <div className="w-full font-garamond italic text-center">
            {data[local].Block4.text}
          </div>
          <div className="h-14"></div>
        </Block>
      </div>
      <div className="bg-white">
        <div className='lg:flex'>
          <div className='flex-1 relative bg-element-3'>
            <div style={{
              paddingTop: `${2400 / 3828 * 100}%`,
              // background: `url(${data[local].Block5.imageLeft.src})`,
              // backgroundPosition: "center",
              // objectPosition: "contain"
            }}></div>
            <Image {...data[local].Block5.imageLeft} objectFit="contain" className="opacity-40" ></Image>
            <div className="absolute inset-0 flex justify-center items-center isolate">
              <div className="max-w-sm mx-auto text-element-2">
                <Block title={data[local].Block5.title} description={data[local].Block5.description}>
                  <div className="mt-6 flex justify-center">
                    <Button reverse>{data[local].Block5.button.text}</Button>
                  </div>
                </Block>
              </div>
            </div>
          </div>
          <div className='flex-1 relative'>
            <Image {...data[local].Block5.imageRight}></Image>
          </div>
        </div>
      </div>
      <div className="bg-element-1">
        <Block {...{
          small: false,
          title: data[local].Block6.title,
          description: data[local].Block6.description
        }}>
          <div className="h-6"></div>
          <div className="flex justify-center">
            <Button>see details</Button>
          </div>
          <div className="h-20"></div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {
              data[local].Block6.items.map((item, i) => {
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
      <div style={{ minHeight: '400px' }} className="bg-element-3 relative">
        <div style={{ paddingTop: `${2428 / 5760 * 100}%` }}></div>
        <Image {...data[local].Block7.image}></Image>
        <div className="absolute inset-0 flex text-white flex-col justify-center items-center text-center p-12">
          <div className="leading-none font-garamond italic text-2xl font-bold">{data[local].Block7.subTitle}</div>
          <div className='h-5'></div>
          <div className="leading-none text-3xl font-kinfolk">{data[local].Block7.title}</div>
          <div className='h-6'></div>
          <div className='flex justify-center'>
            <Button reverse>{data[local].Block7.button.text}</Button>
          </div>
        </div>
      </div>
      <div className=" py-14">
        <Container>
          <div className="flex flex-col items-center text-center">
            <div className="text-2xl font-sweetsans">
              INSTAGRAM
            </div>
            <div className="w-32 h-12 relative">
              <Image src={'/home/icons/web-homepage-icons-04.png'} objectFit="contain"></Image>
            </div>
            <div className='h-12'></div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 w-full" >
              <div className="flex-1 relative bg-element-4">
                <div style={{ paddingTop: '100%' }}></div>
              </div>
              <div className="flex-1 relative bg-element-4">
                <div style={{ paddingTop: '100%' }}></div>
              </div><div className="flex-1 relative bg-element-4">
                <div style={{ paddingTop: '100%' }}></div>
              </div><div className="flex-1 relative bg-element-4">
                <div style={{ paddingTop: '100%' }}></div>
              </div><div className="flex-1 relative bg-element-4">
                <div style={{ paddingTop: '100%' }}></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="w-full flex justify-center">

          </div>
        </Container>
      </div>
    </div>
  )
}


