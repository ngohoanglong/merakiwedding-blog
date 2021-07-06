import classNames from 'classnames'
import Cookies from 'js-cookie'
import { throttle } from 'lodash'
import { Link } from 'meraki/components/Link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Container from './container'
import Header from './header'

const Editable = () => {
  const { isReady, isPreview, asPath } = useRouter()
  const [mouted, setMouted] = useState()
  useEffect(() => {
    if (!mouted) {
      setMouted(true)
    }
  }, [mouted])
  if (!(mouted && !asPath.includes('/edit') && Cookies.get('tina_strapi_jwt'))) return null
  return <div
    className={classNames('border-b bg-accent-7 border-accent-7 text-white', {
    })}
  >
    <Container>
      <div className="py-2 text-center text-sm">
        <Link
          href={"/edit" + asPath}
          className=" hover:text-cyan duration-200 transition-colors"
        >
          Click here to edit
        </Link>{' '}
      </div>
    </Container>
  </div>
}
export default function Layout({ children }) {
  const { isReady, isPreview, asPath, locale } = useRouter()
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
      <style>
        {
          locale === 'vi' ? `
            .font-kinfolk{
              font-family:Kinfolk-Vi, Times New Roman!important;
              text-transform:uppercase;
              word-spacing: 0.2em;
            }
            .font-sweetsans{
              font-weight:500;
              font-family:Commissioner, Times New Roman;!important;
            }
          `: ''
        }
      </style>
      <Editable />
      <Meta key="meta" />
      <div key="main" className="min-h-screen w-full">
        <Header hasScrolled={hasScrolled} />
        <main>{children}</main>
      </div>
      <Footer key="footer"></Footer>
      <div key="srollTopButton" style={{
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
