import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, description, image }) => {
  const [show, setShow] = useState(true);
  const toogle = () => {
    setShow(!show);
  };

  return (
    <div className="image-container">
      <div className="image-hover-overlay" onClick={toogle}>
        <img src={image} className="image" />
        <div className="middle">
          <div className={show ? "text" : "text-move"}>{title}</div>
          <div className="description">
            <p className={show ? "hide-description" : ""}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
