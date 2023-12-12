import React, { useEffect, useState } from "react";
import { images } from "../Images/images";
import { Link } from "react-router-dom";
import Header from "./Header";

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
  // const isLogin = localStorage.getItem('token')
  // useEffect(() => {
  //   setIsLogin(localStorage.getItem("isLogin"));
  //   setTimeout(() => console.log("login - ", isLogin), 2000);
  // }, [localStorage.getItem("isLogin")]);

  return (
    <>
      <Header />
      <main>
        <section className="container text-center">
          <div className="home-top">
            <div className="col-lg-9 mx-auto box">
              <div className="text-center">
                <h1 className="title">
                  <span className="primary">Busathi:</span> Yatra Ki Raah Ka
                  Sahi Dost, Hamesha Aapke Saath!
                </h1>
              </div>
              <div className="btns my-4">
                <Link to="/SafetyAlarm" className="btn btn-white btn-custom">
                  Safety alarm
                </Link>
                <Link
                  to="/EmergencyStop"
                  className="btn btn-white btn-custom mx-4"
                >
                  Emergency stop
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================================== */}

        <section className="about-us mtb-65">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="title">
                  <h1>
                    About Busathi: Your Partner in Safe and Seamless Bus
                    Journeys
                  </h1>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="content">
                  <p>
                    Welcome to Busathi, where your journey is our priority. At
                    Busathi, we're committed to making your bus travels safe,
                    comfortable, and hassle-free. Our mission is to provide a
                    reliable platform for seamless bus booking and tracking.
                    With a focus on safety, convenience, and sustainability,
                    Busathi is your trusted companion for enjoyable travels.
                    Discover the ease of bus journeys with us – where every mile
                    is a pleasant adventure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================================== */}
        <section className="three-box mb-65">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="box">
                  <h4>Safety First</h4>
                  <p>
                    Busathi prioritizes your safety with features like emergency
                    alarms and easy communication with bus drivers.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="box">
                  <h4>Convenient Booking</h4>
                  <p>
                    Enjoy a seamless booking experience from route search to
                    secure payments.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="box">
                  <h4>Eco-Friendly Travel</h4>
                  <p>
                    Join us in supporting sustainability with features like
                    emission compliance indicators and reserved seats for
                    specific groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================================================================================== */}
        <section className="container">
          <div className="all-bus-location">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1ZU5kq3sBIOcPg6ECqn6SPMq97Ufg50A&ehbc=2E312F"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </section>
        {/* ==================================================================================== */}

        <section className="home-track mb-65">
          <div className="container">
            <div className="row gx-5">
              <div className="col-12 col-lg-6 py-lg-4">
                <h1 className="title">Apne Bus ko Khoje</h1>
                <p>
                  Stay in control of your journey with Busathi's easy-to-use
                  tracking feature. Simply enter your bus number, and in an
                  instant, you'll have real-time updates on its location,
                  expected arrival times, and more. Experience the power of
                  information at your fingertips, ensuring you're always in the
                  know about your bus's progress. Track your bus effortlessly
                  with Busathi, where convenience meets technology.
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
                  <img src={images.bus_2} alt="" />
                  <img src={images.bus_3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================================================================================== */}

        <section className="home-book gray-bg py-5 mb-65">
          <div className="book-overlay"></div>
          <div className="container">
            <div className="title">
              <h4>Bus Khoj, Safar Shuru</h4>
              <p>
                Explore a world of travel possibilities. Uncover the best bus
                routes with our intuitive search feature. Simply enter your
                travel details, and let Busathi guide you to your next
                destination hassle-free.
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
                          q?.name
                            .toUpperCase()
                            .includes(fromValue.toUpperCase())
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
        {/* ==================================================================================== */}

        <section className="home-service mb-65">
          <div className="container">
            <div className="title mb-5 text-center">
              <h1>Your Safety, Our Priority</h1>
              <p>
                Welcome to Busathi, where your safety is our top priority! Our
                commitment to passenger well-being goes beyond just reaching
                your destination. With our unique safety features, we ensure
                that you travel with peace of mind.
              </p>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="box gray-bg">
                  <div className="img">
                    <img
                      src={images.ambulance}
                      className="img-cover w-100"
                      alt=""
                    />
                  </div>
                  <div className="content mt-3">
                    <h4>Safety alarm</h4>
                    <p>
                      Experience a new level of security with Busathi's Safety
                      Alarm feature. Imagine having a safety button right at
                      your fingertips. If you ever feel uneasy or need urgent
                      assistance during your journey, just press the Safety
                      Alarm. It sends an immediate alert to local authorities,
                      letting them know your exact location and ensuring help is
                      on the way. Your safety matters, and Busathi is here to
                      provide an extra layer of protection for every passenger.
                    </p>
                    <Link to="/SafetyAlarm" className="btn btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="box gray-bg">
                  <div className="img">
                    <img
                      src={images.bus_4}
                      className="img-cover w-100"
                      alt=""
                    />
                  </div>
                  <div className="content mt-3">
                    <h4>Emergency stop</h4>
                    <p>
                      Experience peace of mind with Busathi's Emergency Stop
                      feature. If you encounter an emergency or require an
                      unscheduled stop for assistance, simply message the bus
                      driver via the app. They'll promptly make the necessary
                      stop, providing immediate assistance in unforeseen
                      circumstances. Travel confidently with Busathi!
                    </p>
                    <Link to="/SafetyAlarm" className="btn btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================================================================================== */}

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
    </>
  );
}

export default Index;
