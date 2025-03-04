import { useState } from "react";
import { accordionData } from "./accordianLogic";
import "./Accordian.css";
import { Link } from "react-router-dom";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <div className="home-link-container">
        <Link to="/" className="home-link">Home</Link>
      </div>
      <h2 className="accordion-title">Accordion</h2>
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <div className="accordion-header-content">
              <h3 className="accordion-item-title">{item.title}</h3>
              <p className="accordion-toggle-icon">{activeIndex === index ? '-' : '+'}</p>
            </div>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <pre className="accordion-syntax">{item.syntax}</pre>
              <p className="accordion-description">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
