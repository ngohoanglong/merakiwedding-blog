import LocalProvider from 'providers/local'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from './header'



export default function Layout({ preview, children }) {
  return (
    <LocalProvider>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </LocalProvider>
  )
}
