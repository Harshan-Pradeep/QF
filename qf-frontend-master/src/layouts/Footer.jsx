import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-column">
        {/* <div className="footer-row footer-logo">
          <div className="logo">
            <span>Hire</span> Now
          </div>
        </div> */}
        <div className="footer-row footer-links">
          <div className="footer-column footer-logo">
            <div className="logo">
              <span>Queens</span> Furniture
            </div>
            <p>
              The Ultimate Platform for <br /> Finding and Buying Furnitures
            </p>
          </div>
          <div className="footer-column">
            <p>Home</p>
            <ul>
              <Link to="/" className="react-link">
                <li>Home</li>
              </Link>
              {/* <Link to="/services" className="react-link"> */}
                <li>Services</li>
              {/* </Link> */}
              {/* <Link to="/sellers" className="react-link"> */}
                <li>Sellers</li>
              {/* </Link> */}
              <Link to="/about" className="react-link"> 
                <li>About</li>
               </Link>
            </ul>
          </div>

          <div className="footer-column">
            <p>About</p>
            <ul>
            {/* <Link to="/aboutus" className="react-link"> */}
              <li>Our Story</li>
              {/* </Link> */}
              {/* <Link to="/aboutus" className="react-link"> */}
              <li>Benefits</li>
              {/* </Link> */}
              {/* <Link to="/aboutus/#team" className="react-link"> */}
              <li>Team</li>
              {/* </Link> */}
            </ul>
          </div>
          <div className="footer-column footer-contacts">
            <p>Get in touch</p>
            <div>Question or feedback?</div>
            <div className="div">We'd love to here from you</div>
            <div className="footer-row">
              <input type="text" />
              <button>
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div className="footer-row social">
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-square-twitter"></i>
            </div>
          </div>
        </div>
        <div className="footer-row last-row">
          <div className="copyright">
            Copyright 2023, All right reserved.
          </div>
          <div className="footer-row">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
