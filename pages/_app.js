
import Footer from '../components/Footer'
import Header from '../components/header'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Header/>
  

  <Component {...pageProps} />
  <Footer/>  
    
  </>
}

export default MyApp
