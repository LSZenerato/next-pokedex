import '../utils/styles/globals.css'
import { Header, Footer } from '../components/organisms'

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
