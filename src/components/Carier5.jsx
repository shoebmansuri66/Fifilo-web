
import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default class Carier5 extends Component {
    constructor() {
        super();
        AOS.init({ duration: 1000, once: true });
    }

    render() {
        return (
            <section className="case-section dark-bg">
                {/* Heading */}
                <div className="case-heading" data-aos="fade-up">
                    <p className="small-title">Our work</p>
                    <h2>
                        Featured <i>Case Studies</i>
                    </h2>
                </div>

                {/* Cards */}
                <div className="case-wrapper">

                    {/* Card 1 */}
                    <div className="case-card" data-aos="fade-up">
                        <div className="tags">
                            <i>Development</i>
                            <i>UI/UX Design</i>
                        </div>

                        <h3>TribeStays ↗</h3>
                        <p>Creating a new hub for vital research & resources</p>

                        {/* Image placeholder */}
                        <div className="case-img">
                            <img src="https://th.bing.com/th/id/OIP.dw6mZtjicPeTABChN4sLTAHaEJ?w=296&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="img" />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="case-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="tags">
                           <i>Branding</i>
                            <i>UI/UX Design</i>
                        </div>

                        <h3>Cure Hub ↗</h3>
                        <p>Make hitting the GYM a habit you will love the App. </p>

                        <div className="case-img">
                            <img src="https://th.bing.com/th/id/OIP.1L0BKskKL-La7-FvNh7h3wHaE7?w=242&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="img" />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="case-card" data-aos="fade-up" data-aos-delay="400">
                        <div className="tags">
                           <i>UI/UX Design</i>
                            <i>Website Development</i>
                        </div>

                        <h3>SPV Mortgages ↗</h3>
                        <p>Maximizing Tax Efficiency with SPV Limited Company Mortgages</p>

                        <div className="case-img">
                            <img src="https://th.bing.com/th/id/OIP.EUuLIJFk5tnmXNSg7IP9cgHaEK?w=322&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="img" />
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}
