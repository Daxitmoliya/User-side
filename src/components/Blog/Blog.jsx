import React from 'react';
import { FaCalendar, FaComment, FaUser } from 'react-icons/fa';

const Blog = () => {
  return (
    <>
      <section className='ftco-section'>
        <div className="container-xl">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 heading-section text-center">
              <span className="subheading">Our Blog</span>
              <h2>Recent From Blog</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-4 display-flex">
              <div className="blog-entry justify-content-end">
                <a href="#" className="block-20 img">
                  <img src="https://preview.colorlib.com/theme/toothcare/images/image_1.jpg.webp" alt="" />
                </a>
                <div className="text">
                  <p className='meta'>
                    <span>
                        <FaUser/>
                      Admin
                    </span>
                    <span><i className="me-1"></i> <FaCalendar/> Jan. 20, 2021</span>
                    <span><a href="#"><i className=" me-1 "></i><FaComment/> 3 Comments</a></span>
                  </p>
                  <h3 className="heading mb-3"><a href="#">How to keep your teeth always in the best condition</a></h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="col-4 display-flex">
              <div className="blog-entry justify-content-end">
                <a href="#" className="block-21 img">
                  <img src="https://preview.colorlib.com/theme/toothcare/images/image_2.jpg.webp" alt="" />
                </a>
                <div className="text">
                  <p className='meta'>
                    <span>
                    <FaUser/>
                      Admin
                    </span>
                    <span><i className="fa fa-calendar me-1"></i>  <FaCalendar/>Jan. 20, 2021</span>
                    <span><a href="#"><i className="fa fa-comment me-1"></i><FaComment/>  3 Comments</a></span>
                  </p>
                  <h3 className="heading mb-3"><a href="#">How to keep your teeth always in the best condition</a></h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="col-4 display-flex">
              <div className="blog-entry justify-content-end">
                <a href="#" className="block-22 img">
                  <img src="https://preview.colorlib.com/theme/toothcare/images/image_3.jpg.webp" alt="" />
                </a>
                <div className="text">
                  <p className='meta'>
                    <span>
                    <FaUser/>
                      Admin
                    </span>
                    <span><i className="fa fa-calendar me-1"></i><FaCalendar/>Jan. 20, 2021</span>
                    <span><a href="#"><i className="fa fa-comment me-1"></i><FaComment/> 3 Comments</a></span>
                  </p>
                  <h3 className="heading mb-3"><a href="#">How to keep your teeth always in the best condition</a></h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
