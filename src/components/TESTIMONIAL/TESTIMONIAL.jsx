import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaQuoteLeft } from 'react-icons/fa';

const TESTIMONIAL = () => {
  const testimonials = [
    {
      message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Roger Scott",
      position: "Marketing Manager",
      imageUrl: "https://preview.colorlib.com/theme/toothcare/images/person_1.jpg.webp",
    },
    {
        message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        name: "Roger Scott",
        position: "Marketing Manager",
        imageUrl: "https://preview.colorlib.com/theme/toothcare/images/person_4.jpg.webp",
      },
      {
        message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        name: "Roger Scott",
        position: "Marketing Manager",
        imageUrl: "https://preview.colorlib.com/theme/toothcare/images/person_3.jpg.webp",
      },
      {
        message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        name: "Roger Scott",
        position: "Marketing Manager",
        imageUrl: "https://preview.colorlib.com/theme/toothcare/images/person_2.jpg.webp",
      },
      {
        message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        name: "Roger Scott",
        position: "Marketing Manager",
        imageUrl: "https://preview.colorlib.com/theme/toothcare/images/person_3.jpg.webp",
      },
      {
        message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        name: "Roger Scott",
        position: "Marketing Manager",
        imageUrl: "https://preview.colorlib.com/theme/toothcare/images/person_4.jpg.webp",
      },
  ];

  return (
    <>
      <section className='ftco-section testimony-section'>
        <div className="container-xl">
         <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            nextEl: null,
            prevEl: null,
          }}
          loop={true}
          autoplay={{ delay: 1000 }}
        >
          {
          testimonials.map((testimonial) => (
            <SwiperSlide>
              <div className="item">
                <div className='testimony-wrap'>
                  <div className='desc mb-4'>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span><FaQuoteLeft /></span>
                    </div>
                    <p className="mb-0 msg">{testimonial.message}</p>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="user-img" >
                      <img src={testimonial.imageUrl} alt={testimonial.name} />
                    </div>
                    <div className="ps-3 tx">
                      <p className="name">{testimonial.name}</p>
                      <span className="position">{testimonial.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper>
        </div>
      </section>
    </>
  );
}

export default TESTIMONIAL;
