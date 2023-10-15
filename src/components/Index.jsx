import React, { useEffect, useState } from "react";
import { images } from "../Images/images";
import { Link } from "react-router-dom";

function Index() {
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
  const isLogin = localStorage.getItem('token')
  useEffect(() => {
  }, [isLogin]);

  return (
    <main>
      <section className="home-top secondary-bg pt-5 pb-65">
        <div className="container text-center">
          <div className="top-btns d-flex gap-2 justify-content-end">
            {isLogin ? (
              <Link
                to="/"
                className="btn btn-white btn-custom"
                onClick={() => {
                  console.log('render');
                  window.location.reload();
                  localStorage.clear();
                }}
              >
                Log Out
              </Link>
            ) : (
              <>
                <Link to="/Register" className="btn btn-white btn-custom">
                  Register
                </Link>
                <Link to="/Login" className="btn btn-white btn-custom">
                  Login
                </Link>
              </>
            )}
          </div>
          <Link to="/">
            <img src={images.logoWhite} alt="" className="main-logo" />
          </Link>
          <div className="text-center">
            <h1 className="title fw-bold my-4">
              India’s No. 1{" "}
              <span className="text-white">Bus Tracking Site</span>
            </h1>
            <h6>
              Busathi is India’s #1 bus transport technology company. Live track
              your bus on the Busathi App and get digital bus tickets on the
              Busathi Card. Your one stop solution for a convenient and
              hassle-free travel experience.
            </h6>
          </div>
          <div className="btns my-4">
            <Link to="/SafetyAlarm" className="btn btn-lg btn-white btn-custom">
              Safety alarm
            </Link>
            <Link
              to="/EmergencyStop"
              className="btn btn-lg btn-white btn-custom mx-4"
            >
              Emergency stop
            </Link>
            {/* <button className="btn btn-lg btn-white btn-custom">
              Safety feature
            </button> */}
          </div>
          <form className="home-banner">
            <div className="get-booking-detail">
              <div className="box">
                <div>
                  <i className="fa-solid fa-magnifying-glass icon"></i>
                  <label>From</label>
                </div>
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
                <div>
                  <i className="fa-solid fa-magnifying-glass icon"></i>
                  <label>To</label>
                </div>
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
                <div>
                  <i className="fa-solid fa-magnifying-glass icon"></i>
                  <label>Date</label>
                </div>
                <input type="date" className="form-control" />
              </div>
            </div>
            <Link to="/BusDetail" className="btn btn-lg btn-primary btn-custom">
              Search Buses
            </Link>
          </form>
        </div>
      </section>

      {/* ==================================================================================== */}

      <section className="container">
        <div className="all-bus-location">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1ZU5kq3sBIOcPg6ECqn6SPMq97Ufg50A&ehbc=2E312F"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </section>

      {/* ==================================================================================== */}

      <section className="what-else mb-65">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <h1 className="title fw-bold mb-4">
                What else&nbsp;
                <span className="primary">can you do</span>
              </h1>
              <p>
                Track my bus feature enables our on-the-go customers and their
                families to keep track of the bus location. You can track your
                bus on a map and use the information to plan your commute to the
                boarding point and to get off at the right stop. Family members
                and friends can also check the bus location to coordinate
                pick-ups and rest assured about your safety. Bus operators use
                this feature to share any delay in bus schedule and which are
                instantly shared with you. A win- win for all, it’s the smarter
                way to travel!
              </p>
              <form action="" className="mt-3">
                <div className="form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Track your bus"
                  />
                  <Link
                    to="/TrackYourBus"
                    className="btn btn-primary btn-custom"
                  >
                    Track
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-12 col-lg-6">
              <div className="right">
                <img
                  src={images.whatElse}
                  className="img-contain h-100 w-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================================================================== */}

      <section className="what-else mb-65">
        <div className="container">
          <h1 className="title fw-bold mb-4 text-center">
            What makes us&nbsp;
            <span className="primary">different</span>
          </h1>
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-12 col-lg-8">
              <h2 className="title fw-bold mb-4">Safety alarm</h2>
              <p>
                We want to add a special alarm in buses that can call for help
                if there's an emergency. This alarm can let the police,
                ambulance, or hospital know if something is wrong. It's
                especially helpful for keeping women safe. If someone gets hurt
                near a bus stop or on the bus route, they can find out where the
                bus is and ask for help. This way, we can make sure people get
                the help they need quickly.
              </p>
              <Link to="/SafetyAlarm" className="btn btn-primary btn-custom">
                Safety alarm
              </Link>
            </div>
            <div className="col-12 col-lg-4">
              <div className="right">
                <img
                  src={images.safetyAlarm}
                  className="img-contain h-auto w-100%"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================================================================== */}

      <section className="what-else mb-65">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8">
              <h2 className="title fw-bold mb-4">Emergency stop</h2>
              <p>
                Imagine you're driving in the hills and your car suddenly stops
                working. With Busathi, you can quickly find the nearest bus and
                its route for help. You can also send a message to the bus
                driver asking for a stop to get assistance in an emergency
                situation. It's like having a helping hand when you need it the
                most!
              </p>
              <Link to="/EmergencyStop" className="btn btn-primary btn-custom">
                Emergency stop
              </Link>
            </div>
            <div className="col-12 col-lg-4">
              <div className="right">
                <img
                  src={images.EmergencyStop}
                  className="img-contain h-auto w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================================================================== */}
      <section className="container mb-65">
        <div className="google-download">
          <h1 className="title fw-bold mb-4">ENJOY THE APP!</h1>
          <div className="row gap-3">
            <div className="col-12 col-md-3">
              <h5>Scan to download</h5>
              <img src={images.scanner} alt="" />
            </div>
            <div className="col-12 col-md-3">
              <h5>Download the App on</h5>
              <div className="d-flex align-items-start flex-column gap-3">
                <img src={images.playStore} alt="" />
                <img src={images.appStore} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Index;
