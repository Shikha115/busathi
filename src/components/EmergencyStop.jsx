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
      <Header />
      <main>
        <section className="mtb-65 safety-alarm">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <h4 className="title fw-bold">Emergency Stop</h4>
                <p>
                  With Busathi, you can quickly find the nearest bus and its
                  route for help. You can also send a message to the bus driver
                  asking for a stop to get assistance in an emergency situation.
                </p>
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
              <div className="col-12 col-lg-6">
                <div className="all-bus-location mt-4">
                  <iframe
                    src="https://www.google.com/maps/d/u/0/embed?mid=1ZU5kq3sBIOcPg6ECqn6SPMq97Ufg50A&ehbc=2E312F"
                    width="100%"
                    height="100%"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Modal --> */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title> Emergency Stop</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Wait for the responsive. Your Alarm has been sent to nearest bus.
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

export default EmergencyStop;
