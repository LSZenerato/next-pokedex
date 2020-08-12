import '../styles/globals.css'
import { Header, Footer } from '../components/organisms'

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

//https://www.oficinadanet.com.br//imagens/coluna/3368/rodape-sempre-embaixo.html

export default MyApp
