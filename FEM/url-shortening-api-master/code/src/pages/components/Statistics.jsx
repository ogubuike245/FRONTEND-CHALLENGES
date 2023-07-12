import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const Statistics = () => {
  const cardData = [
    {
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      icon: "../../../public/images/icon-brand-recognition.svg",
    },
    {
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: "../../../public/images/icon-detailed-records.svg",
    },
    {
      title: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      icon: "../../../public/images/icon-fully-customizable.svg",
    },
  ];

  return (
    <section className="statistics container">
      <Heading />

      <div className="cards">
        {cardData.map((card, index) => (
          <Card key={index} cardData={card} />
        ))}
      </div>
    </section>
  );
};

export default Statistics;
