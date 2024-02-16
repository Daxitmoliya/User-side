import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaClock, FaMap, FaPhone, FaSearchLocation } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";

const Topbar = () => {
  return (
    <>
      <div className='top-wrap'>
        <Container>
          <Row>
            <div className="col-4 d-flex align-items-center mt-3">
              <a className="navbar-brand align-items-center" href="#">
                Toothcare
                <span>Dental Clinic Services</span>
              </a>
            </div>
            <div className='col-md mb-2 mb-md-0 mt-3'>
              <div className='con d-flex align-items-center'>
                <div className="icon">
                  <span>
                    <FaClock />
                  </span>
                </div>
                <div className="text ml-2">
                  <span className="d-block">Monday - Friday</span>
                  <strong className="d-block text-secondary ">8:00AM-8:00PM</strong>
                </div>
              </div>
            </div>
            <div className='col-md mb-2 mb-md-0 mt-3'>
              <div className='con d-flex align-items-center'>
                <div className="icon">
                  <span>
                    <FaPhone />
                  </span>
                </div>
                <div className="text ml-2">
                  <span className="d-block">Call Us</span>
                  <strong className="d-block text-secondary">+2 392 3929 210</strong>
                </div>
              </div>
            </div>
            <div className='col-md mb-2 mb-md-0 mt-3'>
              <div className='con d-flex align-items-center'>
                <div className="icon">
                  <span>
                    <FaMap />
                  </span>
                </div>
                <div className="text ml-2">
                  <span className="d-block">Location</span>
                  <strong className="d-block text-secondary" >San Francisco, California</strong>
                </div>
              </div>
              
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Topbar;
