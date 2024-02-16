import React from 'react'
import doc1 from '../../assets/doc-1.jpg.webp';
import doc2 from '../../assets/doc-2.jpg.webp';
import doc3 from '../../assets/doc-3.jpg.webp';
import doc4 from '../../assets/doc-4.jpg.webp';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const Qulification = () => {
  return (
   <>
        <section className='ftco-section'>
            <div className="container">
                <div className=" row justify-content-center pb-4">
                <div className="col-md-7 text-center heading-section">
                <span className="subheading">Our Doctors</span>
                <h2 className="mb-5">Qualified Dentist</h2>
                </div>
                </div>
            <div className="row">
                <div className="col-3">
                    <div className="staff">
                    <div class="img-wrap d-flex align-items-stretch">
                    <div class="img align-self-stretch">
                    <img src={doc1} alt="" />
                    </div>
                    </div>
                    <div class="text text-center">
                    <h3 class="mb-2">Dr. Lloyd Wilson</h3>
                    <span class="position mb-2">Head Dentist</span>
                    <div class="faded">
                    <ul class="ftco-social text-center">
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span ><FaTwitter/></span></a></li>
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span ><FaFacebook/></span></a></li>
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span><FaGoogle/></span></a></li>
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span><FaInstagram/></span></a></li>
                    </ul>
                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="staff">
                    <div class="img-wrap d-flex align-items-stretch">
                    <div class="img align-self-stretch">
                    <img src={doc2} alt="" />
                    </div>
                    </div>
                    <div class="text text-center">
                    <h3 class="mb-2">Dr. Rachel Parker</h3>
                    <span class="position mb-2"> Dentist</span>
                    <div class="faded">
                    <ul class="ftco-social text-center">
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span ><FaTwitter/></span></a></li>
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span ><FaFacebook/></span></a></li>
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span><FaGoogle/></span></a></li>
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span><FaInstagram/></span></a></li>
                    </ul>
                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="staff">
                    <div class="img-wrap d-flex align-items-stretch">
                    <div class="img align-self-stretch">
                    <img src={doc3} alt="" />
                    </div>
                    </div>
                    <div class="text text-center">
                    <h3 class="mb-2">Dr. Ian Smith</h3>
                    <span class="position mb-2"> Dentist</span>
                    <div class="faded">
                    <ul class="ftco-social text-center">
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span ><FaTwitter/></span></a></li>
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span ><FaFacebook/></span></a></li>
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span><FaGoogle/></span></a></li>
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span><FaInstagram/></span></a></li>
                    </ul>
                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="staff">
                    <div class="img-wrap d-flex align-items-stretch">
                    <div class="img align-self-stretch">
                    <img src={doc4} alt="" />
                    </div>
                    </div>
                    <div class="text text-center">
                    <h3 class="mb-2">Dr. Alicia Henderson</h3>
                    <span class="position mb-2"> Dentist</span>
                    <div class="faded">
                    <ul class="ftco-social text-center">
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span ><FaTwitter/></span></a></li>
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span ><FaFacebook/></span></a></li>
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span><FaGoogle/></span></a></li>
                    <li><a href="#" class="d-flex align-items-center justify-content-center"><span><FaInstagram/></span></a></li>
                    </ul>
                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    </div>
                    </div>
                    </div>
                </div>  
            </div>
            </div>
        </section>
   </>
  )
}

export default Qulification