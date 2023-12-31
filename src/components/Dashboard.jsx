import React, { useState } from "react";
import { images } from "../Images/images";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import withAuth from "../shared/Auth";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [tabs, setTabs] = useState([
    {
      name: "Bookings",
      active: true,
      tab: 1,
    },
    {
      name: "Track my bus",
      active: false,
      tab: 2,
    },
    {
      name: "Refund & Cancellation",
      active: false,
      tab: 3,
    },
  ]);

  const activeTab = (index) => {
    const newTabs = tabs.map((item, i) => {
      if (i === index) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
    setTabs([...newTabs]);
  };

  return (
      <main>
        <section className="dashboard mtb-65">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-3">
                <div className="left">
                  <ul className="tabs">
                    {tabs.map((item, i) => {
                      return (
                        <li
                          key={i}
                          className={item.active ? "active" : ""}
                          onClick={() => activeTab(i)}
                        >
                          {item.name}
                        </li>
                      );
                    })}
                    <li>
                      <Link to="/" className="text-white">
                        Log out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-9">
                <div className="right">
                  {tabs.map((item, i) => {
                    if (item.tab === 1 && item.active) {
                      return (
                        <div className="bus-detail" key={i}>
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
                                  <h6>From</h6>
                                  <p>Delhi</p>
                                </li>
                                <li>
                                  <h6>To</h6>
                                  <p>Panipat</p>
                                </li>
                                <li>
                                  <h6>Nearest Stop</h6>
                                  <p>himachal stop</p>
                                </li>
                              </ul>
                              <div className="btns">
                                <Link
                                  to="/BusViewDetail"
                                  className="btn btn-primary btn-custom btn-sm"
                                >
                                  View Detail
                                </Link>
                                <Link
                                  to="#"
                                  className="btn btn-primary btn-custom btn-sm"
                                >
                                  Share GPS
                                </Link>
                                <Link
                                  to="/TrackYourBus"
                                  className="btn btn-primary btn-custom btn-sm"
                                >
                                  Track
                                </Link>
                                <button
                                  className="btn btn-primary btn-custom btn-sm"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setShowModal(true);
                                  }}
                                >
                                  Cancel Booking
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    if (item.tab === 2 && item.active) {
                      return (
                        <div className="track_bus" key={i}>
                          <h4 className="title fw-bold">TRACK MY BUS</h4>
                          <div className="map">
                            <iframe
                              src="https://www.google.com/maps/d/u/0/embed?mid=1wJd6xRFjkz4Ty5eM1xvMBEFc-sfjQuc&ehbc=2E312F"
                              width="100%"
                              height="100%"
                            ></iframe>
                          </div>
                        </div>
                      );
                    }
                    if (item.tab === 3 && item.active) {
                      return (
                        <div className="bus-detail" key={i}>
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
                                  <h6>Date</h6>
                                  <p>25 Sep, 2023</p>
                                </li>
                                <li>
                                  <h6>From</h6>
                                  <p>Delhi</p>
                                </li>
                                <li>
                                  <h6>To</h6>
                                  <p>Panipat</p>
                                </li>
                                <li>
                                  <h6>Status</h6>
                                  <button className="btn btn-success btn-sm">
                                    Refunded
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
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
                                  <h6>Date</h6>
                                  <p>25 Sep, 2023</p>
                                </li>
                                <li>
                                  <h6>From</h6>
                                  <p>Delhi</p>
                                </li>
                                <li>
                                  <h6>To</h6>
                                  <p>Panipat</p>
                                </li>
                                <li>
                                  <h6>Status</h6>
                                  <button className="btn btn-success btn-sm">
                                    Cancelled
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
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
                                  <h6>Date</h6>
                                  <p>25 Sep, 2023</p>
                                </li>
                                <li>
                                  <h6>From</h6>
                                  <p>Delhi</p>
                                </li>
                                <li>
                                  <h6>To</h6>
                                  <p>Panipat</p>
                                </li>
                                <li>
                                  <h6>Status</h6>
                                  <button className="btn btn-success btn-sm">
                                    Refunded
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
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
                                  <h6>Date</h6>
                                  <p>25 Sep, 2023</p>
                                </li>
                                <li>
                                  <h6>From</h6>
                                  <p>Delhi</p>
                                </li>
                                <li>
                                  <h6>To</h6>
                                  <p>Panipat</p>
                                </li>
                                <li>
                                  <h6>Status</h6>
                                  <button className="btn btn-success btn-sm">
                                    Cancelled
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Modal --> */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Cancellation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your booking has been cancelled.</Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </main>

  );
}

export default withAuth(Dashboard,false);
