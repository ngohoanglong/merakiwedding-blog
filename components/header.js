import { pages } from "const"
import Container from "./container"
const LangSwitcher = () => {
  return <div className="inline-flex items-baseline text-xs uppercase p-px bg-white">
    <label className="flex-1 px-1 bg-white text-element-4">ENG</label>
    <label className="flex-1 px-1 bg-element-4 text-white">VIE</label>
  </div>
}
export default function Header() {

  return (
    <header className="z-10 relative text-white ">
      <Container>
        <nav style={{ height: 'var(--header-height)', margin: 'auto' }} className="hidden md:flex flex-wrap items-center justify-between">
          <div className="flex-1">
            <img style={{ maxWidth: '160px' }} className="w-full" src="/logo-3.png" />
          </div>
          <div className="px-3 space-x-12 flex items-center">
            {
              pages.map(({ title, href }) => {
                return <a className="font-sweetsans py-1 leading-none text-effect-1 uppercase text-pr hover:text-element-2" href={href}>{title}</a>
              })
            }
            <LangSwitcher />
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
