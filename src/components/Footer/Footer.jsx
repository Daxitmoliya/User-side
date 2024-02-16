import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaCalendar, FaUser, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const posts = [
    {
      imageUrl: 'https://preview.colorlib.com/theme/toothcare/images/image_1.jpg.webp',
      date: 'Jan. 18, 2021',
      author: 'Admin',
      title: 'Creativity and Inspiration',
    },
    {
      imageUrl: 'https://preview.colorlib.com/theme/toothcare/images/image_2.jpg.webp',
      date: 'Jan. 18, 2021',
      author: 'Admin',
      title: 'Creativity and Inspiration',
    },
    {
      imageUrl: 'https://preview.colorlib.com/theme/toothcare/images/image_4.jpg',
      date: 'Jan. 18, 2021',
      author: 'Admin',
      title: 'Creativity and Inspiration',
    },
  ];
  
  return (
    <footer>
      <section className='ftco-footer fooot'>
        <div className="overlay"></div>
        <div className="container-xl">
          <div className="row mb-5 justify-content-between">
            <div className="col-md-6 col-lg">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2 logo d-flex">
                  <a className="navbar-brand align-items-center" href="index.html">
                    Toothcare
                    <span>Dental Clinic Services</span>
                  </a>
                </h2>
                <p className='text-white'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <ul className="ftco-footer-social list-unstyled mt-2">
                  <li><a href="#"><FaTwitter /></a></li>
                  <li><a href="#"><FaFacebook /></a></li>
                  <li><a href="#"><FaInstagram /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Services</h2>
                <ul className="list-unstyled">
                  <li><a href="#"><FaArrowRight /> Tooth Protection</a></li>
                  <li><a href="#"><FaArrowRight /> Dental Implants</a></li>
                  <li><a href="#"><FaArrowRight /> Dental Care</a></li>
                  <li><a href="#"><FaArrowRight /> Teeth Whitening</a></li>
                  <li><a href="#"><FaArrowRight /> Dental Calculus</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Quick Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#"><FaArrowRight /> Home</a></li>
                  <li><a href="#"><FaArrowRight /> About</a></li>
                  <li><a href="#"><FaArrowRight /> Services</a></li>
                  <li><a href="#"><FaArrowRight /> Dentists &amp; Conditions</a></li>
                  <li><a href="#"><FaArrowRight /> Blog</a></li>
                  <li><a href="#"><FaArrowRight /> Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Recent Posts</h2>
                {
                posts.map((post, index) => (
                  <div key={index} className="foot-block mb-4 d-flex">
                  <img className="blog-img img rounded" src={post.imageUrl} alt={post.title} w/>
                    <div className="text">
                      <div className="meta">
                        <div><a href="#"><span className="fa fa-calendar"></span> {post.date}</a></div>
                        <div><a href="#"><span className="fa fa-user"></span> {post.author}</a></div>
                      </div>
                      <h3 className="heading"><a href="#">{post.title}</a></h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 col-lg">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3 ">
                  <ul>
                    <li ><span className="icon text-white me-4"><FaMapMarkerAlt /></span><span className="text text-white ">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href="#"><span className="icon me-4"><FaPhone /></span><span className="text">+2 392 3929 210</span></a></li>
                    <li><a href="#"><span className="icon me-4`"><FaPaperPlane /></span><span className="text">info@yourdomain.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
