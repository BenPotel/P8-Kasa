import React from "react";
import "./footer.css";
import Footerlogo from "../../assets/kasa-footer.svg";

const Footer = () => {
  return (
    <footer>
      <img src={Footerlogo} alt="logo Kasa" />
      <p>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
