import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row ptb-65">
            <div className="col-12 col-md-4">
              <div className="footer-about">
                <h5 className="primary">
                  <i>Busathi</i>
                </h5>
                <p className="gray">
                  Busathi is your trusted travel companion, simplifying bus
                  bookings with safety at its core. Experience seamless
                  journeys, explore routes, and enjoy a stress-free ride with
                  Busathi.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="footer-nav d-flex justify-content-center">
                <div>
                  <h4 className="title text-white">Quick Links</h4>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="#">FAQs</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Terms of Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="footer-nav d-flex justify-content-center">
                <div>
                  <h4 className="title text-white">Contact Info</h4>
                  <ul>
                    <li>
                      <a href="mailto:info@busathi.com">
                        Email: info@busathi.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+123 456 7890">Phone: +123 456 7890</a>
                    </li>
                    <li>
                      <div className="all-bus-location">
                        <iframe
                          src="https://www.google.com/maps/d/embed?mid=1ZU5kq3sBIOcPg6ECqn6SPMq97Ufg50A&ehbc=2E312F"
                          width="100%"
                          height="100%"
                        ></iframe>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright text-center">
            <p>&copy; 2023 Busathi, All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
