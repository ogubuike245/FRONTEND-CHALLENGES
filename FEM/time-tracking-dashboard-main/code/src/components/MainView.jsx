import React, { useState } from "react";
import Item from "./Item.jsx";

import data from "../data.json";

const MainView = () => {
  const [timeFrame, setTimeFrame] = useState("daily");

  const handleTimeFrameSwitch = (selectedTimeFrame) => {
    setTimeFrame(selectedTimeFrame);
  };

  return (
    <section className="wrapper">
      <div className="profile">
        <article className="user-section">
          <div className="info">
            <div className="user-avatar">
              <img src="/images/image-jeremy.png" alt="" />
            </div>

            <div className="user-name">
              <p>Report for</p>
              <h1>Jeremy Robson</h1>
            </div>
          </div>
          <div className="filter">
            <ul>
              <li
                className={timeFrame === "daily" ? "active" : ""}
                onClick={() => handleTimeFrameSwitch("daily")}
              >
                Daily
              </li>
              <li
                className={timeFrame === "weekly" ? "active" : ""}
                onClick={() => handleTimeFrameSwitch("weekly")}
              >
                Weekly
              </li>
              <li
                className={timeFrame === "monthly" ? "active" : ""}
                onClick={() => handleTimeFrameSwitch("monthly")}
              >
                Monthly
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div className="activities">
        {data.map((item) => {
          return <Item item={item} timeFrame={timeFrame} key={item.title} />;
        })}
      </div>
    </section>
  );
};

export default MainView;
