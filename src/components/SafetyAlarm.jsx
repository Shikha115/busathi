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
      <Header />
      <main>
        <section className="mtb-65 safety-alarm">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <h4 className="title fw-bold">Safety alarm</h4>
                <p>
                  This alarm will let the police, ambulance, or hospital know if
                  something is wrong.Mention whatever deifficulty you are facing
                  below.
                </p>
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
              <div className="col-12 col-lg-6 text-center">
                <img src={images.safetyAlarm} alt="" />
              </div>
            </div>
          </div>
        </section>

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
      </main>
    </>
  );
}

export default SafetyAlarm;
