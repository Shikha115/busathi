import React, { useState } from "react";
import Header from "./Header";
import { images } from "../Images/images";
import { Link } from "react-router-dom";

function BusDetail() {
  const [busDetails, setBusDetails] = useState([
    {
      no: "706",
      name: "himachal",
      availability: "16:30 - 17:30",
      time: "01:45",
      date: "25 Sep, 2023",
      fare: "100",
      stop: "himachal stop",
    },
    {
      no: "706",
      name: "himachal",
      availability: "16:30 - 17:30",
      time: "01:45",
      date: "25 Sep, 2023",
      fare: "100",
      stop: "himachal stop",
    },
    {
      no: "706",
      name: "himachal",
      availability: "16:30 - 17:30",
      time: "01:45",
      date: "25 Sep, 2023",
      fare: "100",
      stop: "himachal stop",
    },
    {
      no: "706",
      name: "himachal",
      availability: "16:30 - 17:30",
      time: "01:45",
      date: "25 Sep, 2023",
      fare: "100",
      stop: "himachal stop",
    },
  ]);
  return (
    <>
      <Header />
      <main>
        <section className="bus-detail mtb-65">
          <div className="container">
            <h2 className="title fw-bold mb-4">Delhi to Panipat</h2>
            {busDetails.map((item, i) => {
              return (
                <div className="box" key={i}>
                  <img src={images.busGif} alt="" />
                  <div className="outer-box">
                    <ul className="box-inner">
                      <li>
                        <h6>Bus Number</h6>
                        <p>{item.no}</p>
                      </li>
                      <li>
                        <h6>Bus Name</h6>
                        <p>{item.name}</p>
                      </li>
                      <li>
                        <h6>Availability</h6>
                        <p>{item.availability}</p>
                      </li>
                      <li>
                        <h6>Time</h6>
                        <p>{item.time} hrs</p>
                      </li>
                      <li>
                        <h6>Date</h6>
                        <p>{item.date}</p>
                      </li>
                      <li>
                        <h6>Fare</h6>
                        <p>₹{item.fare}</p>
                      </li>
                      <li>
                        <h6>Nearest Stop</h6>
                        <p>{item.stop}</p>
                      </li>
                    </ul>
                    <div className="btns">
                      <Link
                        to="/BusViewDetail"
                        className="btn btn-primary btn-custom"
                      >
                        View Detail
                      </Link>
                      <Link to="#" className="btn btn-primary btn-custom">
                        Share GPS
                      </Link>
                      <Link
                        to="/TrackYourBus"
                        className="btn btn-primary btn-custom"
                      >
                        Track
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default BusDetail;
