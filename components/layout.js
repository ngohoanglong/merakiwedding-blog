import classNames from 'classnames'
import { throttle } from 'lodash'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from './header'


export default function Layout({ locale, children }) {
  const { isReady, isPreview } = useRouter()
  const [hasScrolled, setHasScrolled] = useState()
  useEffect(() => {
    if (!isReady) {
      return
    }
    const element = window
    const handleScroll = throttle(() => {
      const offset = window.outerHeight || 0
      const { scrollTop } = window.document.documentElement
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
  }, [isReady, hasScrolled])
  return (
    <>
      {/* <Alert preview={isPreview} /> */}
      <Meta />
      <div className="min-h-screen">
        <Header hasScrolled={hasScrolled} />
        <main>{children}</main>
      </div>
      <Footer ></Footer>
      <div style={{
        padding: `env(safe-area-inset-top, 50px)
          env(safe-area-inset-right, 50px)
          env(safe-area-inset-bottom, 50px)
          env(safe-area-inset-left, 50px)`
      }} className="fixed bottom-0 right-0 p-5 pointer-events-none">
        <div className="p-5" style={{ color: '#cccccc' }}>
          <div className={classNames('transition-transform transform ease-in-out duration-700 origin-bottom',
            hasScrolled ? "scale-100 pointer-events-auto" : "scale-0"
          )} onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            })
          }}>
            <img className="w-10 h-10 object-contain" src="/home/icons/web-homepage-icons-06.png" />
          </div>
        </div>
      </div>
    </>
  )
}
