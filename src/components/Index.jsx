import React, { useEffect, useState } from "react";
import { images } from "../Images/images";
import { Link } from "react-router-dom";
import Header from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import BusFilter from "./BusFilter";

function Index() {
 
  const [favouriteRoute, setFavouriteRoute] = useState([
    {
      img: images.dalhousie,
      route: "Chandigarh - Shimla",
      fair: 25,
    },
    {
      img: images.dharamshala,
      route: "Dharamshala- McLeodganj",
      fair: 25,
    },
    {
      img: images.shimla,
      route: "Manali - Mandi",
      fair: 25,
    },
    {
      img: images.manali,
      route: "Kalpa - Nako Lake",
      fair: 25,
    },
    {
      img: images.parvati,
      route: "Tabo - Kaza",
      fair: 25,
    },
  ]);
  const [testimonial, setTestimonial] = useState([
    {
      name: "Pankaj",
      designaton: "Passenger",
      content:
        "Busathi made my journey stress-free and enjoyable. The website's user-friendly interface allowed me to book my favorite seat effortlessly. With safety alarms and emergency stops, I felt secure throughout the trip. Busathi truly delivers a top-notch travel experience!",
      date: "01-jan-2023",
    },
    {
      name: "Sonam",
      designaton: "Passenger",
      content:
        "I love how Busathi ensures the safety of passengers. The emergency stop feature is a game-changer. I once needed assistance, and with a quick message to the driver, the bus stopped promptly. It's great to know that safety is a priority with Busathi!",
      date: "01-jan-2023",
    },
    {
      name: "Shikha",
      designaton: "Passenger",
      content:
        "Busathi's eco-friendly options and reserved seats for women and infants impressed me. The app's simplicity in booking and tracking is unmatched. My journeys are now not only convenient but also aligned with sustainable travel practices. Highly recommended!",
      date: "01-jan-2023",
    },
    {
      name: "Priya",
      designaton: "Passenger",
      content:
        "Being a bus operator on Busathi has streamlined my business.The route management and maintenance scheduling features areinvaluable. The website's focus on compliance and safety aligns perfectly with our commitment to providing reliable services.",
      date: "01-jan-2023",
    },
  ]);
  // const isLogin = localStorage.getItem('token')
  // useEffect(() => {
  //   setIsLogin(localStorage.getItem("isLogin"));
  //   setTimeout(() => console.log("login - ", isLogin), 2000);
  // }, [localStorage.getItem("isLogin")]);

  return (
    <main>
      <section className="container text-center">
        <div className="home-top">
          <div className="col-lg-9 mx-auto box">
            <div className="text-center">
              <h1 className="title">
                <span className="primary">Busathi:</span> Yatra Ki Raah Ka Sahi
                Dost, Hamesha Aapke Saath!
              </h1>
            </div>
            {/* <div className="btns my-4">
              <Link to="/SafetyAlarm" className="btn btn-white btn-custom">
                Safety alarm
              </Link>
              <Link
                to="/EmergencyStop"
                className="btn btn-white btn-custom mx-4"
              >
                Emergency stop
              </Link>
            </div> */}
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
                  About Busathi: Your Partner in Safe and Seamless Bus Journeys
                </h1>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="content">
                <p>
                  Welcome to Busathi, where your journey is our priority. At
                  Busathi, we're committed to making your bus travels safe,
                  comfortable, and hassle-free. Our mission is to provide a
                  reliable platform for seamless bus booking and tracking. With
                  a focus on safety, convenience, and sustainability, Busathi is
                  your trusted companion for enjoyable travels. Discover the
                  ease of bus journeys with us – where every mile is a pleasant
                  adventure
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
                  emission compliance indicators and reserved seats for specific
                  groups.
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
                instant, you'll have real-time updates on its location, expected
                arrival times, and more. Experience the power of information at
                your fingertips, ensuring you're always in the know about your
                bus's progress. Track your bus effortlessly with Busathi, where
                convenience meets technology.
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

      <BusFilter />
      {/* ==================================================================================== */}

      <section className="mb-65">
        <div className="container">
          <div className="title mb-5 text-center">
            <h1>Favorite Routes</h1>
            <p>
              Find joy in Himachal's favorites—Manali's serenity and Shimla's
              charm await your unforgettable journey
            </p>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={4}
            navigation
            autoplay
            speed={1500}
            loop={true}
          >
            {favouriteRoute.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="best-destination">
                    <Link to="#" className="img">
                      <img src={item.img} className="img-cover w-100" alt="" />
                    </Link>
                    <Link to="#" className="content">
                      <h6>{item.route}</h6>
                      <p>Fair ₹{item.fair}</p>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      {/* ==================================================================================== */}

      {/* ==================================================================================== */}
      <section className="home-service mb-65">
        <div className="container">
          <div className="title mb-5 text-center">
            <h1>Your Safety, Our Priority</h1>
            <p>
              Welcome to Busathi, where your safety is our top priority! Our
              commitment to passenger well-being goes beyond just reaching your
              destination. With our unique safety features, we ensure that you
              travel with peace of mind.
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
                    Alarm feature. Imagine having a safety button right at your
                    fingertips. If you ever feel uneasy or need urgent
                    assistance during your journey, just press the Safety Alarm.
                    It sends an immediate alert to local authorities, letting
                    them know your exact location and ensuring help is on the
                    way. Your safety matters, and Busathi is here to provide an
                    extra layer of protection for every passenger.
                  </p>
                  <Link to="/Safety-Feature" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="box gray-bg">
                <div className="img">
                  <img src={images.bus_4} className="img-cover w-100" alt="" />
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
                  <Link to="/Safety-Feature" className="btn btn-primary">
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
      <section className="testimonial mb-65">
        <div className="container">
          <div className="title mb-5 text-center">
            <h1>Testimonials</h1>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            autoplay
            speed={1500}
            loop={true}
          >
            {testimonial.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="home-testimonial">
                    <h6>{item.name}</h6>
                    <city>
                      <small>{item.designaton}</small>
                    </city>
                    <p>{item.content}</p>
                    <date>{item.date}</date>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* <section className="container mb-65">
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
        </section> */}
    </main>
  );
}

export default Index;
