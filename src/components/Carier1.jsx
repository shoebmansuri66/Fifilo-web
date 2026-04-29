import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { Lightbulb, Users, LineChart, Search, Star, PenTool, BarChart3, Handshake } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CareerPage() {
    
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // Scroll progress for the vertical line
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const processSteps = [
        { title: "Discovery:", desc: "We start by understanding your goals and challenges. This helps us align our expertise.", icon: <Search size={30} />, align: "right" },
        { title: "Strategy:", desc: "We develop a tailored strategy that outlines the best approach for your project.", icon: <Star size={30} />, align: "left" },
        { title: "Design & Development:", desc: "We turn insights into engaging designs and build functional websites.", icon: <PenTool size={30} />, align: "right" },
        { title: "Implementation:", desc: "We carefully implement and integrate solutions to meet your expectations.", icon: <BarChart3 size={30} />, align: "left" },
        { title: "Optimization & Support:", desc: "After launch, we continue to refine and support your project.", icon: <Handshake size={30} />, align: "right" }
    ];

    return (
        <div className="bg-dark text-white overflow-hidden" style={{marginTop:"-10px"}} >
            
            {/* --- SECTION 1: HERO (Talent Meets Opportunity) --- */}
            <section className="container py-5 min-vh-100 d-flex align-items-center">
                <div className="row align-items-center">
                    <div className="col-md-6" data-aos="fade-right">
                        <h1 className="display-3 fw-bold mb-4">
                            Where Talent Meets <br />
                            <span className="text-warning">Opportunity!</span>
                        </h1>
                        <p className="lead opacity-75 mb-4">
                            Join our dynamic team and take your career to the next level. Discover exciting opportunities where your skills and creativity can thrive.
                        </p>
                        <button className="btn btn-outline-warning rounded-pill px-4 py-2 border-2 fw-bold">
                            Lets Connect
                        </button>
                    </div>
                    <div className="col-md-6 text-center" data-aos="zoom-in">
                        {/* Globe Image/SVG */}
                        <img src="https://i.pinimg.com/originals/46/1f/da/461fdab9031a7598237acc456d1fee27.png" 
                             alt="Globe" className="img-fluid w-75 opacity-50" />
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: WHY JOIN US (White Cards) --- */}
            <section className="bg-light py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        {[
                            { title: "Innovative Projects", icon: <Lightbulb />, color: "#4FD1C5", desc: "Join us in shaping the future of design with projects that challenge creativity." },
                            { title: "Supportive Environment", icon: <Users />, color: "#F687B3", desc: "Be part of a team that values collaboration and supports your journey." },
                            { title: "Learning & Growth", icon: <LineChart />, color: "#F6AD55", desc: "Unlock your potential with opportunities for ongoing skill development." }
                        ].map((item, i) => (
                            <div key={i} className="col-md-4" data-aos="fade-up" data-aos-delay={i * 200}>
                                <div className="card border-0 shadow-sm p-4 rounded-4 h-100">
                                    <div className="rounded-3 d-inline-flex p-3 mb-4" style={{ backgroundColor: item.color, color: "#white" }}>
                                        {React.cloneElement(item.icon, { size: 35, color: "white" })}
                                    </div>
                                    <h4 className="fw-bold text-dark">{item.title}</h4>
                                    <p className="text-secondary small">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}