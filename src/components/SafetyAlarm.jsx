import React, { useState } from "react";
import Header from "./Header";
import { images } from "../Images/images";
import Modal from "react-bootstrap/Modal";

function SafetyAlarm() {
  const [sendingTo, setSendingTo] = useState([
    {
      tab: 1,
      name: "Police station",
    },
    {
      tab: 2,
      name: "Hospital",
    },
    {
      tab: 3,
      name: "Family",
    },
  ]);
  const [sentValue, setSentValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="safety-alarm">
        <div className="row mb-5">
          <div className="col-12 col-md-6">
            <h2 className="title">Safety Alarm</h2>
            <p>
              Experience a new level of security with Busathi's Safety Alarm
              feature. Imagine having a safety button right at your fingertips.
              If you ever feel uneasy or need urgent assistance during your
              journey, just press the Safety Alarm. It sends an immediate alert
              to local authorities, letting them know your exact location and
              ensuring help is on the way. Your safety matters, and Busathi is
              here to provide an extra layer of protection for every passenger.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="img">
              {" "}
              <img src={images.ambulance} alt="" className="w-100 img-cover" />
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
              placeholder="Share your concern, if possible..."
            ></textarea>
          </div>
          <div className="col-12">
            <label>Send this to nearby</label>
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
            </div>
          </div>
        </form>
      </div>

      {/* <!-- Modal --> */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title> Safety Alarm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {sentValue === 1 ? (
            <p>
              Wait for the response. Your location has been sent to nearby
              police station.
            </p>
          ) : sentValue === 2 ? (
            <p>
              Wait for the response. Your location has been sent to nearby
              hospital.
            </p>
          ) : (
            <p>
              Wait for the response. Your location has been sent to nearby
              family member.
            </p>
          )}
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

export default SafetyAlarm;
