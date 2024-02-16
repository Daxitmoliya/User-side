import React from 'react'
import Blog from '../components/Blog/Blog'
import { ChevronRight } from 'react-bootstrap-icons'

const Blogpage = () => {
  return (
   <>
   <section className='hero-wrap hero-wrap-2 mb-5' >
        <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-center">
        <div class="col-md-9 text-center mb-5">
        <p class="breadcrumbs"><span class="me-2"><a href="index.html">Home <i class="fa fa-chevron-ChevronRight"><ChevronRight/></i></a></span> <span>Blog <i class="fa fa-chevron-right"></i><ChevronRight/></span></p>
        <h1 class="mb-0 bread mb-5">Blog</h1>
        
        </div>
        </div>
        </div>
    </section>
    <Blog/>
   </>
  )
}

export default Blogpage