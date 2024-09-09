import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandTiktok } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import LogoAndCards from "../../assets/Logo-and-cards.png";
import { Link } from "react-router-dom";
import jsonp from "jsonp";
import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  const [email, setEmail] = useState("");

  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="first-div">
          <h5>CONTACT US</h5>
          <div>
            <p>
              <a href="#" className="change">
                <span className="contact-icon">
                  <AiOutlineMail />
                </span>
                info@toutdesweet.ae
              </a>
            </p>
            <p>
              <a href="#" className="change">
                <span className="contact-icon">
                  <BsTelephone />
                </span>
                +971 432644324
              </a>
            </p>

            <p>
              <a href="#" className="change">
                <span className="contact-icon">
                  <BsTelephone />
                </span>
                +971 53423423
              </a>
            </p>
          </div>
          <div className="contact-icons">
            <div className="click-icon">
              <a href="#" rel="noreferrer" target="_blank">
                <FaFacebookF className="f-icon" />
              </a>
            </div>
            <div className="click-icon">
              <a href="#" rel="noreferrer" target="_blank">
                <AiOutlineInstagram className="i-icon" />
              </a>
            </div>
            <div className="click-icon">
              <a href="#" rel="noreferrer" target="_blank">
                <TbBrandTiktok className="t-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="second-div">
          <h5>LOCATION</h5>
          <div>
            <p>shop 14 - block 4</p>
            <p>wasl square - Dubai</p>
          </div>
        </div>
        <div className="third-div">
          <h5>TERMS & CONDITIONS</h5>
          <div>
            <p className="terms">
              please refer to our
              <Link to="/terms-and-conditions" className="footer-terms change">
                &nbsp; terms and conditions &nbsp;
              </Link>
              to know more about orders, payments, refunds...
            </p>
          </div>
        </div>

        <div className="fourth-div">
          <form method="post">
            <h5>NEWSLETTER</h5>
            <input
              placeholder="Email..."
              className="footer-input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              required
            />
            <div>
              <button className="send-button">SUBSCRIBE</button>
            </div>
          </form>
        </div>
      </div>
      <div className="bottom-footer">
        <div>
          <p className="bottom-footer-center">
            Copyright © {currentYear} Tout De Sweet all rights reserved.
          </p>
          <p>
            Made by{" "}
            <a href="https://mohamadagag.vercel.app/" target="_blank">
              Mohamad Agag
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
