import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default class Services extends Component {
    constructor(props) {
        super(props);
        
        AOS.init({
            duration: 1000,
            once: true,
        });
            this.state = {
              services: [
                "Web Development",
                "MVP Development",
                "SAAS Development",
                "Web App Modernization",
                "Third-Party Integrations",
                "Mobile App Development",
                "React Native",
                "Java",
                "Kotlin",
                "Flutter"
              ]
            };
          }
        
          componentDidMount() {
            AOS.init({ duration: 800, once: true });
          }
        
   
    render() {
        return (
            <>
                <section className="service-section">
                    {/* LEFT SIDE */}
                    <div className="service-left" data-aos="fade-up">
                        <h4 className="service-number">01</h4>
                        <h2 className="service-title">Branding.</h2>

                        <div className="service-graphic" data-aos="zoom-in">
                            <img src="https://th.bing.com/th/id/OIP.HTy8lRTRM4BNH8yefZ-UwwHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="branding graphic" />
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="service-right" data-aos="fade-left">
                        <p>
                            Branding is more than a logo—it’s your voice, your story, and your
                            identity in a single, powerful presence. We create brand identities
                            that cut through the noise and connect with your audience.
                        </p>

                        <p>
                            From strategy to visual identity, we fuse creativity with insight
                            to build a brand that not only stands out but leaves a lasting
                            impression.
                        </p>

                        <ul>
                            <li>Brand Strategy</li>
                            <li>Brand Identity</li>
                            <li>Visual Design</li>
                            <li>Brand Communication</li>
                            <li>Brand Monitoring and Management</li>
                            <li>Brand Launch and Promotion</li>
                        </ul>
                    </div>
                </section>
                <section className="service dark-bg">
                    <div className="service-left" data-aos="fade-right">
                        <h1 className="count">02</h1>
                        <h2 className="title">UI/UX Design.</h2>

                        <div className="shape yellow" data-aos="zoom-in">
                            <img src="https://th.bing.com/th/id/OIP.KKccILeBHTqRV7Zr_dlL4AHaHa?w=200&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" width={"50px"} alt="" />
                        </div>
                    </div>

                    <div className="service-right" data-aos="fade-left">
                        <p>
                            The user experience drives everything we do. Our UI UX design
                            services are built around creating intuitive, visually engaging,
                            and seamless digital interactions that users love.
                        </p>

                        <p>
                            From websites to mobile apps, we design interfaces that are not
                            just beautiful but functional and accessible.
                        </p>

                        <ul>
                            <li>UI/UX Design for Mobile</li>
                            <li>UI/UX Design for Web</li>
                            <li>User Research</li>
                            <li>Wireframe & Prototype</li>
                            <li>Data-Driven Design</li>
                            <li>Data Visualization </li>
                            <li>Landing Page Design</li>
                            <li>Website Design</li>
                            <li> Information Architecture</li>
                            <li> Website Redesign</li>
                        </ul>
                    </div>
                </section>

            </>
        );
    }

 }
