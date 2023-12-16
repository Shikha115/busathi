import React, { useState } from "react";
import BusFilter from "./BusFilter";
import { images } from "../Images/images";
import { Link } from "react-router-dom";

function AllBuses() {
  const [busDetails, setBusDetails] = useState([
    {
      img: images.bus_12,
      no: "706",

      availability: "16:30 - 17:30",
      time: "01:45",
      date: "25 Sep, 2023",
      fare: "100",
    },
    {
      img: images.bus_1,
      no: "706",

      availability: "16:30 - 17:30",
      time: "01:45",
      date: "25 Sep, 2023",
      fare: "100",
    },
    {
      img: images.bus_2,
      no: "706",

      availability: "16:30 - 17:30",
      time: "01:45",
      date: "25 Sep, 2023",
      fare: "100",
    },
    {
      img: images.bus_3,
      no: "706",

      availability: "16:30 - 17:30",
      time: "01:45",
      date: "25 Sep, 2023",
      fare: "100",
    },
    {
      img: images.bus_4,
      no: "706",

      availability: "16:30 - 17:30",
      time: "01:45",
      date: "25 Sep, 2023",
      fare: "100",
    },
    {
      img: images.bus_5,
      no: "706",

      availability: "16:30 - 17:30",
      time: "01:45",
      date: "25 Sep, 2023",
      fare: "100",
    },
  ]);
  return (
    <main>
      <BusFilter />
      <section className="mb-65">
        <div className="container">
          {/* <h2 className="title fw-bold mb-4">Delhi to Panipat</h2> */}
          <div className="row gy-4">
            {busDetails.map((item, i) => {
              return (
                <div className="col-12 col-md-4" key={i}>
                  <div className="bus-info">
                    <div className="position-relative">
                      <p className="num">{item.no}</p>
                      <Link to="/BusViewDetail" className="img">
                        <img
                          src={item.img}
                          className="img-cover w-100"
                          alt=""
                        />
                      </Link>
                    </div>
                    <Link to="/BusViewDetail" className="content">
                      <ul>
                        <li>{item.availability}</li>
                        <li>Fair ₹{item.fare}</li>
                        <li>{item.date}</li>
                        <li>{item.time}</li>
                      </ul>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* {
            busDetails ?
              <Data busDetails={busDetails} />
              :
          <div className="skeletion-div">
            <div className="skeleton__title" style={{marginLeft:'83px'}}/>
            <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
           }  */}
      </section>
    </main>
  );
}

export default AllBuses;
