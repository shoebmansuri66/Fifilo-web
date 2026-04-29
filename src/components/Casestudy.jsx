import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../App.css";

// --- MAIN COMPONENT ---
export default function CaseStudies() {
    return (
        <div className="case-studies-page">
            {/* HERO SECTION */}
            <div className="hero12 w-100 px-4 py-5  bg-dark text-white" style={{marginTop:"-10px"}}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* LEFT CONTENT */}
                        <div className="col-12 col-md-6 mb-4 mb-md-0">
                            <h1 className="fw-bold text-warning display-5">
                                Showcasing Our <br />
                                <span className="text-white">Finest Case Studies</span>
                            </h1>
                            <p className="mt-3 opacity-75 lead">
                                Take a look at some of our favorite projects, where creativity meets
                                purpose. See how we bring ideas to life with impactful digital
                                experiences.
                            </p>
                        </div>

                        {/* RIGHT CONTENT (Image + Button) */}
                        <div className="col-12 col-md-6 text-center d-flex flex-column align-items-center">
                            <img
                                className="img-fluid w-75 mb-4"
                                src="https://i.pinimg.com/originals/46/1f/da/461fdab9031a7598237acc456d1fee27.png"
                                alt="sphere"
                            />
                            <button
                                className="btn px-5 py-3 rounded-pill fw-bold"
                                style={{
                                    background: "transparent",
                                    color: "gold",
                                    border: "2px solid gold",
                                    maxWidth: "300px",
                                    width: "100%"
                                }}
                            >
                                Let’s Connect
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CASE STUDIES GRID */}
            <section className="container py-5">
                <div className="row g-4">
                    {/* Full Width Card */}
                    <div className="col-12">
                        <CaseCard
                            tags={["UI/UX Design", "Website Development", "Mobile App"]}
                            title="Mychoize"
                            desc="India's largest Car Rental Company Owned by ORIX"
                            img="case-studies-05.png"
                            full
                        />
                    </div>

                    {/* Half Width Cards */}
                    <div className="col-12 col-md-6">
                        <CaseCard
                            tags={["Development", "UI/UX Design"]}
                            title="Interact"
                            desc="Turn all your calls into AI-powered conversation intelligence tools"
                            img="cs-1.png"
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <CaseCard
                            tags={["Branding", "UI/UX Design"]}
                            title="Interact"
                            desc="Turn all your calls into AI-powered conversation intelligence tools"
                            img="cs-2.png"
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <CaseCard
                            tags={["UI/UX Design"]}
                            title="AI Tools"
                            desc="Modernizing communication with intelligence"
                            img="https://th.bing.com/th/id/OIP.2KdIVTFvDAooXiW4njayTAHaE8?w=250&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <CaseCard
                            tags={["Website Development"]}
                            title="Festive Folks"
                            desc="Take your shopping fashion needs to the next level"
                            img="https://th.bing.com/th/id/OIP.LINk34V2_ZZbL2QGjah3MgHaE7?w=279&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                        />
                    </div>

                    {/* Last Full Width Card */}
                    <div className="col-12">
                        <CaseCard
                            tags={["UI/UX Design", "Website Development"]}
                            title="SPV Mortgages"
                            desc="Maximizing tax efficiency with SPV limited company mortgages"
                            img="case-studies-03.png"
                            full
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

// --- HELPER COMPONENT (In the same file) ---
function CaseCard({ tags, title, desc, img, full }) {
    return (
        <div className={`p-4 rounded-4 shadow-sm h-100 ${full ? 'bg-light border-0' : 'border'}`} 
             style={{ backgroundColor: '#f8f9fa' }}>
            <div className="mb-3">
                {tags.map((tag, i) => (
                    <span key={i} className="badge rounded-pill bg-dark text-white me-2 px-3 py-2 fw-light" style={{ fontSize: '12px' }}>
                        {tag}
                    </span>
                ))}
            </div>

            <h3 className="fw-bold d-flex align-items-center justify-content-between">
                {title} <span className="text-warning" style={{ cursor: "pointer" }}>↗</span>
            </h3>

            <p className="text-muted">{desc}</p>

            <div className="mt-4 overflow-hidden rounded-3 shadow-sm">
                <img 
                    src={img} 
                    alt={title} 
                    className="img-fluid w-100" 
                    style={{ minHeight: full ? "400px" : "250px", objectFit: "cover" }}
                />
            </div>
        </div>
    );
}