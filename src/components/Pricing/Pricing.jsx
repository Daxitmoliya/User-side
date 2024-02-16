import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Pricing = () => {
  const arrowIconStyle = { color: '#0dcaf0' };

  // State to track the items in the cart
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (productName, productPrice) => {
    const newCartItem = { name: productName, price: productPrice };
    setCart([...cart, newCartItem]);
  };

  // Array of products with details
  const products = [
    {
      name: 'Basic Plan',
      price: 50,
      details: [
        'Diagnostic Services',
        'Professional Consultation',
        'Tooth Implants',
        'Surgical Extractions',
        'Teeth Whitening',
        'Teeth Cleaning'
      ]
    },
    {
      name: 'Beginner Plan',
      price: 79,
      details: [
        'Diagnostic Services',
        'Professional Consultation',
        'Tooth Implants',
        'Surgical Extractions',
        'Teeth Whitening',
        'Teeth Cleaning'
      ]
    },
    {
      name: 'Premium Plan',
      price: 89,
      details: [
        'Diagnostic Services',
        'Professional Consultation',
        'Tooth Implants',
        'Surgical Extractions',
        'Teeth Whitening',
        'Teeth Cleaning'
      ]
    },
    {
      name: 'Ultimate Plan',
      price: 99,
      details: [
        'Diagnostic Services',
        'Professional Consultation',
        'Tooth Implants',
        'Surgical Extractions',
        'Teeth Whitening',
        'Teeth Cleaning'
      ]
    }
  ];

  return (
    <>
      <section className='ftco-section'>
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 text-center heading-section aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <span className="subheading">Our Pricing</span>
              <h2 className="mb-3">Pricing &amp; <span>Packages</span></h2>
            </div>
          </div>
          <div className="row">
            {products.map((product, index) => (
              <div key={index} className="col-3">
                <div className="block-7">
                  <div className="text-center">
                    <span className="excerpt d-block">{product.name}</span>
                    <span className="price"><sup>$</sup> <span className="number">{product.price}</span></span>
                    <ul className="pricing-text mb-3">
                      {product.details.map((detail, index) => (
                        <li key={index}><span style={arrowIconStyle} className="me-2"><FaArrowRight /></span>{detail}</li>
                      ))}
                    </ul>
                    {/* Add to Cart Button */}
                    <button onClick={() => addToCart(product.name, product.price)} className="btn btn-primary d-block px-2 py-3">Get Started</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </>
  );
}

export default Pricing;
