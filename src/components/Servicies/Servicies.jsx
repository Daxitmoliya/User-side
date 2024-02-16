import React from 'react';
import toothImage from '../../assets/teeth.png';
import implant from '../../assets/implant.png';
import dentalcare from '../../assets/dentalcare.png';
import toothwhitening from '../../assets/toothwhitening.png';
import tartar from '../../assets/tartar.png';
import remove from '../../assets/remove.png';
import dentistinspection from '../../assets/dentistinspection.png';
import { useDispatch } from 'react-redux';



const Services = () => {

  return (
    <>
      <section className='py-5 ftco-section bg-light'>
        <div className='container-xl'>
          <div className="row row justify-content-center">
            <div className="col-md-8 heading-section text-center mb-5">
              <span className="subheading">Services</span>
              <h2 className="mb-4">Toothcare Services</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 text-center d-flex align-items-stretch">
              <div className="services-2">
                <div className="icon text-white">
                  <img src={toothImage} alt="Tooth Icon"  />
                </div>
                <div className="text">
                  <h2 >Tooth Protection</h2>
                  <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center d-flex align-items-stretch">
              <div className="services-2">
                <div className="icon text-white">
                  <img src={implant} alt="Tooth Icon"  />
                </div>
                <div className="text">
                  <h2 >Dental Implants</h2>
                  <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center d-flex align-items-stretch">
              <div className="services-2">
                <div className="icon text-white">
                  <img src={dentalcare} alt="Tooth Icon"  />
                </div>
                <div className="text">
                  <h2 >Dental Care</h2>
                  <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center d-flex align-items-stretch">
              <div className="services-2">
                <div className="icon text-white">
                  <img src={toothwhitening} alt="Tooth Icon"  />
                </div>
                <div className="text">
                  <h2 >Teeth Whitening</h2>
                  <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center d-flex align-items-stretch">
              <div className="services-2">
                <div className="icon text-white">
                  <img src={tartar} alt="Tooth Icon"  />
                </div>
                <div className="text">
                  <h2 >Dental Caculus</h2>
                  <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center d-flex align-items-stretch">
              <div className="services-2">
                <div className="icon text-white">
                  <img src={remove} alt="Tooth Icon"  />
                </div>
                <div className="text">
                  <h2 >Tooth Removal</h2>
                  <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center d-flex align-items-stretch">
              <div className="services-2">
                <div className="icon text-white">
                  <img src={tartar} alt="Tooth Icon"  />
                </div>
                <div className="text">
                  <h2 > Removal of Tartar</h2>
                  <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center d-flex align-items-stretch">
              <div className="services-2">
                <div className="icon text-white">
                  <img src={dentistinspection} alt="Tooth Icon"  />
                </div>
                <div className="text">
                  <h2 >Tooth Inspection</h2>
                  <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
