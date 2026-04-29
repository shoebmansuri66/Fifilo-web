import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Carier1 from "./components/Carier1.jsx";
import Contact from "./components/Contact.jsx"
import Services from "./components/Services.jsx";
import Career from "./components/Career.jsx";
import Casestudy from "./components/Casestudy.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import Menu from "./components/Menu.jsx"

// import Card from './Card.jsx'


export default class App extends Component {
  render() {
    return (
      <>
       <BrowserRouter>
       <Navbar/>
        <Routes>
         < Route path="/" element={<Casestudy/>}></ Route>
         < Route path="/career" element={<Career/>}></ Route>
         < Route path="/Services" element={<Services/>}></ Route>
         < Route path="/carier1" element={<Carier1/>}></ Route>
         < Route path="/Contact" element={<Contact/>}></ Route>
         < Route path="/menu" element={<Menu/>}></ Route>
         
        </Routes>
        <Footer/>
       </BrowserRouter>
      </>
    );
  }
}
