import LocalProvider from '@providers/local';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return <LocalProvider>
    <Component {...pageProps} />
  </LocalProvider>
}

export default MyApp
