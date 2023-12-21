import React, { useEffect, useState } from "react";
import Header from "./Header";
import Data from "../shared/Data";
import axios from "axios";
import { Skeleton } from "../Loader";
import { images } from "../Images/images";
import { Link } from "react-router-dom";
function BusDetail() {
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

  // const [busDetails, setBusDetails] = useState(null)
  // const getdata = async () => {
  //   const result = await axios.get('https://bus-server-chi.vercel.app/buses/busDetails')
  //   console.log("🚀 ~ file: BusDetail.jsx:48 ~ getdata ~ result:", result.data)
  //   setBusDetails(result.data)
  // }
  // useEffect(() => {
  //   // getdata();
  // }, [])

  return (
    <main>
      <section className="border-top pt-4 mb-65">
        <div className="container">
          <h2 className="title fw-bold mb-4">Shimla to Manali</h2>
          {/* {busDetails.map((item, i) => {
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
          })} */}
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

export default BusDetail;
