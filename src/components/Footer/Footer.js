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

  const SubmitNewsletter = (e) => {
    e.preventDefault();
    const url =
      "https://toutdesweet.us21.list-manage.com/subscribe/post-json?u=51b2d814c9608d64cc5a49e7b&amp;id=87cfbb4a9a&amp;f_id=009ca0e1f0";
    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      const { msg, result } = data;
      alert(msg);
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="first-div">
          <h5>CONTACT US</h5>
          <div>
            <p>
              <a href="mailto:info@toutdesweet.ae" className="change">
                <span className="contact-icon">
                  <AiOutlineMail />
                </span>
                info@toutdesweet.ae
              </a>
            </p>
            <p>
              <a href="tel:+971 43264473" className="change">
                <span className="contact-icon">
                  <BsTelephone />
                </span>
                +971 43264473
              </a>
            </p>

            <p>
              <a href="tel:+971 501077848" className="change">
                <span className="contact-icon">
                  <BsTelephone />
                </span>
                +971 501077848
              </a>
            </p>
          </div>
          <div className="contact-icons">
            <div className="click-icon">
              <a
                href="https://www.facebook.com/toutdesweetae/"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebookF className="f-icon" />
              </a>
            </div>
            <div className="click-icon">
              <a
                href="https://www.instagram.com/toutdesweetae/"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineInstagram className="i-icon" />
              </a>
            </div>
            <div className="click-icon">
              <a
                href="https://www.tiktok.com/@toutdesweet.ae"
                rel="noreferrer"
                target="_blank"
              >
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
          <form method="post" onSubmit={SubmitNewsletter}>
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
            Empowered by{" "}
            <a href="http://www.advertcommunications.com/" target="_blank">
              Advert Communications
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
