import React from "react";
import footer from "../api/Footer.json";

const contact = footer;

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container grid grid-three-cols">
        {contact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{icon}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
