import React, { useState } from "react";
import PageBanner from "./PageBanner";
import { images } from "../Images/images";
import SafetyAlarm from "./SafetyAlarm";
import EmergencyStop from "./EmergencyStop";

function SafetyFeature() {
  const [tabs, setTabs] = useState([
    {
      name: "Safety alarm",
      tab: 1,
      active: true,
    },
    {
      name: "Emergency stop",
      tab: 2,
      active: false,
    },
  ]);
  const [currentTab, setCurrentTab] = useState(1);
  const handleTab = (index) => {
    const temp = tabs.map((item, i) => {
      if (i == index) {
        item.active = true;
        setCurrentTab(item.tab);
      } else {
        item.active = false;
      }
      return item;
    });
    setTabs([...temp]);
  };
  return (
    <main>
      {/* ==================================================================================== */}
      <PageBanner img={images.bus_9} title="Safety Features" />
      {/* ==================================================================================== */}
      <section className="safety-features mb-65">
        <div className="container">
          <ul className="tabs mb-4">
            {tabs.map((item, i) => {
              return (
                <li
                  className={item.active ? "active" : ""}
                  key={i}
                  onClick={() => handleTab(i)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
          <div className="tab-content">
            {currentTab === 1 ? (
              <SafetyAlarm />
            ) : currentTab === 2 ? (
              <EmergencyStop />
            ) : (
              <p>Nothing to show</p>
            )}
          </div>
          <div className="all-bus-location mt-5">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1ZU5kq3sBIOcPg6ECqn6SPMq97Ufg50A&ehbc=2E312F"
            width="100%"
            height="100%"
          ></iframe>
        </div>
        </div>
      </section>
      {/* ==================================================================================== */}

      {/* ==================================================================================== */}
    </main>
  );
}

export default SafetyFeature;
