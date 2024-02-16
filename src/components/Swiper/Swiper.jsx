import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const MySwiper = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
    });

    setSwiperInstance(swiper);

    const autoSlideInterval = setInterval(() => {
      swiper.slideNext();
    }, 3000);

    return () => clearInterval(autoSlideInterval);
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src="https://preview.colorlib.com/theme/toothcare/images/bg_1.jpg.webp"
            alt="Slide 1"
          />
          <div className="slide-content">
          <div class="text mt-md-5">
          <h1 class="mb-4">Dentist Services <br/> that You Can Trust</h1>
          <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia<br/>  and Consonantia, there live the blind texts.</p>
          <p><a href="#" class="btn btn-primary p-4 py-3">See Our Services <span class="ion-ios-arrow-round-forward"></span></a> <a href="#" class="btn btn-white p-4 py-3">View Course <span class="ion-ios-arrow-round-forward"></span></a></p>
          </div>
          </div>
        </div>
        <div className="swiper-slide">
          <img
            src="https://preview.colorlib.com/theme/toothcare/images/bg_2.jpg.webp"
            alt="Slide 2"
          />
            <div className="slide-content">
          <div class="text mt-md-5">
          <h1 class="mb-4">A Brighter Dental<br/> Experienced</h1>
          <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia<br/> and Consonantia, there live the blind texts.</p>
          <p><a href="#" class="btn btn-primary p-4 py-3">See Our Services <span class="ion-ios-arrow-round-forward"></span></a> <a href="#" class="btn btn-white p-4 py-3">View Course <span class="ion-ios-arrow-round-forward"></span></a></p>
          </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default MySwiper;
