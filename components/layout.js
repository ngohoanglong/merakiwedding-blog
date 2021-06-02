import Footer from '../components/footer'
import Meta from '../components/meta'
const navigation = [
  {
    "title": "Home",
    "href": "http://merakiweddingplanner.com/"
  },
  {
    "title": "About us",
    "href": "http://merakiweddingplanner.com/about-us/"
  },
  {
    "title": "Gallery",
    "href": "http://merakiweddingplanner.com/gallery/"
  },
  {
    "title": "Blog",
    "href": "http://merakiweddingplanner.com/blog/"
  },
  {
    "title": "Services",
    "href": "http://merakiweddingplanner.com/services/"
  },
  {
    "title": "Contact",
    "href": "http://merakiweddingplanner.com/contact-us/"
  }
]

const Header = () => {
  return <header className="z-10 relative text-white">
    <nav style={{ height: 'var(--header-height)', maxWidth: '1200px', margin: 'auto' }} className="flex flex-wrap items-center justify-between">
      <div className="flex-1">
        <img style={{ maxWidth: '200px' }} className="w-full " src="/logo.png" />
      </div>
      <div className="px-3">
        {
          navigation.map(({ title, href }) => {
            return <a style={{ fontSize: '18px' }} className="px-4 text-pr font-serif hover:text-primary" href={href}>{title}</a>
          })
        }
      </div>
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
