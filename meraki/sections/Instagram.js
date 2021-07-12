import Container from "@components/container";
import { useSource } from "@providers/source";
import { Link } from "meraki/components/Link";
import { Image } from "../components/Image";

export const Instagram = () => {
  const { get } = useSource();
  // console.log({
  //   instagram: get('app.data.instagram')
  // });
  return <Container >
    <div className="">
      <div className="flex flex-col items-center text-center">
        <div className="text-2xl font-sweetsans">
          {get('app.data.instagram.title', 'INSTAGRAM')}
        </div>
        <div className="w-40 h-14 relative">
          <Image {...get('app.data.instagram.image', {
            src: '/home/icons/web-homepage-icons-04.png'
          })} objectFit="contain"></Image>
        </div>
        <div className='h-12'></div>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-1 lg:gap-3 lg:flex-wrap w-full ">
          {get('app.data.instagram', []).map((item, i) => {
            const src = item.image;
            if (!src || i >= 9)
              return null;
            if (i < 6) return <Link href={item.url || "#"} key={i} className="transform transition-transform  group">
              <div className="w-full relative bg-element-4 overflow-hidden">
                <div style={{ paddingTop: '100%' }}></div>
                <Image className="group-hover:scale-105 transform transition-transform duration-1000 scale-100" variant="card" src={item.image || '/logo.png'}></Image>
              </div>
            </Link>;
            return <Link href={item.url || "#"} key={i} className="transform transition-transform  group lg:hidden">
              <div className="w-full relative bg-element-4 overflow-hidden">
                <div style={{ paddingTop: '100%' }}></div>
                <Image className="group-hover:scale-105 transform transition-transform duration-1000 scale-100" variant="card" src={item.image || '/logo.png'}></Image>
              </div>
            </Link>;
          })}
        </div>
      </div>
    </div>
  </Container>;
};
