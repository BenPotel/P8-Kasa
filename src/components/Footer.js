import React from "react";
import Footerlogo from "../assets/Kasa-Footer.svg";

const Footer = () => {
  return (
    <footer>
      <img src={Footerlogo} alt="logo Kasa" />
      <p>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
