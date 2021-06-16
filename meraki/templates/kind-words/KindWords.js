
import Container from "@components/container";
import Layout from "@components/layout";
import SourceProvider, { useSource } from "@providers/source";
import { createBlock, createFields, createImageFieldConfig } from "@providers/tinacms/helpers";
import classNames from 'classnames';
import { Image } from "meraki/components/Image";
import { LG } from "meraki/components/LG";
import { XS } from "meraki/components/XS";
const Cover = () => {
  const { get } = useSource()
  return <div style={{ backgroundColor: '#61684b' }} className="min-h-screen relative -mt-header  py-header flex justify-center">
    <XS>
      {
        get => <div><Image {...get('data.cover.image')} /></div>
      }
    </XS>
    <LG>
      {
        get => <div><Image {...get('data.cover.image')} /></div>
      }
    </LG>
    <div style={{ minHeight: '500px' }} className="self-center py-16 z-10 text-center  font-bold text-element-1">
      <Container >
        <XS>
          {
            get => <div>
              <h2 className="text-3xl lg:text-5xl font-kinfolk">{get('data.cover.title')}</h2>
              <div className="text-xl lg:text-2xl font-garamond italic mt-2">{get('data.cover.subTitle')}</div>
            </div>
          }
        </XS>
        <LG>
          {
            get => <div>
              <h2 className="text-3xl lg:text-5xl font-kinfolk">{get('data.cover.title')}</h2>
              <div className="text-xl lg:text-2xl font-garamond italic mt-2">{get('data.cover.subTitle')}</div>
            </div>
          }
        </LG>
      </Container>
    </div>

  </div>
}
const Blocks = () => {
  const { get } = useSource()
  return <div style={{
    backgroundColor: '#f7f5ef'
  }}>
    <div className="h-20" />
    <div className="space-y-20">
      {
        get('data.content', []).map((item, i) => {
          const isOdd = i % 2
          return <div key={i} className={classNames("text-center items-center lg:text-left  lg:flex",
            !isOdd ? "" : "lg:flex-row-reverse"
          )}>
            {!isOdd ? <div className="relative flex-1">
              <div style={{ paddingTop: '86%' }} />
              <div style={{ width: '60%' }} className="absolute top-0 bottom-0 left-0">
                {item?.image1?.src && <Image {...item.image1} />}
              </div>
              <div style={{ width: '54%' }} className="absolute top-0 bottom-0 right-0  flex items-center">
                <div className="relative w-full">
                  <div style={{ paddingTop: '100%' }} />
                  {item?.image2?.src && <Image {...item.image2} />}
                </div>
              </div>
            </div> : <div className="relative flex-1">
              <div style={{ paddingTop: '86%' }} />
              <div style={{ width: '60%' }} className="absolute top-0 bottom-0 right-0">
                {item?.image1?.src && <Image {...item.image1} />}
              </div>
              <div style={{ width: '54%' }} className="absolute top-0 bottom-0 left-0  flex items-center">
                <div className="relative w-full">
                  <div style={{ paddingTop: '100%' }} />
                  {item?.image2?.src && <Image {...item.image2} />}
                </div>
              </div>
            </div>}
            <div className="lg:w-1/2">
              <Container>
                <div className="pt-12">
                  <h3 className="text-2xl font-kinfolk">{item.title}</h3>
                  <div className="text-lg font-garamond italic">{item.subTitle}</div>
                </div>
                <div className='text-justify' dangerouslySetInnerHTML={{ __html: item.content }}></div>
              </Container>
            </div>
          </div>
        })
      }
    </div>

    <div className="h-20" />
  </div>
}
const KindWords = ({ source, preview }) => {
  return <SourceProvider source={{
    en: source
  }}>
    <Layout preview={preview}>
      <Cover />
      <Blocks />
    </Layout>
  </SourceProvider>

}
export const kindWords_template = {
  defaultItem: {
    cover: {
      title: {
        xs: "KIND WORDS"
      },
      subTitle: {
        xs: "Sweet testimonials from clients are our motivation in the whole journey"
      },
      image: {
        xs: {
          src: "/blog-banner-mobile.jpg",
          alt: "Meraki wedding planner",
        },
        lg: {
          src: "/_DSC3741.jpg",
          alt: "Meraki wedding planner",
        }
      },
    },
    content: [
      {
        title: 'Tess & andy',
        subTitle: 'New Zealand / United Kingdom',
        content: 'We are both expats living here and had very specific ideas of how we wanted our wedding to be. Xuan and Tu were very attentive and insured our vision came true. We knew our wedding would be a difficult event as it was not hosted in a traditional wedding venue so a lot of details and careful planning was needed! They worked with us with great communication, informing us on all details – even if there were things we couldn’t achieve they talked us through reasons and available options. One of their biggest achievements was the last minute rescheduling of our wedding date when we had to move our wedding to a day later due to a family emergency (flight delays!). They went through all vendors and bookings and organized everything –amazing! The wedding was truly stunning, friends and family always mention their memories of it. We were so happy to have Xuan and Tu as wedding planners and they became a special part of our wedding and remain our close friends today.',
        image1: {
          src: "/blog-banner-mobile.jpg",
          alt: "Meraki wedding planner",
        },
        image2: {
          src: "/_DSC3741.jpg",
          alt: "Meraki wedding planner",
        }
      },
      {
        title: 'Tess & andy',
        subTitle: 'New Zealand / United Kingdom',
        content: 'We are both expats living here and had very specific ideas of how we wanted our wedding to be. Xuan and Tu were very attentive and insured our vision came true. We knew our wedding would be a difficult event as it was not hosted in a traditional wedding venue so a lot of details and careful planning was needed! They worked with us with great communication, informing us on all details – even if there were things we couldn’t achieve they talked us through reasons and available options. One of their biggest achievements was the last minute rescheduling of our wedding date when we had to move our wedding to a day later due to a family emergency (flight delays!). They went through all vendors and bookings and organized everything –amazing! The wedding was truly stunning, friends and family always mention their memories of it. We were so happy to have Xuan and Tu as wedding planners and they became a special part of our wedding and remain our close friends today.',
        image1: {
          src: "/blog-banner-mobile.jpg",
          alt: "Meraki wedding planner",
        },
        image2: {
          src: "/_DSC3741.jpg",
          alt: "Meraki wedding planner",
        }
      }, {
        title: 'Tess & andy',
        subTitle: 'New Zealand / United Kingdom',
        content: 'We are both expats living here and had very specific ideas of how we wanted our wedding to be. Xuan and Tu were very attentive and insured our vision came true. We knew our wedding would be a difficult event as it was not hosted in a traditional wedding venue so a lot of details and careful planning was needed! They worked with us with great communication, informing us on all details – even if there were things we couldn’t achieve they talked us through reasons and available options. One of their biggest achievements was the last minute rescheduling of our wedding date when we had to move our wedding to a day later due to a family emergency (flight delays!). They went through all vendors and bookings and organized everything –amazing! The wedding was truly stunning, friends and family always mention their memories of it. We were so happy to have Xuan and Tu as wedding planners and they became a special part of our wedding and remain our close friends today.',
        image1: {
          src: "/blog-banner-mobile.jpg",
          alt: "Meraki wedding planner",
        },
        image2: {
          src: "/_DSC3741.jpg",
          alt: "Meraki wedding planner",
        }
      }
    ]
  },
  fields: [
    createBlock({
      label: 'cover',
      name: 'cover',
      fields: [
        'title',
        'subTitle',
        createImageFieldConfig()
      ]
    }),
    {
      label: 'content',
      name: 'content',
      component: 'group-list',
      itemProps: (item, i) => ({
        key: i,
        label: item.title
      }),
      fields: createFields([
        'title',
        'subTitle',
        {
          label: 'content',
          name: 'content',
          component: 'html'
        },
        createImageFieldConfig({
          label: 'image 1',
          name: 'image1'
        }),
        createImageFieldConfig({
          label: 'image 2',
          name: 'image2',
        }),

      ])
    }
  ],
};
export default KindWords