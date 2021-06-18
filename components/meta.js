import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      {/* <link rel="manifest" href="/favicon/site.webmanifest" /> */}
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <title>Meraki wedding planner</title>
      <meta
        name="description"
        content={`DESTINATION WEDDING PLANNER in Vietnam Independence &#8211; Attentiveness &#8211; Dedication Every wedding crafted by Meraki is an unique experience that was delivered beautifully our Gallery Browse our weddings for tips and inspiration. From Ha Long Bay to Ho Chi Minh city, let us inspire you Mai &#038; Chris Phong &#038; Hoang Tess &#038; Andy Lucia &#038; &hellip; Home Read More &raquo;`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
