import React from "react";
import Hero from "./Hero";
import Navigation from "./Navigation";
import FormInput from "./FormInput";

const Header = () => {
  return (
    <header>
      <Navigation />
      <Hero />
      <FormInput />
    </header>
  );
};

export default Header;
