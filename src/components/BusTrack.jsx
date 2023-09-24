import React from "react";
import Header from "./Header";
import { images } from "../Images/images";
import { Link } from "react-router-dom";

function BusTrack() {
  return (
    <>
      <Header />
      <main>
        <section className="track_bus mt-65">
          <div className="container">
            <div className="text-center">
              <img
                src={images.busTrack}
                alt=""
                className="w-auto h-100 img-contain"
              />
              <h2 className="title fw-bold mt-3">TRACK MY BUS</h2>
              <p>SMARTER WAY TO TRAVEL</p>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=1wJd6xRFjkz4Ty5eM1xvMBEFc-sfjQuc&ehbc=2E312F"
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================== */}
        <section className="bus-detail mb-65">
          <div className="container">
            <div className="box">
              <img src={images.busGif} alt="" />
              <div className="outer-box">
                <ul className="box-inner">
                  <li>
                    <h6>Bus Number</h6>
                    <p>706</p>
                  </li>
                  <li>
                    <h6>Bus Name</h6>
                    <p>himachal</p>
                  </li>
                  <li>
                    <h6>Availability</h6>
                    <p>16:30 - 17:30</p>
                  </li>
                  <li>
                    <h6>Time</h6>
                    <p>01:45 hours</p>
                  </li>
                  <li>
                    <h6>Date</h6>
                    <p>25 Sep, 2023</p>
                  </li>
                  <li>
                    <h6>Fare</h6>
                    <p>INR 100</p>
                  </li>
                  <li>
                    <h6>Nearest Stop</h6>
                    <p>himachal stop</p>
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
          </div>
        </section>
      </main>
    </>
  );
}

export default BusTrack;
