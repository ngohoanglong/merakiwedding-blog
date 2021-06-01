import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Container from './container'


const Header = () => {
  return <header className="bg-white">
    <Container>
      <nav className="flex bg-white flex-wrap items-center justify-between p-4">
        header
      </nav>
    </Container>

  </header>
}
export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
