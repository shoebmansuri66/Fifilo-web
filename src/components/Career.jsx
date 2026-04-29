import React, { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, Star, PenTool, BarChart3, Handshake } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Career() {
    // AOS Initialization
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const steps = [
        {
            title: "Discovery:",
            desc: "We start by understanding your goals and challenges. This helps us align our expertise in design, development, and digital marketing with your vision.",
            align: "right",
            icon: <Star size={32} />
        },
        {
            title: "Strategy:",
            desc: "We develop a tailored strategy that outlines the best approach for your project, whether it’s a new design, a website overhaul, or a marketing campaign.",
            align: "left",
            icon: <Search size={32} />
        },
        {
            title: "Design & Development:",
            desc: "In this phase, we turn insights into engaging designs and build functional, user-friendly websites. Our development team ensures that everything works seamlessly.",
            align: "right",
            icon: <PenTool size={32} />
        },
        {
            title: "Implementation:",
            desc: "We carefully implement and integrate the solutions, making sure they meet your expectations and deliver the results you need.",
            align: "left",
            icon: <BarChart3 size={32} />
        },
        {
            title: "Optimization & Support:",
            desc: "After launch, we continue to refine and support your project to ensure it performs optimally and adapts to any evolving needs.",
            align: "right",
            icon: <Handshake size={32} />
        }
    ];

    const teamMembers = [
        { id: 1, name: "Mohsin Khan", role: "Co-Founder & CEO", image: "mohsin-khan.png", linkedin: "https://www.linkedin.com/in/mohsinkhan1710/", isActive: true },
        { id: 2, name: "Abhishek Joshi", role: "Co-Founder & CTO", image: "abhishek-joshi.png", linkedin: "https://www.linkedin.com/in/abhishek-joshi-5872b4285/", isActive: false },
        { id: 3, name: "Amit Bisen", role: "Technical Lead", image: "amit-bisen.png", linkedin: "https://www.linkedin.com/in/amitbisen/", isActive: false },
        { id: 4, name: "VIvek pratap", role: "Sr. Business Executive", image: "vivek-pratap.png", linkedin: "https://www.linkedin.com/in/vivek-pratap-singh/", isActive: false },
        { id: 5, name: "Pushpraj patel", role: "Sr. Web Developer", image: "pushpraj-patel.png", linkedin: "https://www.linkedin.com/in/patel-pusp/", isActive: false },
        { id: 6, name: "Rakesh patel", role: "Sr. UI UX Designer", image: "rakesh-patel.png", linkedin: "", isActive: false },
        { id: 7, name: "Khalid Ali", role: "UI UX Designer", image: "khalid-ali.png", linkedin: "https://www.linkedin.com/in/sayyedkhalidali/", isActive: false },
        { id: 8, name: "Sahiba Jain", role: "HR Manager", image: "sahiba-jain.png", linkedin: "https://www.linkedin.com/in/sahiba-jain-57b7901ab/", isActive: false },
        { id: 9, name: "Gagan VshwaKarma", role: "Web Developer", image: "gagan-vishwakarma.png", linkedin: "https://www.linkedin.com/in/gagan-vishwakarma/", isActive: false },
        { id: 10, name: "Abdul Raique", role: "UI UX Designer", image: "abdul-razique.png", linkedin: "https://www.linkedin.com/in/abdul-razique-800a1023b/", isActive: false },
        { id: 11, name: "Osaif Ansari", role: "Digital Marketing Executive", image: "osaif-ansari.png", linkedin: "https://www.linkedin.com/in/osaif-ansari-b991412b8/", isActive: false },
    ];

    return (
        <div className="overflow-hidden bg-white" style={{marginTop:"-10px"}}>
            {/* HERO */}
            <div className="h-100 bg-dark text-white p-5">
                <div className="row align-items-center">
                    <div className="col-md-6" data-aos="fade-right">
                        <h1 className="fw-bold display-5">
                            Crafting Experiences <br />
                            <span className="text-warning">Not Just Designs</span>
                        </h1>
                        <p className="text-muted mt-3 lead">We bring ideas to life through engaging digital experiences.</p>
                        <p>Collaborating closely with our clients, we create impactful designs.</p>
                    </div>
                    <div className="col-md-6 text-center" data-aos="fade-left">
                        <img src="https://i.pinimg.com/originals/46/1f/da/461fdab9031a7598237acc456d1fee27.png" alt="" className="img-fluid mb-3" />
                        <br />
                        <button className="btn btn-warning px-4">Lets Connect</button>
                    </div>
                </div>
            </div>

            {/* ABOUT */}
            <div className="container text-center py-5" data-aos="fade-up">
                <h3 className="fs-6 fw-normal">Who we are</h3>
                <h2 className="fw-bold">
                    <span className="text-warning">About</span> FIFILO Designs
                </h2>
                <p className="text-muted mt-3 px-md-5">Founded by the visionary duo Mohsin Khan and Abhishek Joshi, FIFILO Designs is where creativity meets technology. Inspired by our roots in design innovation, we infuse
                     every project with a unique blend of artistic flair and strategic insight. Whether you're launching a startup or enhancing an established brand, we transform your vision into memorable digital experiences.
                     From pixel-perfect UI/UX design to advanced web development and impactful digital marketing, we create solutions that not only work but truly shine.</p>
            </div>

            {/* PROCESS */}
            <section className="bg-black text-white py-5 position-relative" style={{ overflow: "hidden", minHeight: "200vh" }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25"
                    style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
                </div>

                <div className="container position-relative">
                    <div className="text-center mb-5" data-aos="fade-down">
                        <p className="text-secondary small mb-1 uppercase">Process</p>
                        <h2 className="fw-bold display-4">Our Work <span className="text-warning">Process</span></h2>
                    </div>

                    <div className="position-absolute start-50 translate-middle-x h-100 d-none d-md-block" style={{ width: "2px", backgroundColor: "#333", top: "150px" }}>
                        <motion.div style={{ scaleY, originY: 0, backgroundColor: "#ffc107", height: "100%", width: "100%", boxShadow: "0 0 15px #ffc107" }} />
                    </div>

                    <div className="row flex-column align-items-center">
                        {steps.map((step, index) => (
                            <div key={index} className="col-12 d-flex align-items-center mb-5 position-relative" style={{ minHeight: "300px" }}>
                                <div className="position-absolute start-50 translate-middle-x z-3">
                                    <div className="bg-warning rounded-4 d-flex align-items-center justify-content-center shadow"
                                        style={{ width: "60px", height: "60px", color: "black", border: "4px solid #000" }}>
                                        {step.icon}
                                    </div>
                                </div>
                                <div className={`col-5 ${step.align === "left" ? "text-end pe-5" : "offset-7 ps-5 text-start"}`}
                                     data-aos={step.align === "left" ? "fade-right" : "fade-left"}>
                                    <h4 className="fw-bold border-start border-warning border-4 ps-3 d-inline-block">{step.title}</h4>
                                    <p className="text-secondary mt-2 small lh-base">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-4" data-aos="fade-right">
                        <p className="text-muted">Team</p>
                        <h2 className="fw-bold">Our <span className="text-warning">Team</span></h2>
                        <p className="text-muted">Your design partners for amazing digital experiences.</p>
                    </div>

                    <div className="col-md-8">
                        <div className="row g-4">
                            {teamMembers.map((member, idx) => (
                                <div className="col-md-4 col-sm-6" key={member.id} data-aos="zoom-in" data-aos-delay={idx * 50}>
                                    <div className="card border-0 shadow-sm h-100 team-card">
                                        <img src={member.image} className="card-img-top" alt={member.name} />
                                        <div className="card-body d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="mb-0 fw-bold">{member.name}</h6>
                                                <small className="text-muted">{member.role}</small>
                                            </div>
                                            <a href={member.linkedin} target="_blank" rel="noreferrer" className={`fs-4 ${member.isActive ? "text-primary" : "text-secondary"}`}>
                                                <FaLinkedin />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .team-card:hover { transform: translateY(-5px); transition: 0.3s; }
                @media (max-width: 767px) {
                    .offset-7 { margin-left: 0 !important; }
                    .col-5 { width: 100% !important; text-align: center !important; padding: 20px !important; }
                    .ps-5, .pe-5 { padding: 10px !important; }
                }
            `}</style>
        </div>
    );
}