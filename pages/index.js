import Layout from '@components/layout'
import Home from '@templates/home/Home'
import Head from 'next/head'

export default function Index({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Home - Meraki Wedding Planner</title>
          <link rel="icon" href="/favicon.png" sizes="32x32"></link>
        </Head>
        <Home />
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
