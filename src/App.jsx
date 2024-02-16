import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';
import store from './store';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; 
import Topbar from "./components/Topbar/Topbar";
import Home from "./container/Home";
import Footer from "./components/Footer/Footer";
import AddDoctor from "./components/Adddoctor/Adddoctor";
import Dentist from "./container/Dentist";
import About from './container/About';
import Servicepage from './container/Servicepage';
import Pricingpage from './container/Pricingpage';
import Blogpage from './container/Blogpage';
import Contact from './container/Contact';


function App() {
  return (
    <Provider store={store}>
      <div className="page-wrapper">
        <Topbar/>
        <Header />
        
        <div className="page-body-wrapper">
          <div className="page-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="dentist" element={<Dentist />} />
              <Route path="/Add" element={<AddDoctor />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Servicepage />} />
              <Route path="/pricing" element={<Pricingpage />} />
              <Route path="/blog" element={<Blogpage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
