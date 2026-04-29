import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Services extends Component {
    constructor(props) {
        super(props);

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
                "Flutter",
            ],
        };
    }

    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
    }


    render() {
         const toolsData = [
                {name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
                {name: "Adobe XD", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg" },
                {name: "Illustrator", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
                {name: "Photoshop", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
                {name: "Invision", logo: "invision.png" },
                {name: "Zeplin", logo: "zeplin.png" },
                {name: "React.js", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
                {name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
                {name: "Java Script", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
                {name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
                {name: "Wordpress", logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
                {name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
                {name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
                {name: "Google Ads", logo: "google-ads.png" },
                {name: "Facebook Ads", logo: "facebook-ads.png" }, // Replace with actual FB Ads logo if needed
                {name: "Google Analytics", logo: "google-analytics.png" },
                {name: "Mailchimp", logo: "mailchimp.png" }
                ];
        return (
            <>

                <section className="bg-light position-relative py-5" style={{ overflow: "hidden" }}>

                    {/* GRID BACKGROUND */}
                    <div
                        className="position-absolute w-100 h-100"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                            top: 0,
                            left: 0,
                            zIndex: 0,
                        }}
                    ></div>

                    <div className="container position-relative px-5" style={{ zIndex: 1 }}>
                        <div className="row align-items-center">

                            {/* LEFT SIDE */}
                            <div
                                className="col-lg-5 mb-5 mb-lg-0"
                                data-aos="fade-right"
                            >
                                <h1 className="fw-bold display-3">01</h1>

                                <h2
                                    className="fw-bold display-4"
                                    data-aos="fade-right"
                                    data-aos-delay="200"
                                >
                                    Branding.
                                </h2>

                                {/* ICON / SHAPE */}
                                <div
                                    className="mt-5 "
                                    data-aos="zoom-in"
                                    data-aos-delay="400"
                                >
                                    <div
                                        style={{
                                            width: "140px",
                                            height: "140px",
                                            backgroundColor: "#ef2f4b",
                                            borderRadius: "50%",
                                            position: "relative",
                                        }}
                                    >
                                        {/* cut shape */}
                                        <div
                                            style={{
                                                width: "70px",
                                                height: "70px",
                                                backgroundColor: "#e9e9e9",
                                                position: "absolute",
                                                bottom: 0,
                                                right: 0,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="col-lg-7 p-5">

                                <p data-aos="fade-up">
                                    Branding is more than a logo—it's your voice, your story, and your
                                    identity in a single, powerful presence. We create brand identities
                                    that cut through the noise and connect with your audience. From
                                    strategy to visual identity, we fuse creativity with insight to
                                    build a brand that not only stands out but leaves a lasting impression.
                                </p>

                                <p data-aos="fade-up" data-aos-delay="200">
                                    Let’s shape a brand that’s uniquely yours, with a seamless experience
                                    that sparks recognition, loyalty, and growth across every platform.
                                </p>

                                <ul
                                    className="ps-3 mt-4 p-5"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <li>Brand Strategy</li>
                                    <li>Brand Identity</li>
                                    <li>Visual Design</li>
                                    <li>Brand Communication</li>
                                    <li>Brand Monitoring and Management</li>
                                    <li>Brand Launch and Promotion</li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </section>

                <section className="bg-dark text-light position-relative p-5 " style={{ overflow: "hidden" }}>

                    {/* GRID BACKGROUND */}
                    <div
                        className="position-absolute w-100 h-100"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                            top: 0,
                            left: 0,
                            zIndex: 0,
                        }}
                    ></div>

                    <div className="container position-relative p-5" style={{ zIndex: 1 }}>
                        <div className="row align-items-center">

                            {/* LEFT SIDE */}
                            <div
                                className="col-lg-6 mb-5 mb-lg-0"
                                data-aos="fade-right"
                            >
                                <h1 className="fw-bold display-3">02</h1>

                                <h2
                                    className="fw-bold display-4"
                                    data-aos="fade-right"
                                    data-aos-delay="200"
                                >
                                    UI/UX Design.
                                </h2>

                                {/* TRIANGLE SHAPE */}
                                <div
                                    className="mt-5"
                                    data-aos="zoom-in"
                                    data-aos-delay="400"
                                >
                                    <div
                                        style={{
                                            width: 0,
                                            height: 0,
                                            borderLeft: "80px solid transparent",
                                            borderRight: "80px solid transparent",
                                            borderBottom: "140px solid #d4a52c",
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="col-lg-6 ">

                                <p data-aos="fade-up">
                                    The user experience drives everything we do. Our UI UX design services
                                    are built around creating intuitive, visually engaging, and seamless
                                    digital interactions that users love. We dive deep into understanding
                                    your audience, what they need, how they think, and how they behave—to
                                    create designs that blend innovation with usability.
                                </p>

                                <p data-aos="fade-up" data-aos-delay="200">
                                    From websites to mobile apps, we design interfaces that are not just
                                    beautiful but functional, accessible, and built to keep your users
                                    engaged. We believe in simplifying complexity, ensuring that every
                                    interaction is smooth and enjoyable. Whether you're looking to build
                                    from scratch or enhance your current platform, our designs elevate
                                    the user experience and keep your audience coming back for more.
                                </p>

                                <ul
                                    className="ps-3 mt-4 "
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <li>UI/UX Design for Mobile</li>
                                    <li>UI/UX Design for Web</li>
                                    <li>User Research</li>
                                    <li>Wireframe & Prototype</li>
                                    <li>Data-Driven Design</li>
                                    <li>Data Visualization</li>
                                    <li>Landing Page Design</li>
                                    <li>Website Design</li>
                                    <li>Information Architecture</li>
                                    <li>Website Redesign</li>



                                </ul>

                            </div>

                        </div>
                    </div>
                </section>


                <section className="bg-light position-relative py-5 px-5" style={{ overflow: "hidden" }}>

                    {/* GRID BACKGROUND */}
                    <div
                        className="position-absolute w-100 h-100 "
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                            top: 0,
                            left: 0,
                            zIndex: 0,
                        }}
                    ></div>

                    <div className="container position-relative pt-5 align-item-center" style={{ zIndex: 1 }}>
                        <div className="row">

                            {/* LEFT SIDE */}
                            <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
                                <h1 className="fw-bold display-3">03</h1>
                                <h2 className="fw-bold display-4">Development.</h2>

                                {/* SHAPE */}
                                <div className="mt-5" data-aos="zoom-in" data-aos-delay="300">
                                    <div
                                        style={{
                                            width: 0,
                                            height: 0,
                                            borderLeft: "120px solid transparent",
                                            borderRight: "120px solid transparent",
                                            borderBottom: "120px solid #2ea38f",
                                            transform: "rotate(45deg)",
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="col-lg-7">

                                <p className="text-dark lh-lg " data-aos="fade-up">
                                    We create digital ecosystems tailored to your business vision.
                                    Our expert development team specializes in crafting scalable,
                                    high-performance websites, mobile applications, and custom software
                                    that are designed to grow your business.
                                </p>

                                <p className="text-dark lh-lg" data-aos="fade-up" data-aos-delay="200">
                                    We ensure your digital solutions are responsive, fast, and built
                                    for today’s multi-device world with cutting-edge technologies.
                                    From seamless functionality to sleek user interfaces, our focus is
                                    on delivering an experience that not only meets your needs but
                                    exceeds your users' expectations.
                                </p>

                                <p className="mt-4 fw-medium" data-aos="fade-up" data-aos-delay="300">
                                    Ready to perform at the highest level?
                                </p>

                                <h4 className="fw-bold mt-4" data-aos="fade-up" data-aos-delay="400">
                                    Web Development
                                </h4>
                                <ul className="ps-3" data-aos="fade-up" data-aos-delay="500">
                                    <li>MVP Development</li>
                                    <li>SAAS Development</li>
                                    <li>Web App Modernization</li>
                                    <li>Third–Party Integrations</li>
                                </ul>

                                <h4 className="fw-bold mt-4" data-aos="fade-up" data-aos-delay="600">
                                    Mobile App Development
                                </h4>
                                <ul className="ps-3" data-aos="fade-up" data-aos-delay="700">
                                    <li>React Native</li>
                                    <li>Java</li>
                                    <li>Kotlin</li>
                                    <li>Flutter</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="digital-section d-flex align-items-center bg-dark py-5 position-relative">

                    {/* GRID */}
                    <div className="grid-bg"></div>

                    <div className="container position-relative">
                        <div className="row align-items-center">

                            {/* LEFT */}
                            <div className="col-lg-6 text-white mb-5 mb-lg-0" data-aos="fade-right">
                                <h1 className="fw-bold display-3">04</h1>
                                <h2 className="fw-bold display-4">Digital Marketing.</h2>

                                {/* ICON */}
                                <div className="target-icon mt-5" data-aos="zoom-in" data-aos-delay="300">
                                    <div className="center-circle"></div>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="col-lg-6 text-light">

                                <p data-aos="fade-up">
                                    We transform your online presence into a powerful engine for growth.
                                    In an ever-evolving digital world, we craft dynamic marketing strategies
                                    that cut through the noise.
                                </p>

                                <p data-aos="fade-up" data-aos-delay="200">
                                    We take a data-driven approach to ensure every campaign delivers
                                    measurable results, increasing visibility and ROI.
                                </p>

                                <ul className="ps-3 mt-4" data-aos="fade-up" data-aos-delay="300">
                                    <li>Search Engine Optimization (SEO)</li>
                                    <li>Franchise SEO</li>
                                    <li>Link Building</li>
                                    <li>Social Media Marketing</li>
                                    <li>Pay Per Click (PPC) Management</li>
                                    <li>Online Reputation Management (ORM)</li>
                                    <li>Content Writing</li>
                                    <li>Conversion Rate Optimization (CRO)</li>
                                    <li>Web Hosting</li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </section>

                <section className="tools-section py-5 bg-white">
                    <div className="container">

                        {/* 3. HEADING SECTION */}
                        <div className="text-center mb-5" data-aos="fade-up">
                            <h2 className="fw-bold h1 lh-sm">
                                <span className="text-warning">Tools</span> we use <br />
                                <span className="text-black">to get the job done.</span>
                            </h2>
                        </div>

                        {/* 4. LOGO GRID */}
                        <div className="row g-4 justify-content-center">
                            {toolsData.map((tool, index) => (
                                // Each logo is a responsive column. 
                                // col-12 for mobile, col-sm-6 for small screens, col-lg-3 for large screens
                                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-stretch"
                                    data-aos="fade-up" // AOS animation type
                                    data-aos-delay={index * 50} // Staggered animation: delay based on index
                                >

                                    {/* 5. LOGO CARD COMPONENT */}
                                    <div className="tool-card d-flex align-items-center justify-content-start w-100 p-3 rounded-4 bg-light shadow-sm"
                                        style={{ border: '1px solid #eaeaea', transition: 'transform 0.3s' }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} // Subtle hover effect
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                                    >
                                        <img
                                            src={tool.logo}
                                            alt={tool.name}
                                            className="img-fluid me-3"
                                            style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                                        />
                                        <span className="fw-medium text-dark text-nowrap">
                                            {tool.name}
                                        </span>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </section>
                

            </>
        );
    }
}