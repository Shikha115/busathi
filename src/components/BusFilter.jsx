import React, { useState } from "react";
import { Link } from "react-router-dom";

function BusFilter() {
    const [fromValue, setFromValue] = useState("");
    const [showFromBox, setShowFromBox] = useState(false);
    const [ToValue, setToValue] = useState("");
    const [showToBox, setShowToBox] = useState(false);
    const [fromLocation, setFromLocation] = useState([
      {
        name: "Salem New Bus Stand",
        text: "Salem, Tamil Nadu",
      },
      {
        name: "Tirunelveli Bus Stand",
        text: "Tirunelveli, Tamil Nadu",
      },
      {
        name: "Karaikudi Bus Stand",
        text: "Karaikudi, Tamil Nadu",
      },
      {
        name: "Thoothukudi Bus Stand",
        text: "Thoothukudi, Tamil Nadu",
      },
      {
        name: "Thanjavur Bus Stand",
        text: "Thanjavur, Tamil Nadu",
      },
      {
        name: "Tirupur Bus Stand",
        text: "Tirupur, Tamil Nadu",
      },
      {
        name: "Vellore Bus Stand",
        text: "Vellore, Tamil Nadu",
      },
      {
        name: "Bhopal New Market",
        text: "Bhopal, Madhya Pradesh",
      },
      {
        name: "Karaikal Bus Stand",
        text: "Karaikal, Puducherry",
      },
      {
        name: "New Tehri",
        text: "Tehri, Uttarakhand",
      },
      {
        name: "Tenkasi Bus Stand",
        text: "Tenkasi, Tamil Nadu",
      },
      {
        name: "Newai",
        text: "Newai, Rajasthan",
      },
      {
        name: "Newasa Phata",
        text: "Newasa, Maharashtra",
      },
      {
        name: "New Sangavi",
        text: "Pune, Maharashtra",
      },
      {
        name: "Kumbakonam Bus Stand",
        text: "Kumbakonam, Tamil Nadu",
      },
      {
        name: "Rajapalayam Bus Stand",
        text: "Rajapalayam, Tamil Nadu",
      },
      {
        name: "New Nallakunta",
        text: "Hyderabad, Telangana",
      },
      {
        name: "Kundapur Bus Stand",
        text: "Kundapur, Karnataka",
      },
      {
        name: "Dlf Newtown",
        text: "Bangalore, Karnataka",
      },
      {
        name: "New Thippasandra",
        text: "Bangalore, Karnataka",
      },
    ]);
  return (
    <section className="home-book gray-bg py-5 mb-65">
      <div className="book-overlay"></div>
      <div className="container">
        <div className="title">
          <h4>Bus Khoj, Safar Shuru</h4>
          <p>
            Explore a world of travel possibilities. Uncover the best bus routes
            with our intuitive search feature. Simply enter your travel details,
            and let Busathi guide you to your next destination hassle-free.
          </p>
        </div>
        <form className="form">
          <div className="get-booking-detail">
            <div className="box">
              <label>From</label>

              <input
                type="text"
                className="form-control"
                value={fromValue}
                onChange={(e) => {
                  setFromValue(e.target.value);
                  setShowFromBox(true);
                }}
              />
              {showFromBox && fromValue && (
                <ul className="location-box">
                  {fromLocation
                    .filter((q) =>
                      q?.name.toUpperCase().includes(fromValue.toUpperCase())
                    )
                    .map((item, i) => {
                      return (
                        <li
                          className="box-inner pointer"
                          key={i}
                          onClick={() => {
                            setFromValue(item.name);
                            setShowFromBox(false);
                          }}
                        >
                          <i className="fa-solid fa-location-dot primary"></i>
                          <div>
                            <h6 className="mb-0">{item.name}</h6>
                            <p>{item.text}</p>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              )}
            </div>
            <div className="box">
              <label>To</label>

              <input
                type="text"
                className="form-control"
                value={ToValue}
                onChange={(e) => {
                  setToValue(e.target.value);
                  setShowToBox(true);
                }}
              />
              {showToBox && ToValue && (
                <ul className="location-box">
                  {fromLocation
                    .filter((q) =>
                      q?.name.toUpperCase().includes(ToValue.toUpperCase())
                    )
                    .map((item, i) => {
                      return (
                        <li
                          className="box-inner pointer"
                          key={i}
                          onClick={() => {
                            setToValue(item.name);
                            setShowToBox(false);
                          }}
                        >
                          <i className="fa-solid fa-location-dot primary"></i>
                          <div>
                            <h6 className="mb-0">{item.name}</h6>
                            <p>{item.text}</p>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              )}
            </div>
            <div className="box">
              <label>Date</label>

              <input type="date" className="form-control" />
            </div>
          </div>
          <Link to="/BusDetail" className="btn btn-primary btn-custom">
            Search Buses
          </Link>
        </form>
      </div>
    </section>
  );
}

export default BusFilter;
