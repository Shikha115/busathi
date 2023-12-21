import React from "react";
import Header from "./Header";
import { images } from "../Images/images";
import { Link } from "react-router-dom";

function BusTrack() {
  return (
    <main>
      <section className="track_bus mb-65">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="h-100 d-flex align-items-center justify-content-center flex-column">
                <img
                  src={images.busTrack}
                  alt=""
                  className="w-auto h-auto img-contain"
                />
                <h2 className="title fw-bold mt-3">TRACK MY BUS</h2>
                <p>SMARTER WAY TO TRAVEL</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
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
      <section className="bus-view-detail mb-65">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="left">
                <img src={images.bus_1} alt="" className="w-100 img-cover" />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="right">
                <h2 className="title fw-600">Shimla to Manali</h2>
                <p className="small">
                  Explore the scenic journey from Shimla to Manali with Busathi
                  – where comfy seats meet beautiful views! Book now for a
                  delightful ride through the hills with safety and ease.
                </p>
                <ul className="detail">
                  <li>Bus Number: <span>706</span></li>
                  <li>Bus Name: <span>Himachal</span></li>
                  <li>Availability: <span>10:30 - 11:30</span></li>
                  <li>Drop: <span>01:45 hr</span></li>
                  <li>Date: <span>25 Sep, 2023</span></li>
                  <li>Fare: <span>₹35</span></li>
                  <li>Nearest Stop: <span>Himachal stop</span></li>
                  <li>Seats: <span>23</span></li>
                  <li>GPS no.: <span>1234567854</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BusTrack;
