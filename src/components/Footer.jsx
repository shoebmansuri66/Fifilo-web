import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavLinks from "./NavLinks.jsx";
import SocialIcons from "./SocialIcons.jsx";
import "../App.css";

export default class FooterCTA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Let’s Work Together",
      links: [
        "Case Studies",
        "About",
        "Services",
        "Career",
        "Blogs",
        "Contact",
        "Privacy Policy",
      ],
    };
  }

  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  render() {
    return (
      <footer className="footer" data-aos="fade-up">
        <div className="footer-content">
          
          {/* Title */}
          <div className="footer-title" data-aos="fade-right">
            <h1>{this.state.title}</h1>
            <div className="circle-btn" data-aos="fade-right">
              ↗
            </div>
          </div>

         
          <NavLinks links={this.state.links} />

          
          <div className="footer-bottom">
            <div className="logo">FIFILO</div>
            <SocialIcons />
          </div>

          <hr />

          <p className="copyright">
            © 2025 FIFILO Designs. All rights reserved.
          </p>

        </div>
      </footer>
    );
  }
}
