import React, { useState } from "react";
import Header from "./Header";
import { images } from "../Images/images";
import Modal from "react-bootstrap/Modal";

function EmergencyStop() {
  const [showModal, setShowModal] = useState(false);
  const [boxText, setBoxText] = useState();
  const [sendingTo, setSendingTo] = useState([
    {
      tab: 1,
      name: "Natural calamities",
    },
    {
      tab: 2,
      name: "Vehicle problem",
    },
    // {
    //   tab: 3,
    //   name: boxText?"Other":"Disabled",
    // },
  ]);
  const [sentValue, setSentValue] = useState("");
  return (
    <>
      <div className="safety-alarm">
        <div className="row mb-5">
          <div className="col-12 col-md-6">
            <h2 className="title">Emergency Stop</h2>
            <p>
              At Busathi, we understand that unexpected situations can arise.
              That's why we've introduced the Emergency Stop feature. If you
              find yourself in an emergency or need the bus to make an
              unscheduled stop for assistance, Busathi has you covered. Simply
              send a message to the bus driver through the app, and they'll make
              an immediate stop to address the situation. It's your direct line
              to assistance when you need it most, ensuring a swift and
              effective response to any unforeseen circumstances. Travel
              confidently with Busathi!
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="img">
              <img src={images.bus_10} alt="" className="w-100 img-cover" />
            </div>
          </div>
        </div>
        <form action="#" className="form row">
          <div className="col-12">
            <label>Mention your current situation here</label>
            <textarea
              name=""
              cols="30"
              rows="5"
              className="form-control"
              placeholder="Share your concern here"
              required
              value={boxText}
              onChange={(e) => setBoxText(e.target.value)}
            ></textarea>
          </div>
          <div className="col-12">
            <div className="d-flex gap-2">
              {sendingTo.map((item, i) => {
                return (
                  <button
                    className="btn btn-custom btn-primary"
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      setSentValue(item.tab);
                      setShowModal(true);
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
              <button
                className="btn btn-custom btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
                disabled={!boxText}
              >
                {boxText ? "Other" : "Disabled"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* <!-- Modal --> */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title> Emergency Stop</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Wait for the response. Your Alarm has been sent to nearest bus.
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EmergencyStop;
