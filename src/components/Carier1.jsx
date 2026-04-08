import React, { Component } from "react";
// import { Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import '../App.css'

export default class Carier1 extends Component {
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
                      Designing Intuitive
                      <br />
                        Digital Interfaces
                    </h1>

                    <p>
                       Join our dynamic team and take your career to the next level. Discover exciting 
                       opportunities where your skills and creativity can thrive.
                    </p>
                    <button className="btn1" onClick={()=>{
                 setShow(true) 
                 setTimeout(()=>{
                    setShow(false)
                    },20);
                    }}>Case Studies</button>
                    
                </div>

                <div data-aos="fade-left" className="right13">
                    {/* yaha tum apni image lagana */}
                   
                    <button className="btn2" >Services</button>
                    {/* {show&& <Navigate to={"/Services"} />} */}
                </div>
                <button className="btn3">Let's Talk </button>
                {/* {show&& <Navigate to={"/Contact"} />} */}
            </section>
            <div className="para2" data-fade="fade-top">
                <h1>We’re a dedicated team of UI UX professionals, committed to delivering research-driven,
                     user-centered solutions that transform businesses and inspire users. Our tailored design process, 
                     aligns with your goals and industry needs, ensuring a perfect balance of aesthetics and functionality. 
                     Let’s build something amazing together!</h1>
            </div>
            </>
        );
    }
}
