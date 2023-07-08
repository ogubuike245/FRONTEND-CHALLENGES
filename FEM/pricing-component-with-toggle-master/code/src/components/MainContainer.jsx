import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import Pricing from "./Pricing";

const MainContainer = () => {
  const [isAnnually, setIsAnnually] = useState(false);

  const cardData = [
    {
      title: "Basic",
      price: isAnnually ? "199.99" : "19.99",
      storage: "500 GB",
      users: "2",
      sendLimit: "3 GB",
    },
    {
      title: "Professional",
      price: isAnnually ? "249.99" : "24.99",
      storage: "1 TB",
      users: "5",
      sendLimit: "10 GB",
    },
    {
      title: "Master",
      price: isAnnually ? "399.99" : "39.99",
      storage: "2 TB",
      users: "10",
      sendLimit: "20 GB",
    },
  ];

  const handleToggle = () => {
    setIsAnnually(!isAnnually);
  };

  return (
    <>
      <ToggleSwitch isAnnually={isAnnually} onToggle={handleToggle} />
      <Pricing cardData={cardData} />
    </>
  );
};

export default MainContainer;
