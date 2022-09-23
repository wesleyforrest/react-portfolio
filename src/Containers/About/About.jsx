import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div>
        <h2 className="about-section__header underline">About</h2>
      </div>
      <img className="about-section__headshot" src="./Images/me3.jpg" alt="" />
      <p className="about-section__about-text">
        An experienced and results focused Prince2 Certified Project Manager and
        experienced Business Analyst, who is now re-training as a full stack
        developer. A proactive and conscientious individual with excellent
        communications skills. Able to quickly adapt and add value to new
        challenges, with a focus towards tangible business process improvement
        through the effective use of technology. With proven Project and IT
        implementation management experience of projects ranging from £500k to
        £6m in budget, gained predominantly within the Media, Retail,
        Consultancy and Banking Sector.
      </p>
    </div>
  );
};

export default About;