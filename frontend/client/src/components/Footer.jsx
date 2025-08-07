import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper custom-footer text-white mt-5 py-4">
      <footer>
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-3 mb-3">
              <h5>Resources</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
                <li><a href="#" className="text-white text-decoration-none">Help Center</a></li>
                <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-3">
              <h5>Get Involved</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Adopt a Pet</a></li>
                <li><a href="#" className="text-white text-decoration-none">Post a Pet</a></li>
                <li><a href="#" className="text-white text-decoration-none">Volunteer</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-3">
              <h5>About</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Our Mission</a></li>
                <li><a href="#" className="text-white text-decoration-none">Team</a></li>
                <li><a href="#" className="text-white text-decoration-none">Terms & Privacy</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-3">
              <h5>Stay Updated</h5>
              <form>
                <input type="email" className="form-control mb-2" placeholder="Email address" />
                <button className="btn btn-light text-success btn-sm w-100">Sign Up</button>
              </form>
            </div>
          </div>

          <hr className="border-light" />

          <div className="text-center pt-2">
            <p className="mb-0">© 2025 Pet Matcher. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;