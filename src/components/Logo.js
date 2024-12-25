import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/ms1.png";

const Logo = () => {
  return (
    <Link
      to="/"
      className=" relative
     top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-lg text-cyan flex items-center
     "
    >
      <img width="20%" src={logoSvg} alt="CryptoBucks" />
      <span>Cerebrix</span>
    </Link>
  );
};

export default Logo;
