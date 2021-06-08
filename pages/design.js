import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'

export default function Design({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blog - Meraki Wedding Planner</title>
          <link rel="icon" href="/favicon.png" sizes="32x32"></link>
        </Head>
        <div className="space-y-12">
          <Container>
            <div className="w-full flex flex-col ">
              <div className="text-3xl font-bold">FONTS</div>
              <div className="font-kinfolk">KINFOLK</div>
              <div className="font-garamond italic">Garamond italic</div>
              <div className="font-garamond font-bold">Garamond bold italic</div>
              <div className="font-garamond ">Garamond medium italic</div>
              <div className="font-commissioner font-semibold">Commissioner semibold</div>
              <div className="font-commissioner font-light">Commissioner light</div>
              <div className="font-sweetsans">SWEET SANS PRO MEDIUM</div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  return {
    props: { preview },
    revalidate: 300
  }
}
