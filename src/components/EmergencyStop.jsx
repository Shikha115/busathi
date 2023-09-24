import React from "react";
import Header from "./Header";
import { images } from "../Images/images";

function EmergencyStop() {
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
                    ></textarea>
                  </div>
                  <div className="col-12">
                  <button
                      className="btn btn-custom btn-primary"
                      onClick={(e) => e.preventDefault()}
                      data-bs-toggle="modal"
                      data-bs-target="#callModal"
                    >
                      Submit
                    </button>
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
          <div
          class="modal fade"
          id="callModal"
          tabindex="-1"
          aria-labelledby="callModal"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="callModalLabel">
                Emergency Stop
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Wait for the responsive.Your Alarm has been sent to nearest bus.</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default EmergencyStop;
