import Button from "@components/button";
import { useLocal } from "@providers/local";
import homeData from "data/homeData";
import { Image } from "../components/Image";
import { LG } from "../components/LG";
import { Link } from "../components/Link";
import { XS } from "../components/XS";
const data = { en: homeData }
//contact
export const Contact = ({ }) => {
  const { local } = useLocal()
  return <>
    <XS>
      {
        get => <div>
          <div style={{ minHeight: '350px' }} className="bg-element-3 relative">
            <div style={{ paddingTop: `${2428 / 5760 * 100}%` }}></div>
            <Image {...get('app.contact.image', data[local].Block7.image)}></Image>
            <div className="absolute inset-0 flex text-white flex-col justify-center items-center text-center p-12">
              <div className="leading-none font-garamond italic text-xl font-bold">{get('app.contact.subTitle', data[local].Block7.subTitle)}</div>
              <div className='h-5'></div>
              <div className="leading-none text-4xl font-kinfolk">{get('app.contact.title', data[local].Block7.title)}</div>
              <div className='h-6'></div>
              <div className='flex justify-center'>
                <Link href={get('app.contact.url', '/')}>
                  <Button reverse>{get('app.contact.buttonText', data[local].Block7.buttonText)}</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>}
    </XS>
    <LG>
      {
        get => <div> <div style={{ minHeight: '350px' }} className="bg-element-3 relative">
          <div style={{ paddingTop: `${2428 / 5760 * 100}%` }}></div>
          <Image {...data[local].Block7.image}></Image>
          <div className="absolute inset-0 text-element-2 flex flex-col justify-center items-center text-center p-12">
            <div className="leading-none font-garamond italic text-3xl">{get('app.contact.subTitle', data[local].Block7.subTitle)}</div>
            <div className='h-5'></div>
            <div className="leading-none text-5xl font-kinfolk">{get('app.contact.title', data[local].Block7.title)}</div>
            <div className='h-6'></div>
            <div className='flex justify-center'>
              <Link href={get('app.contact.url', '/')}>
                <Button reverse>{get('app.contact.buttonText', data[local].Block7.buttonText)}</Button>
              </Link>
            </div>
          </div>
        </div></div>}
    </LG>
  </>;
};
