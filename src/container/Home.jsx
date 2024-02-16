import React from 'react'
import MySwiper from '../components/Swiper/Swiper'
import { Appointment } from '../components/Appoiment/Appoiment'
import Services from '../components/Servicies/Servicies'
import Qulification from '../components/Qulification/Qulification'
import Mini from '../components/Mini/Mini'
import TESTIMONIAL from '../components/TESTIMONIAL/TESTIMONIAL'
import Stories from '../components/Stories/Stories'
import Blog from '../components/Blog/Blog'
import Pricing from '../components/Pricing/Pricing'



const Home = () => {
  return (
  <>
     <MySwiper/>
      <Appointment/>
      <Services/>
      <Qulification/>
      <Mini/>
      <TESTIMONIAL/>
      <Stories/>
      <Blog/>
      <Pricing/>
      
  </>
  )
}

export default Home