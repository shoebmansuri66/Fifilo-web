import React, { Component } from "react";
import AOS from "aos";

export default class Carier2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      reviews: [
        {
          name: "Julius Homes",
          role: "Julien Chbib – CEO",
          text:
            "I had an opportunity to work with Fifilo Design Studio Team. One of the best UI UX designers team I have ever worked with.",
          img: "https://i.pravatar.cc/150?img=32",
        },
        {
          name: "Saulino Group",
          role: "Marc Saulino",
          text:
            "Fifilo Designs delivered amazing design and development services. Highly recommended.",
          img: "https://i.pravatar.cc/150?img=12",
        },
        {
          name: "Creative Studio",
          role: "Founder",
          text:
            "Professional team with deep UX understanding. The results were outstanding.",
          img: "https://i.pravatar.cc/150?img=45",
        },
      ],
    };

    AOS.init({ duration: 1000 });
  }

  nextSlide = () => {
    let lastIndex = this.state.reviews.length - 1;
    this.setState({
      index: this.state.index === lastIndex ? 0 : this.state.index + 1,
    });
  };

  prevSlide = () => {
    let lastIndex = this.state.reviews.length - 1;
    this.setState({
      index: this.state.index === 0 ? lastIndex : this.state.index - 1,
    });
  };

  render() {
    let { reviews, index } = this.state;
    let item = reviews[index];

    return (
      <section className="testimonial-section">
        <h2 data-aos="fade-up">
          Reviews from our <br /> Satified <i style={{color:"#f5b301"}}>Customers</i>
        </h2>

        <div className="testimonial-card" data-aos="zoom-in">
          <img src={item.img} alt="user" />
          <h4>{item.name}</h4>
          <p>{item.text}</p>
          <small>{item.role}</small>
        </div>

        <div className="slider-btns">
          <button onClick={this.prevSlide}>‹</button>
          <button onClick={this.nextSlide}>›</button>
        </div>
      </section>
    );
  }
}
