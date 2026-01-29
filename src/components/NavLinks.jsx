import React, { Component } from "react";

export default class NavLinks extends Component {
  render() {
    return (
      <ul className="footer-links">
        {this.props.links.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
