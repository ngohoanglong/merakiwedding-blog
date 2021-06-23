import { useLocal } from "@providers/local"
import { useSource } from "@providers/source"
import classNames from 'classnames'
import { locals } from "const"
import { Link } from "meraki/components/Link"
import { useState } from "react"
import appdata from '../data/app'
import Container from "./container"
const LangSwitcher = () => {
  const { local, setLocal } = useLocal()
  const handleChangeLang = () => {
    if (local === locals.vi) {
      return setLocal(locals.en)
    }
    return setLocal(locals.vi)
  }
  if (local !== locals.en)
    return <button onClick={handleChangeLang} className="flex flex-col lg:flex-row items-stretch uppercase  font-sweetsans  text-3xl text-white">
      <svg fill="currentColor" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 116.93 111.19">
        <path d="M4.36,58.55V106.9H113.79V58.55ZM38,97.81H33.47L20.06,68.9h5.66l10,22.58H36L46,68.9h5.4Zm24.35,0h-5V68.9h5Zm34.53,0H72.34V68.9H95.8v4.43H77.3V80.5H88.41v4.43H77.3v8.45H96.87Z" /><path d="M92.68,12a21.2,21.2,0,0,1,13.46,5.22l-3.45,3.1a15,15,0,0,0-10-3.9c-6.25,0-10.63,5-10.63,10.94,0,5.57,3.81,10.89,11.11,10.89,3,0,6.55-.89,8.5-2.35v-5.8H92.64V25.7h13.59V38.36A23.78,23.78,0,0,1,92.9,42.7c-9.16,0-16-6.86-16-15.36A15.42,15.42,0,0,1,92.68,12Z" /><polygon points="43.41 12.91 47.79 12.91 64.48 32.96 64.52 32.96 64.52 12.91 69.48 12.91 69.48 41.82 65.1 41.82 48.41 21.77 48.37 21.77 48.37 41.82 43.41 41.82 43.41 12.91" /><polygon points="11.8 12.91 35.26 12.91 35.26 17.34 16.76 17.34 16.76 24.51 27.87 24.51 27.87 28.94 16.76 28.94 16.76 37.39 36.32 37.39 36.32 41.82 11.8 41.82 11.8 12.91" /><path d="M0,0V111.19H116.93V0ZM111.9,106.25H5V59.17H111.9Zm0-55.34H5V3.83H111.9Z" />
      </svg>
    </button>
  return <button onClick={handleChangeLang} className="flex flex-col lg:flex-row items-stretch uppercase  font-sweetsans  text-3xl text-white">
    <svg fill="currentColor" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 116.93 111.19"><g ><path d="M51.4,68.9,38,97.81H33.47L20.06,68.9h5.66l10,22.58H36L46,68.9Z" /><path d="M57.38,97.81V68.9h5V97.81Z" /><path d="M88.41,84.93H77.3v8.45H96.87v4.43H72.34V68.9H95.8v4.43H77.3V80.5H88.41Z" /><path d="M0,0V111.19H116.93V0ZM92.68,12a21.2,21.2,0,0,1,13.46,5.22l-3.45,3.1a15,15,0,0,0-10-3.9c-6.25,0-10.63,5-10.63,10.94,0,5.57,3.81,10.89,11.11,10.89,3,0,6.55-.89,8.5-2.35v-5.8H92.64V25.7h13.59V38.36A23.78,23.78,0,0,1,92.9,42.7c-9.16,0-16-6.86-16-15.36A15.42,15.42,0,0,1,92.68,12Zm-49.27.88h4.38L64.48,33h0v-20h5V41.82H65.1L48.41,21.76h0V41.82h-5Zm-31.61,0H35.26v4.43H16.76v7.17H27.87v4.43H16.76v8.45H36.32v4.43H11.8Zm100.1,93.34H5V59.17H111.9Z" /></g></svg>
  </button>
}
const LGLangSwitcher = () => {
  const { local, setLocal } = useLocal()
  const handleChangeLang = () => {
    if (local === locals.vi) {
      return setLocal(locals.en)
    }
    return setLocal(locals.vi)
  }
  if (local !== locals.en)
    return <button onClick={handleChangeLang} className="flex flex-col lg:flex-row items-stretch uppercase  font-sweetsans  text-3xl text-white">
      <img className="h-5" src="/web-icon-language-13.png"></img>
    </button>
  return <button onClick={handleChangeLang} className="flex flex-col lg:flex-row items-stretch uppercase  font-sweetsans  text-3xl text-white">
    <img className="h-5" src="/web-icon-language-14.png"></img>
  </button>
}
export default function Header() {
  const [open, setOpen] = useState(false)
  const { get } = useSource()
  const pages = get('app.data.navbar', appdata.en.navbar)
  return (
    <header className={classNames("z-50 text-element-2", open ? "sticky top-0" : "relative")}>
      <Container style={{ maxWidth: '1440px' }}>
        <nav style={{ height: 'var(--header-height)', margin: 'auto' }} className="hidden xl:flex justify-center items-center ">
          <Link href="/" style={{ width: '160px' }} className="flex-shrink-0 ">
            <img className="w-full" src="/logo-3.png" />
          </Link>
          <div className="px-3 mt-1 flex-1 space-x-[3vw] flex flex-wrap justify-center items-center">
            {
              pages.map(({ title, href }, i) => {
                return <a key={i} className="font-sweetsans py-1 text-[1vw] 2xl:text-base my-2 leading-none text-effect-1 uppercase text-pr hover:text-element-2" href={href}>{title}</a>
              })
            }

          </div>
          <div className="leading-none">
            <LGLangSwitcher />
          </div>
        </nav>
        <nav style={{ height: 'var(--header-height)', maxWidth: '1200px', margin: 'auto' }} className="flex xl:hidden flex-wrap py-3 justify-between items-center">
          <Link href="/" className=" text-center ">
            <img style={{ maxWidth: '100px' }} className="w-full" src="/logo-3.png" />
          </Link>
          <div className="flex items-center space-x-6">
            <LangSwitcher />
            <div className="group leading-none ">
              <button onClick={() => setOpen(!open)} className="text-3xl text-white z-20 ">
                {
                  open ? <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth={2} d="M3,3 L21,21 M3,21 L21,3" /></svg>
                    : <svg fill="currentColor" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 116.92 111.19"><path d="M0,0V111.19H116.92V0ZM98.94,84.48H18v-10h81Zm0-23.9H18v-10h81Zm0-23.91H18v-10h81Z" /></svg>
                }
              </button>
              {open && <div style={{ backgroundColor: "#E5DFD6", zIndex: '-1' }} className=" pointer-events-auto fixed inset-0 overflow-auto">
                <Container>
                  <div className="py-header flex flex-col items-center text-center px-6" >
                    <div className="h-6"></div>
                    {
                      pages.map(({ title, href }, i, arr) => {
                        if (i === arr.length - 1) {
                          return <a key={i} className="font-sweetsans text-element-5 py-5  w-full leading-none text-effect-1 uppercase text-pr hover:text-element-2" href={href}>{title}</a>
                        }
                        return <a key={i} className="font-sweetsans text-element-5 py-5 border-b border-white w-full leading-none text-effect-1 uppercase text-pr hover:text-element-2" href={href}>{title}</a>
                      })
                    }
                  </div>
                </Container>
              </div>}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
