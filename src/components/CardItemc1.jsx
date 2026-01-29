import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
    const { icon, title, desc, bg, delay } = this.props;

    return (
      <div
        className="card-box"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div className={`icon ${bg}`}>{icon}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  }
}
