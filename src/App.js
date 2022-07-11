import Banner from './components/Banner.js'
import Cards from './components/Cards.js'
import FeatureBanner from './components/FeatureBanner.js'
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import { useEffect } from "react"

const App = () => {


  
  useEffect(() => {
    document.title = 'Ludlow University';
  });
  return (
    <div >
      <Navbar/>
      <Header/>
      <Cards/>
      <Banner/>
      <FeatureBanner/>
      <Footer/>
    </div>
  )
}

export default App