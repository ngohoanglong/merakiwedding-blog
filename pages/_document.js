import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
          <Head>
              <script
                  async
                  src="https://www.googletagmanager.com/gtag/js?id=G-152J4BFGVX"
              />

              <script
                  dangerouslySetInnerHTML={{
                      __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'G-152J4BFGVX');
            `,
                  }}
              />
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
