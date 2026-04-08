

import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Install react-icons for this

export default function Career1() {
    const teamMembers = [
        {
            id: 1,
            name: "Mohsin Khan",
            role: "Co-Founder & CEO",
            image: "path-to-mohsin-image.jpg",
            linkedin: "#",
            isActive: true // First card blue icon ke liye
        },
        {
            id: 2,
            name: "Abhishek Joshi",
            role: "Co-Founder & CTO",
            image: "path-to-abhishek-image.jpg",
            linkedin: "#",
            isActive: false
        },
        {
            id: 3,
            name: "Amit Bisen",
            role: "Technical Lead",
            image: "path-to-amit-image.jpg",
            linkedin: "#",
            isActive: false
        },
    ]
    const OtherName =[
          {
            id: 3,
            name: "Amit Bisen",
            role: "Technical Lead",
            image: "path-to-amit-image.jpg",
            linkedin: "#",
            isActive: false
        },
        {
            id: 3,
            name: "Amit Bisen",
            role: "Technical Lead",
            image: "path-to-amit-image.jpg",
            linkedin: "#",
            isActive: false
        },
        {
            id: 3,
            name: "Amit Bisen",
            role: "Technical Lead",
            image: "path-to-amit-image.jpg",
            linkedin: "#",
            isActive: false
        },
        {
            id: 3,
            name: "Amit Bisen",
            role: "Technical Lead",
            image: "path-to-amit-image.jpg",
            linkedin: "#",
            isActive: false
        },
        {
            id: 3,
            name: "Amit Bisen",
            role: "Technical Lead",
            image: "path-to-amit-image.jpg",
            linkedin: "#",
            isActive: false
        },
        {
            id: 3,
            name: "Amit Bisen",
            role: "Technical Lead",
            image: "path-to-amit-image.jpg",
            linkedin: "#",
            isActive: false
        },
        {
            id: 3,
            name: "Amit Bisen",
            role: "Technical Lead",
            image: "path-to-amit-image.jpg",
            linkedin: "#",
            isActive: false
        },
        {
            id: 3,
            name: "Amit Bisen",
            role: "Technical Lead",
            image: "path-to-amit-image.jpg",
            linkedin: "#",
            isActive: false
        },
        {
            id: 3,
            name: "Amit Bisen",
            role: "Technical Lead",
            image: "path-to-amit-image.jpg",
            linkedin: "#",
            isActive: false
        },
        {
            id: 3,
            name: "Amit Bisen",
            role: "Technical Lead",
            image: "path-to-amit-image.jpg",
            linkedin: "#",
            isActive: false
        },
        {
            id: 3,
            name: "Amit Bisen",
            role: "Technical Lead",
            image: "path-to-amit-image.jpg",
            linkedin: "#",
            isActive: false
        },
    ]

    return (
        <>
            <div className="hero3">

                {/* LEFT */}
                <div className="left3">
                    <h1 style={{ fontSize: "58px" }}>
                        <div >Crafting Experiences</div>
                        <div style={{ color: '#ffb400' }}>Not Just Designs</div>
                    </h1>

                    <p>
                        We bring ideas to life through engaging digital experiences. Collaborating closely with our clients, we create impactful designs that go beyond aesthetics, focusing on connections and real results.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="right3">
                    <img src="https://i.pinimg.com/originals/46/1f/da/461fdab9031a7598237acc456d1fee27.png" alt="sphere" />

                    <button className="glow-btn">
                        Lets Connect
                    </button>
                </div>

                /</div>
            <section className="about-section">
                <div className="container">
                    <h3 className="sub-heading">Who we are</h3>
                    <h2 className="main-heading">
                        <span className="highlight">About</span> FIFILO Designs
                    </h2>
                    <p className="description">
                        Founded by the visionary duo Mohsin Khan and Abhishek Joshi, FIFILO Designs
                        is where creativity meets technology. Inspired by our roots in design
                        innovation, we infuse every project with a unique blend of artistic flair
                        and strategic insight. Whether you're launching a startup or enhancing an
                        established brand, we transform your vision into memorable digital
                        experiences. From pixel-perfect UI/UX design to advanced web development
                        and impactful digital marketing, we create solutions that not only work
                        but truly shine.
                    </p>
                </div>
            </section>

            <div className="process-section">
                <div className="container">
                    <div className="header">
                        <p>Process</p>
                        <h2>Our Work <span className="highlight">Process</span></h2>
                    </div>

                    <div className="timeline">
                        {/* Step 1: Discovery */}
                        <div className="timeline-item item-left">
                            <div className="timeline-icon-wrapper">
                                <span style={{ fontSize: '24px' }}>✦</span>
                            </div>
                            <div className="timeline-content">
                                <div className="content-box">
                                    <h4>Discovery:</h4>
                                    <p>
                                        We start by understanding your goals and challenges. This helps us align our expertise in design, development, and digital marketing with your vision.
                                    </p>
                                </div>
                            </div>
                            <div style={{ width: '42%' }}></div> {/* Spacer for alignment */}
                        </div>

                        {/* Step 2: Strategy */}
                        <div className="timeline-item item-right">
                            <div className="timeline-icon-wrapper">
                                <span style={{ fontSize: '20px', color: '#ffc107' }}>🔍</span>
                            </div>
                            <div className="timeline-content">
                                <div className="content-box">
                                    <h4>Strategy:</h4>
                                    <p>
                                        We develop a tailored strategy that outlines the best approach for your project, whether it's a new design, a website overhaul, or a marketing campaign.
                                    </p>
                                </div>
                            </div>
                            <div style={{ width: '42%' }}></div> {/* Spacer for alignment */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="process-section">
                <div className="container">
                    {/* Pichle steps (Discovery/Strategy) ke baad yahan se continue karein */}

                    <div className="timeline">
                        {/* Step 3: Design & Development (Right Side) */}
                        <div className="timeline-item item-left">
                            <div className="timeline-icon-wrapper active">
                                {/* Pen/Nib Icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z" /><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="m2 2 5 5" /><path d="m11 11 1 1" /></svg>
                            </div>
                            <div className="timeline-content">
                                <div className="content-box">
                                    <h4>Design & Development:</h4>
                                    <p>
                                        In this phase, we turn insights into engaging designs and build functional, user-friendly websites. Our development team ensures that everything works seamlessly.
                                    </p>
                                </div>
                            </div>
                            <div style={{ width: '42%' }}></div>
                        </div>

                        {/* Step 4: Implementation (Left Side) */}
                        <div className="timeline-item item-right">
                            <div className="timeline-icon-wrapper">
                                {/* Board/Presentation Icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="3" rx="2" /><path d="M9 21h6" /><path d="M12 15v6" /></svg>
                            </div>
                            <div className="timeline-content">
                                <div className="content-box">
                                    <h4>Implementation:</h4>
                                    <p>
                                        We carefully implement and integrate the solutions, making sure they meet your expectations and deliver the results you need.
                                    </p>
                                </div>
                            </div>
                            <div style={{ width: '42%' }}></div>
                        </div>

                        {/* Step 5: Final/Support (Center Icon) */}
                        <div className="timeline-item last-item">
                            <div className="timeline-icon-wrapper">
                                {/* Handshake Icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2 5-5" /><path d="M18 9a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" /><path d="M10 7h4" /></svg>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Step 6: Optimization & Support (Final Step) */}
            <div className="timeline-item item-left active-step">
                <div className="timeline-icon-wrapper highlighted">
                    {/* Handshake Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                </div>
                <div className="timeline-content">
                    <div className="content-box">
                        <h4>Optimization & Support:</h4>
                        <p>
                            After launch, we continue to refine and support your project to ensure it performs optimally and adapts to any evolving needs.
                        </p>
                    </div>
                </div>
                <div style={{ width: '42%' }}></div>
            </div>

            <section className="team-section">
                <div className="team-container">
                    {/* Left Side Header */}
                    <div className="team-header">
                        <p className="sub-title">Team</p>
                        <h2 className="main-title">
                            Our <span className="highlight">Team,</span> <br />
                            Your Design Partners
                        </h2>
                        <p className="description">
                            Revolutionizing digital landscapes with intuitive design,
                            we craft seamless user experiences that transcend
                        </p>
                    </div>

                    {/* Right Side Cards Grid */}
                    <div className="team-grid ">
                        <div>
                            {teamMembers.map((member) => (
                                <div className="team-card" key={member.id}>
                                    <div className="image-container">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                    <div className="card-footer">
                                        <div className="info">
                                            <h4>{member.name}</h4>
                                            <p>{member.role}</p>
                                        </div>
                                        <a href={member.linkedin} className={`linkedin-icon ${member.isActive ? 'active' : ''}`}>
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}