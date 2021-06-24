import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';

export default function Paginate(props) {
  return (
    <ReactPaginate
      nextLabel={
        <div className="px-2 text-xl">
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" strokeWidth={2} points="9 6 15 12 9 18" /></svg>
        </div>
      }
      previousLabel={<div className="px-2 text-xl">
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" strokeWidth={2} points="9 6 15 12 9 18" transform="matrix(-1 0 0 1 24 0)" /></svg>
      </div>}
      activeClassName="text-effect-1_active" marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      // pageCount={Math.ceil(posts.length / 6)}
      containerClassName="flex items-center flex-wrap"
      pageClassName="font-sweetsans px-2 text-effect-1"
      {...props} />
  );
}
export const RouterPaginate = (props) => {
  const { query, push, pathname } = useRouter()
  const { page, ...rest } = query
  return <Paginate
    initialPage={Number(page - 1)}
    disableInitialCallback
    onPageChange={({ selected }) => {
      push({
        pathname,
        scroll: props.scroll,
        shallow: props.shallow,

        query: {

          ...rest,
          ...selected ? {
            page: Number(selected) + 1
          } : {}

        }
      })
    }} marginPagesDisplayed={2}
    {...props} />
}