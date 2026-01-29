import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardItem from "./CardItemc1.jsx";
import "../App.css";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          id: 1,
          icon: "💡",
          title: "Innovative and Impactful Projects",
          desc:
            "Join us in shaping the future of design with projects that challenge creativity and make a real difference.",
          bg: "bg-green",
          delay: 0,
        },
        {
          id: 2,
          icon: "🤝",
          title: "Supportive Environment",
          desc:
            "Be part of a team that values collaboration, fosters creativity, and supports your professional journey every step of the way.",
          bg: "bg-pink",
          delay: 200,
        },
        {
          id: 3,
          icon: "📈",
          title: "Continuous Learning & Growth",
          desc:
            "Unlock your potential with opportunities for ongoing learning, skill development, and career advancement.",
          bg: "bg-orange",
          delay: 400,
        },
      ],
    };
  }

  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  render() {
    return (
      <div className="cards-container">
        {this.state.cards.map((card) => (
          <CardItem
            key={card.id}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
            bg={card.bg}
            delay={card.delay}
          />
        ))}
      </div>
    );
  }
}
