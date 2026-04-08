import React from "react";
import "../App.css";

export default function CaseStudies() {
    return (
        <>
            <div className="hero12">

                <div className="left12">
                    <h1>
                        Showcasing Our <br /> Finest Case Studies
                    </h1>

                    <p>
                        Take a look at some of our favorite projects, where creativity meets
                        purpose. See how we bring ideas to life with impactful digital
                        experiences.
                    </p>
                </div>

                <div className="right12">
                    <img src="https://i.pinimg.com/originals/46/1f/da/461fdab9031a7598237acc456d1fee27.png" alt="sphere" />
                    <button className="">Let’s Connect</button>
                </div>

            </div>
            
            {/* CASE STUDIES */}
            <section className="cases">
                <CaseCard
                    tags={["UI/UX Design"]}
                    title="Interact"
                    desc="Turn all your calls into AI-powered conversation intelligence tools"
                    img="https://th.bing.com/th/id/OIP.2KdIVTFvDAooXiW4njayTAHaE8?w=250&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                />

                <CaseCard
                    tags={["UI/UX Design", "Website Development"]}
                    title="Festive Folks"
                    desc="Take your shopping fashion needs to the next level"
                    img="https://th.bing.com/th/id/OIP.LINk34V2_ZZbL2QGjah3MgHaE7?w=279&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                />

                <CaseCard
                    tags={["Website Development", "UI/UX Design"]}
                    title="TWChallenge"
                    desc="Cultivating a culture of engagement"
                    img="https://th.bing.com/th/id/OIP.MMRAoUr4eNjF7GsIu94U_AHaE7?w=288&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                />

                <CaseCard
                    tags={["Branding", "UI/UX Design"]}
                    title="Flip Folder"
                    desc="Dive into the hassle‑free world of sheet music"
                    img="https://iesmartsystems.com/wp-content/uploads/2023/07/laptop-imaging-scaled.jpg"
                />

                <CaseCard
                    full
                    tags={["UI/UX Design", "Website Development"]}
                    title="SPV Mortgages"
                    desc="Maximizing tax efficiency with SPV limited company mortgages"
                    img="https://farm1.staticflickr.com/890/27665175538_893cc1e7b5_c.jpg"
                />
            </section>
        </>
    );
}

function CaseCard({ tags, title, desc, img, full }) {
    return (
        <div className={`case ${full ? "full" : ""}`}>
            <div className="tags">
                {tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                ))}
            </div>
            <h3>
                {title} <span>↗</span>
            </h3>
            <p>{desc}</p>
            <div className="case-img">
                <img src={img} alt={title} />
            </div>
        </div>
    );
}

