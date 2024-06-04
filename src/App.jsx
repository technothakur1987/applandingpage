import Header from "./components/Header1"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Features from './pages/Features'
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollTotop"





function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
     
      <Route path="/about" element={<About/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/featuers" element={<Features/>}/>
    </Routes>
     <ScrollToTop/> 
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
