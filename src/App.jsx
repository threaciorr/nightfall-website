import { BrowserRouter } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Hero from './hero/Hero';
import Products from './products/Products';
import Members from './members/Members'
import StarsCanvas from './stars/Stars';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='fixed'>
        <Navbar />
      </div>
      <Hero />
      <Products />
      <div className='members-relative'>
        <StarsCanvas />
        <Members />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
