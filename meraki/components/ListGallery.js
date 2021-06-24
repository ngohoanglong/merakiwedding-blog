import { RouterPaginate } from "@components/paginate";
import { Image } from "meraki/components/Image";
import { useRouter } from "next/router";
import { Link } from "./Link";
const perPage = 9
const useListPage = ({ items, perPage = 6 }) => {
  const { query, } = useRouter()
  const { page = 1 } = query
  return (items.filter((_, i) => {
    const from = perPage * (page - 1)
    const to = from + perPage
    return i >= from && i < to
  }))
}
export default function ListGallery({ items = [], perPage = 9, buttonText = "view more" }) {
  const listItems = useListPage({ items, perPage })
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-12 lg:gap-y-32 mb-12 ">
        {listItems.map((item, i) => {
          return (
            <Link key={i} href={item.url || '/gallery'} className=" p-3 relative space-y-6 flex flex-col justify-center sm:odd:flex-col-reverse sm:odd:space-y-reverse hover:shadow-2xl transition-shadow duration-700 ease-in-out">
              <div className="relative">
                <div style={{ paddingTop: `${5788 / 3864 * 100}%` }}></div>
                <Image {...{
                  src: item?.image?.src
                }}></Image>
              </div>
              <div className='text-center'>
                <div className="w-full flex flex-col items-center text-center">
                  <h4 className="font-kinfolk text-lg leading-none font-bolder pb-3 pt:3 sm:pt-0 w-full">{item.title}</h4>
                  <div className="px-3 flex border-t border-element-5 py-2 w-full truncate capitalize">
                    <div  >{item.subTitle}</div>
                    <div className="flex-1 w-3" />
                    <div className="flex space-x-2 items-center"><div>{buttonText}</div><svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6" /></svg></div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <div className="w-full flex justify-center items-center">
        <RouterPaginate
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          scroll={false}
          shallow={true}
          pageCount={Math.ceil(items.length / perPage)} />
      </div>
    </section>
  );
}
