import Button from "@components/button";
import { Image } from "../components/Image";
import { LG } from "../components/LG";
import { Link } from "../components/Link";
//contact
export const Contact = () => {
  return <>
    {/* <XS>
      {
        get => <div>
          <div style={{ minHeight: '350px' }} className="bg-element-3 relative">
            <div style={{ paddingTop: `${2428 / 5760 * 100}%` }}></div>
            <Image {...get('app.data.contact.image', { src: '/logo.png' })}></Image>
            <div className="absolute inset-0 flex text-white flex-col justify-center items-center text-center p-12">
       
              <div className="leading-none text-4xl font-kinfolk">{get('app.data.contact.title',)}</div>
              <div className='h-6'></div>
              <div className='flex justify-center'>
                <Link href={get('app.data.contact.url', '/')}>
                  <Button reverse>{get('app.data.contact.buttonText',)}</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>}
    </XS> */}
    <LG>
      {
        get => {
          return <div> <div style={{ minHeight: '350px' }} className="bg-element-3 relative">
            <div style={{ paddingTop: `${2428 / 5760 * 100}%` }}></div>
            <Image {...get('app.data.contact.image', { src: '/logo.png' })}></Image>
            <div className="absolute inset-0 text-element-2 flex flex-col justify-center items-center text-center p-12">
              <div className="leading-none font-garamond italic text-3xl">{get('app.data.contact.description',)}</div>
              <div className='h-5'></div>
              <div className="leading-none text-5xl font-kinfolk">{get('app.data.contact.title',)}</div>
              <div className='h-6'></div>
              <div className='flex justify-center'>
                <Link href={get('app.data.contact.url', '/')}>
                  <Button reverse>{get('app.data.contact.buttonText',)}</Button>
                </Link>
              </div>
            </div>
          </div></div>
        }}
    </LG>
  </>;
};
