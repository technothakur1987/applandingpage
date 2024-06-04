import React from 'react'
import './Home.css'


import HomeHero from '../components/HomeHero'
import HomeFeatures from '../components/HomeFeatures'
import Advantage from '../components/Advantage'
import Custom from '../components/Custom'
import Testinomial from '../components/Testinomial'
import Faq from '../components/Faq'
import BlackBox from '../components/BlackBox'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Home = () => {
  return (
    <>
    <HomeHero/>
   <HomeFeatures/> 
   <Advantage/>
 <Custom/>
 <Testinomial/>
 <Faq/>
 <BlackBox/>

    

   

    </>
  )
}

export default Home