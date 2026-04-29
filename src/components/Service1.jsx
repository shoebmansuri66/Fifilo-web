import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Service1 extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }

  render() {
    return (
      <section className="py-5 bg-dark text-white" style={{ marginTop: "-10px" }}>
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-md-6" data-aos="fade-right">
              <h1 className="fw-bold display-5 mb-3">
                Custom Design <br />
                <span className="text-warning">
                  Crafted for Impact
                </span>
              </h1>

              <p className="text-light fs-6">
                Bring your vision to life with personalized digital solutions.
                From UI/UX design to web development and digital marketing,
                we turn your ideas into smooth, high-performing experience.
              </p>

            </div>

            {/* RIGHT IMAGE */}
            <div className="col-md-6 text-center mt-4 mt-md-0 d-flex" data-aos="fade-left">
              <img
                src="https://i.pinimg.com/originals/46/1f/da/461fdab9031a7598237acc456d1fee27.png"
                alt="hero"
                className="img-fluid rounded "
                style={{ maxHeight: "400px" }}
              />
              <button className="p-2 h-25" style={{ backgroundColor: "transparent", borderColor: "gold", borderRadius: "30px", color: "gold" }}>Lets connect</button>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
