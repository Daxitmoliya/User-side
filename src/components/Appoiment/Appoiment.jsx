import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addadmin } from '../../services/action/student.action';

export const Appointment = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    appointmentDate: '',
    appointmentTime: '',
    selectedDoctor: '',
    message: '',
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form submitted:', formData);
    dispatch(addadmin(formData)); 
  };
  

  return (
    <>  
      <section className='ftco-section pb-0 pt-0'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-items-stretch">
              <form action="#" className="appointment aside-stretch pe-lg-5 d-flex align-items-center" onSubmit={handleSubmit}>
                <div>
                  <span className="subheading">We Are Here For You</span>
                  <h2 className="mb-5 appointment-head">Make An Appointment</h2>  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Your Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Full Name"
                          style={{ color: '#6c757d' }}
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          style={{ color: '#6c757d' }}
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Phone Number"
                          style={{ color: '#6c757d' }}
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Appointment Date</label>
                        <input
                          type="text"
                          className="form-control arrival_date datepicker-input"
                          placeholder="Appointment Date"
                          style={{ color: '#6c757d' }}
                          name="appointmentDate"
                          value={formData.appointmentDate}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Appointment Time</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Appointment Time"
                          style={{ color: '#6c757d' }}
                          name="appointmentTime"
                          value={formData.appointmentTime}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Select A Doctor</label>
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon"><span className="fa fa-chevron-down"></span></div>
                            <select
                            name="selectedDoctor"
                            className="form-control"
                            value={formData.selectedDoctor}
                            onChange={handleInputChange}
                          >
                            <option value="Dr. Lloyd Wilson">Dr. Lloyd Wilson</option>
                            <option value="Dr. Rachel Parker">Dr. Rachel Parker</option>
                            <option value="Dr. Ian Smith">Dr. Ian Smith</option>
                            <option value="Dr. Alicia Henderson">Dr. Alicia Henderson</option>
                            <option value="Dr. Robert Johnson">Dr. Robert Johnson</option>
                            <option value="Dr. Blake Wood">Dr. Blake Wood</option>
                          </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          name="message"
                          cols="0"
                          rows="5"
                          className="form-control"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12 d-flex align-items-center">
                      <div className="form-group">
                        <input type="submit" value="Send message" className="btn btn-white py-3 d-block rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-md-6 heading-section d-flex align-items-center'>
              <div className='mt-0 my-lg-5 py-5'>
                <span className="subheading">Learn Anything</span>
                <h2 className="mb-2">We Offer Best Dental Services</h2>
                <div className="row mt-4 g-lg-2">
                  <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                    <div className="services d-flex">
                      <div className="icon"><span className="flaticon-booking"></span></div>
                      <div className="text">
                        <h2>Easy Booking</h2>
                        <p className="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                    <div className="services d-flex">
                      <div className="icon"><span className="flaticon-dentist"></span></div>
                      <div className="text">
                        <h2>Team Dentist</h2>
                        <p className="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                    <div className="services d-flex">
                      <div className="icon"><span className="flaticon-offer"></span></div>
                      <div className="text">
                        <h2>Best Price Guarantee</h2>
                        <p className="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
