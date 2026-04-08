import React, { Component } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Career from "./components/Career.jsx";
import Contact from "./components/Contact.jsx"
import Services from "./components/Services.jsx";
import About from "./components/Career1.jsx";
import Casestudy from "./components/Casestudy.jsx";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import Career1 from "./components/Career1.jsx";
// import Card from './Card.jsx'


export default class App extends Component {
  render() {
    return (
      <>
       <BrowserRouter>
       <Navbar/>
        <Routes>
         < Route path="/" element={<Casestudy/>}></ Route>
         < Route path="/about" element={<About/>}></ Route>
         < Route path="/Services" element={<Services/>}></ Route>
         < Route path="/career" element={<Career1/>}></ Route>
         < Route path="/Contact" element={<Contact/>}></ Route>
         
        </Routes>
        <Footer/>
       </BrowserRouter>
      </>
    );
  }
}
