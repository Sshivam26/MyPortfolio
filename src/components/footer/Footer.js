import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import SocialMedia from "../../components/socialMedia/SocialMedia";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
         
          {/* <SocialMedia/> */}
        </p>
        
      </Fade>
    </div>
  );
}