import React, { useState } from "react";
import Feature from "./Feature";

const TabsComponent = () => {
  const tabContent = [
    {
      imageSrc: "../../public/images/illustration-features-tab-1.svg",
      title: "Bookmark in One Click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
    },
    {
      imageSrc: "../../public/images/illustration-features-tab-2.svg",
      title: "Intelligent Search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
      imageSrc: "../../public/images/illustration-features-tab-3.svg",
      title: "Share Your Bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];
  const tabList = [
    {
      title: "Simple Bookmarking",
    },
    {
      title: "Speedy Searching",
    },
    {
      title: "Easy Sharing",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="tabs-area">
      <ul className="tabs-list">
        {tabList.map((content, index) => (
          <li
            key={index}
            className={index === activeTab ? "active" : ""}
            onClick={() => handleTabClick(index)}
          >
            {content.title}
          </li>
        ))}
      </ul>

      {tabContent.map((content, index) => (
        <Feature
          key={index}
          imageSrc={content.imageSrc}
          title={content.title}
          description={content.description}
          isActive={index === activeTab}
        />
      ))}
    </section>
  );
};

export default TabsComponent;
