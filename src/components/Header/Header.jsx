import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Nav className='navbar navbar-expand-lg ftco-navbar-light mt-3'>
        <div className="container-xl ftco-navbar-light">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa fa-bars"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ps-lg-0" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dentist" className="nav-link" activeClassName="active">Dentist</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link" activeClassName="active">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pricing" className="nav-link" activeClassName="active">Pricing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link" activeClassName="active">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
              </li>
             
            </ul>
          </div>
          <Link to="/contact" className="btn-custom order-lg-last">
            <p style={{ fontSize: 13 }}>Add Appoiment Here Click...</p>
          </Link>
        </div>
      </Nav>
    </>
  );
}

export default Header;
