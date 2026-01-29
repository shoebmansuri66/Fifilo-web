import React, { Component } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Career from "./components/Career.jsx";
import Contact from "./components/Contact.jsx"
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Casestudy from "./components/Casestudy.jsx";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
// import Card from './Card.jsx'


export default class App extends Component {
  render() {
    return (
      <>
       <BrowserRouter>
       <Navbar/>
        <Routes>
         < Route path="/" element={<Casestudy/>}></ Route>
         < Route path="/About" element={<About/>}></ Route>
         < Route path="/Services" element={<Services/>}></ Route>
         < Route path="/Career" element={<Career/>}></ Route>
         < Route path="/Contact" element={<Contact/>}></ Route>
         
        </Routes>
        <Footer/>
       </BrowserRouter>
      </>
    );
  }
}
