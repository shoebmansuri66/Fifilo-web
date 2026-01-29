import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../App.css'

export default class Hero extends Component {
    componentDidMount() {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }

    render() {
        return (
          <>
            <section>
                <div data-aos="fade-right">
                    <h1 style={{color:"#e3a804"}}>
                        Where Talent Meets
                        <br />
                        Opportunity!
                    </h1>

                    <p>
                       Join our dynamic team and take your career to the next level. Discover exciting 
                       opportunities where your skills and creativity can thrive.
                    </p>
                </div>

                <div data-aos="fade-left" className="right">
                    {/* yaha tum apni image lagana */}
                    <img src="https://i.pinimg.com/originals/46/1f/da/461fdab9031a7598237acc456d1fee27.png" alt="hero" />
                    <button>Lets Connect</button>
                </div>
            </section>
           
          </>
        );
    }
}
