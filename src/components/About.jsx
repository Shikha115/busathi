import React from "react";
import PageBanner from "./PageBanner";
import { images } from "../Images/images";

function About() {
  return (
    <main>
      {/* ==================================================================================== */}
      <PageBanner img={images.bus_6} title="About Us" />
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
    </main>
  );
}

export default About;
