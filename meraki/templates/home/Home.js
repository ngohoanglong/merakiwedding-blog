import Container from "@components/container";
import IntroSlider from "@sections/IntroSlider";
import NextImage from "next/image";
const Image = ({ src, alt, ...rest }) => {
  return (
    <NextImage
      layout="fill"
      src={src}
      alt={alt || 'Meraki Image'}
      sizes="(max-width: 400px) 300px, 800px"
      quality="85"
      objectFit="cover"
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
        src: '/public/home/web-homepage-blog.jpg',
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
      title: 'BOOK YOUR CONSULTATION',
      subTitle: 'Tell us how we can help',
      button: {
        text: 'CONTACT US',

      }
    }
  },
}
export default function Home() {
  // const {local='en'}=  useLocal()
  const local = 'en'
  return (
    <div className="-mt-header">
      <div className="bg-element-1">
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
            <div className="py-14 w-full flex items-center space-x-12">
              <div className="leading-loose flex-1 text-justify">{data[local].Block1.text1}</div>
              <div className="w-px h-full bg-element-5 flex"></div>
              <div className="text-center flex-1 space-y-4 flex flex-col items-center">
                <div className="font-garamond italic  max-w-sm text-2xl">{data[local].Block1.text2}</div>
                <div className="font-semibold text-sm">{data[local].Block1.text3}</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-12"></div>
    </div>
  )
}


