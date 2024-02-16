import React from 'react'
import { ChevronRight } from 'react-bootstrap-icons'
import TESTIMONIAL from '../components/TESTIMONIAL/TESTIMONIAL'

const About = () => {
  return (
   <>
    <section className='hero-wrap hero-wrap-2 mb-5' >
        <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-center">
        <div class="col-md-9 text-center mb-5">
        <p class="breadcrumbs"><span class="me-2"><a href="index.html">Home <i class="fa fa-chevron-right"><ChevronRight/></i></a></span> <span>About <i class="fa fa-chevron-right"></i><ChevronRight/></span></p>
        <h1 class="mb-0 bread mb-5">About Us</h1>
        
        </div>
        </div>
        </div>
    </section>
    <TESTIMONIAL/>
   </>
  )
}

export default About