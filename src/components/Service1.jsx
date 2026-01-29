import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../App.css'

export default class Service1 extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }

  render() {
    return (
      <section>
        <div data-aos="fade-right">
          <h1>
            Custom Design <br />
            Crafted for Impact
          </h1>

          <p>
            Bring your vision to life with personalized digital solutions.
            From UI/UX design to web development and digital marketing,
            we turn your ideas into smooth, high-performing experience.
          </p>
        </div>

        <div data-aos="fade-left">
          {/* yaha tum apni image lagana */}
          <img src="https://i.pinimg.com/originals/46/1f/da/461fdab9031a7598237acc456d1fee27.png" alt="hero" />
        </div>
      </section>
    );
  }
}
