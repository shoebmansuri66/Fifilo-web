import React, { Component } from "react";

export default class Carier4 extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  toggleAccordion = (index) => {
    this.setState({
      openIndex: this.state.openIndex === index ? null : index
    });
  };

  render() {
    const services = [
      {
        title: "Branding",
        desc: "Power up your business with our branding services that command attention. We design standout brand identities that capture the essence of who you are."
        
      },
      {
        title: "UI UX Design",
        desc: "Ignite your digital experience with our UI/UX design services that grab attention and drive engagement. We create user-centric designs that not only look impressive but also deliver smooth, intuitive interactions."
      },
      {
        title: "Development",
        desc: "Turn your vision into reality with our web development services that excels in both form and function. We blend creativity with cutting-edge technology to build websites and apps that are visually stunning and exceptionally functional."
      },
      {
        title: "Digital Marketing",
        desc: "Supercharge your brand with our digital marketing services that drive real results. Our mission is to enhance your visibility, build meaningful connections, and turn clicks into customers."
      }
    ];

    return (
      <section className="services-section">
        <h5 className="small-title">Our Services</h5>
        <h2 className="main-title">
          <i style={{color:"#f5b301"}}>Services</i> we’re Offering
        </h2>

        {services.map((item, index) => (
          <div
            className="service-card"
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div
              className="service-header"
              onClick={() => this.toggleAccordion(index)}
            >
              <h3>{item.title}</h3>
              <span>{this.state.openIndex === index ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}</span>
            </div>

            {this.state.openIndex === index && (
              <p className="service-content">{item.desc}</p>
            )}
          </div>
        ))}
      </section>
    );
  }
}
