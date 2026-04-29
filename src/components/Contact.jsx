import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactSection() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <style>
                {`
          input::placeholder, textarea::placeholder {
            color: #666666 !important; 
            opacity: 1 !important;
          }
          /* Click karne par bhi color wahi rahe */
          input:focus::placeholder {
            color: #444444 !important;
          }
        `}
            </style>
            <section className="bg-dark text-white  py-5 px-5 position-relative "
                style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "35px 35px",marginTop:"-10px" }}>

                <div className="container py-4 px-5"> {/* Padding kam ki */}
                    <div className="row g-4 align-items-center justify-content-center"> {/* justify-center se gap manage hoga */}

                        {/* --- LEFT SIDE: INFO CARD --- */}
                        <div className="col-lg-4" data-aos="fade-right"> {/* col-lg-5 se col-lg-4 kiya */}
                            <h2 className="fw-bold mb-2" style={{ fontSize: "2.2rem" }}>Contact with Us</h2>
                            <p className="text-white small mb-4">
                                We're here to connect, collaborate, and bring your ideas to life.
                            </p>

                            <div className="card border-0 rounded-4 p-3 shadow-lg"
                                style={{ backgroundColor: "#151515", border: "1px solid #222" }}>
                                <h5 className="fw-bold mb-3 text-white">Got a project in mind?</h5>

                                <div className="d-flex align-items-center mb-2 small">
                                    <Mail className="text-warning me-2" size={16} />
                                    <span className="opacity-75 text-white">hey@fifilo.com</span>
                                </div>

                                <div className="d-flex align-items-center mb-2 small">
                                    <Phone className="text-warning me-2" size={16} />
                                    <span className="opacity-75 text-white">+91-7869525027</span>
                                </div>

                                <div className="d-flex align-items-center small">
                                    <Phone className="text-warning me-2" size={16} />
                                    <span className="opacity-75 text-white">+91-9669123488</span>
                                </div>
                            </div>
                        </div>

                        {/* --- RIGHT SIDE: COMPACT FORM --- */}
                        <div className="col-lg-5" data-aos="fade-left"> {/* col-lg-7 se col-lg-5 kiya (Chota ho gaya) */}
                            <div className="card border-0 rounded-4 p-4 shadow-lg"
                                style={{ backgroundColor: "#0f0f0f", border: "1px solid #222" }}>

                                <form>
                                    <div className="mb-3">
                                        <div className="d-flex align-items-center border-bottom border-secondary pb-1 ">
                                            <User className="text-white me-2" size={16} />
                                            <input type="text" className="form-control bg-transparent border-0 text-white shadow-none p-0 small placeholder-glow " placeholder="Your Name" style={{ fontSize: "0.9rem", placeholderOpacity: "0.5" }} />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="d-flex align-items-center border-bottom border-secondary pb-1">
                                            <Mail className="text-white me-2" size={16} />
                                            <input type="email" className="form-control bg-transparent border-0 text-white shadow-none p-0 small" placeholder="Your E-mail" style={{ fontSize: "0.9rem" }} />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="d-flex align-items-center border-bottom border-secondary pb-1">
                                            <Phone className="text-white me-2" size={16} />
                                            <input type="text" className="form-control bg-transparent border-0 text-white shadow-none p-0 small" placeholder="Your Number" style={{ fontSize: "0.9rem" }} />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="d-flex align-items-start border-bottom border-secondary pb-1">
                                            <MessageSquare className="text-white me-2 mt-1" size={16} />
                                            <textarea className="form-control bg-transparent border-0 text-white shadow-none p-0 small" rows="1" placeholder="Your Message" style={{ fontSize: "0.9rem" }}></textarea>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-outline-warning rounded-pill px-4 py-1 fw-bold border-2 small" style={{ fontSize: "0.85rem" }}>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}