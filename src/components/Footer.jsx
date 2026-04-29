import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

export default function FooterCTA() {
  return (
    <footer className="footer py-5 border ">

      <div className="container text-center">

        {/* TOP TITLE */}
        <div className="d-flex justify-content-center align-items-center gap-3 mb-5 flex-wrap">
          <h1 className="fw-bold m-0">Let’s Work Together</h1>

          <div className="circle-btn d-flex justify-content-center align-items-center">
            ↗
          </div>
        </div>

        {/* NAV LINKS */}
        <div className="d-flex justify-content-center flex-wrap gap-4 mb-5">
          <a href="#" className="footer-link text-dark">Case Studies</a>
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Services</a>
          <a href="#" className="footer-link active">Career</a>
          <a href="#" className="footer-link">Blogs</a>
          <a href="#" className="footer-link">Contact</a>
          <a href="#" className="footer-link">Privacy Policy</a>
        </div>

        {/* BOTTOM */}
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">

          <div className="logo fw-bold">FIFILO</div>

          <div className="d-flex gap-3">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
          </div>

        </div>

        <hr />

        <p className="mt-3 mb-0 text-muted">
          © 2025 FIFILO Designs. All rights reserved.
        </p>

      </div>
    </footer>
  );
}