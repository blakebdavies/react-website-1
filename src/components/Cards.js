import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> WHAT WE DO</h1>
      <p>
        Social content. Social strategy. Social broadcasting. Social (platform)
        management. Paid social. Talks about social. Social gatherings.
      </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-4.jpg"
              text="We create stories worth sharing by harnessing the power of proprietary data to produce and distribute content that gets results."
              label="Content Creation"
              path="/work"
            />
            <CardItem
              src="images/img-5.jpg"
              text="We do a lot of strategy. Social strategy, platform strategy, paid strategy, desk-beers strategy."
              label="Strategy"
              path="/work"
            />
            <CardItem
              src="images/img-3.jpg"
              text="We make shopping more human by guiding consumers to brands they’ll love with standout visuals, easier navigation and helpful interactions."
              label="Retail"
              path="/work"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="For some clients, we work hand-in-hand with media agencies. For others, we run the paid in-house. In both cases, we’re all over it."
              label="Paid Advertising"
              path="/work"
            />
            <CardItem
              src="images/img-7.jpg"
              text="We bring TV-level production and innovation to Facebook Lives, Instagram Lives, Tiwtter Lives and all the other Lives."
              label="Social Broadcasting"
              path="/work"
            />
            <CardItem
              src="images/img-6.jpg"
              text="Our designers are social designers. They make things people want to share, conceptualize immersive environments, and build integrated campaigns."
              label="Creative and Design"
              path="/work"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
