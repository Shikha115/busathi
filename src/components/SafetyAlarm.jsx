import React from "react";
import Header from "./Header";
import { images } from "../Images/images";

function SafetyAlarm() {
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
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <label>Send this to nearby</label>
                    <div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label
                          class="form-check-label"
                          htmlFor="inlineCheckbox1"
                        >
                          Police station
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option1"
                        />
                        <label
                          class="form-check-label"
                          htmlFor="inlineCheckbox2"
                        >
                          Hospital
                        </label>
                      </div>
                    </div>
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
              <div className="col-12 col-lg-6 text-center">
                <img src={images.safetyAlarm} alt="" />
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
                  Safety Alarm
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Wait for the response. Your location has been sent to nearby hospital & police station</div>
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

export default SafetyAlarm;
