import { useLocal } from "@providers/local"
import { locals, pages } from "const"
import Container from "./container"
const LangSwitcher = () => {
  const { local, setLocal } = useLocal()
  const handleChangeLang = () => {
    if (local === locals.vi) {
      return setLocal(locals.en)
    }
    return setLocal(locals.vi)
  }
  if (local === locals.vi)
    return <button onClick={handleChangeLang} className="inline-flex items-baseline text-xs uppercase p-px bg-white font-sweetsans  hover:bg-opacity-70 focus:ring focus:outline-none ring-element-4 ring-offset-2 transition-all duration-300 ease-in-out">
      <label className="flex-1 px-1 bg-white text-element-4">ENG</label>
      <label className="flex-1 px-1 bg-element-4 text-white">VIE</label>
    </button>
  return <button onClick={handleChangeLang} className="inline-flex items-baseline text-xs uppercase p-px bg-white font-sweetsans  hover:bg-opacity-70 focus:ring focus:outline-none ring-element-4 ring-offset-2 transition-all duration-300 ease-in-out">
    <label className="flex-1 px-1 bg-element-4 text-white">ENG</label>
    <label className="flex-1 px-1 bg-white text-element-4">VIE</label>
  </button>
}
export default function Header() {

  return (
    <header className="z-10 relative text-white ">
      <Container>
        <nav style={{ height: 'var(--header-height)', margin: 'auto' }} className="hidden md:flex flex-wrap items-center justify-between">
          <div className="flex-1">
            <img style={{ maxWidth: '160px' }} className="w-full" src="/logo-3.png" />
          </div>
          <div className="px-3 space-x-12 flex items-start">
            {
              pages.map(({ title, href }) => {
                return <a className="font-sweetsans py-1 leading-none text-effect-1 uppercase text-pr hover:text-element-2" href={href}>{title}</a>
              })
            }
            <div className="leading-none">

              <LangSwitcher />
            </div>
          </div>
        </nav>
        <nav style={{ height: 'var(--header-height)', maxWidth: '1200px', margin: 'auto' }} className="flex md:hidden flex-wrap py-3 items-start justify-center">
          <div className=" text-center ">
            <img style={{ maxWidth: '100px' }} className="w-full" src="/logo-3.png" />
          </div>
        </nav>
      </Container>
    </header>
  )
}
