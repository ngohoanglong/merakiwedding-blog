import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  // const { isReady, isPreview } = useRouter()
  // if ( Component.builderFormConfig) {
  //   const C = withBuilderForm(Component.builderFormConfig)(Component)
  //   return <C {...pageProps} />
  // }
  return <Component {...pageProps} />
}

export default MyApp
