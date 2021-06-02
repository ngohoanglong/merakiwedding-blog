import Footer from '../components/footer'
import Meta from '../components/meta'
import { pages } from '../const'


const Header = () => {
  return <header className="z-10 relative text-white px-6">
    <nav style={{ height: 'var(--header-height)', maxWidth: '1200px', margin: 'auto' }} className="hidden md:flex flex-wrap items-center justify-between">
      <div className="flex-1">
        <img style={{ maxWidth: '160px' }} className="w-full" src="/logo-3.png" />
      </div>
      <div className="px-3">
        {
          pages.map(({ title, href }) => {
            return <a style={{ fontSize: '18px' }} className="px-4 text-pr text-prata hover:text-primary" href={href}>{title}</a>
          })
        }
      </div>
    </nav>
    <nav style={{ height: 'var(--header-height)', maxWidth: '1200px', margin: 'auto' }} className="flex md:hidden flex-wrap py-3 items-start justify-center">
      <div className=" text-center ">
        <img style={{ maxWidth: '100px' }} className="w-full" src="/logo-3.png" />
      </div>
      {/* <div className="px-3">

      </div> */}
    </nav>
  </header>
}
export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
