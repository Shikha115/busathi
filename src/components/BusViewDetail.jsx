import React, { useState } from "react";
import Header from "./Header";
import { images } from "../Images/images";
import Testimonial from "./Testimonial";

function BusViewDetail() {
  const [testimonialData, setTestimonialData] = useState([
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
  return (
    <main className="border-top">
      <section className="bus-view-detail ptb-65">
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

      <Testimonial data={testimonialData} />
    </main>
  );
}

export default BusViewDetail;
