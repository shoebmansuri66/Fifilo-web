import React, { Component } from "react";

export default class Carier3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Thomas_Cook_Logo.svg",
        "https://mychoize.com/assets/img/logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/5b/Orix_logo.svg",
        "https://hoiro.co/logo.svg",
        "https://radonmedia.com/logo.png",
        "https://spvmarketing.com/logo.png",

        "https://curehub.in/logo.png",
        "https://bizowl.co.in/logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/8/89/UN_Women_Logo.svg",
        "https://remito.com/logo.png",
        "https://samhita.org/logo.png",
        "https://jwpepper.com/logo.png",

        "https://muziconnect.com/logo.png",
        "https://flipfolderapp.com/logo.png",
        "https://juliushomes.com/logo.png",
        "https://tribestays.com/logo.png",
        "https://oligo.org/logo.png",
        "https://ihc.org/logo.png",
      ],
    };
  }

  render() {
    return (
      <section className="clients-section">
        <p className="small-title">Trust they show</p>
        <h2>
          Our <i>Clients</i>
        </h2>

        <div className="clients-grid">
          {this.state.clients.map((logo, index) => (
            <div className="client-card" key={index}>
              <img src={logo} alt="client-logo" />
            </div>
          ))}
        </div>
      </section>
    );
  }
}
