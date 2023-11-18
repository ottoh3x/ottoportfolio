import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Header />

    <div className='min-h-screen'>


  <Component {...pageProps} />
    </div>
  <Footer />
  </>
  )
}

export default MyApp
