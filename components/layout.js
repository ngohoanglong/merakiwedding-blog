import { useRouter } from 'next/router'
import LocalProvider from 'providers/local'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from './header'



export default function Layout({ preview, children }) {
  const { isReady } = useRouter()
  useEffect(() => {
    if (!isReady) {
      return
    }
    const element = window
    const handleScroll = throttle(() => {
      const offset = 0
      const { scrollTop } = scrollerRef.current || element.documentElement
      const scrolled = scrollTop > offset
      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled)
      }
    }, 200)
    handleScroll()
    element.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      element.removeEventListener('scroll', handleScroll)
    }
  }, [isReady])
  return (
    <LocalProvider>
      <Meta />
      <div className="min-h-screen">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
      <div>

      </div>
    </LocalProvider>
  )
}
