import React from "react";
import Header from "./Header";
import { images } from "../Images/images";

function BusViewDetail() {
  return (
    <>
      <Header />
      <main>
        <section className="bus-view-detail mtb-65">
          <div className="container">
            <div className="text-center">
              <h2 className="title fw-bold">Bus Detail</h2>
              <div className="gif">
                <img src={images.busGif} alt="" />
              </div>
            </div>
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
                <p>10:30 - 11:30</p>
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
              <li>
                <h6>Seats Availble</h6>
                <p>23 seats</p>
              </li>
              <li>
                <h6>From</h6>
                <p>Udyog nagar</p>
              </li>
              <li>
                <h6>To</h6>
                <p>himachal</p>
              </li>
              <li>
                <h6>GPS no.</h6>
                <p>1234567854</p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default BusViewDetail;
