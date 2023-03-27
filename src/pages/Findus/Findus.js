import Navbar from "../../components/Navbar/Navbar";
import "./Findus.css";
import LeftImage from "../../assets/leftImage.jpg";
import Directions from "../../assets/Directions.png";
import Footer from "../../components/Footer/Footer";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Findus = () => {
  const form = useRef();

  const SERVICE_ID = "service_n4dln1q";
  const TEMPLATE_ID = "template_1143k7e";
  const USER_ID = "HcZboAjnFGxx3xWw_";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        Swal.fire({
          title: "Form Submitted",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div>
      <Navbar />
      <div className="findus-container">
        <div className="first-section">
          <div className="left-side">
            <img src={LeftImage} />
          </div>
          <div className="right-side">
            <div>
              <h2 className="open">OPENING HOURS</h2>
            </div>
            <div>
              <h3 className="day">Tuesday - Saturday</h3>
              <span className="time">9:00 AM - 11:00 PM</span>
            </div>
            <div>
              <h3 className="day">Sunday</h3>
              <span className="time">9:00 AM - 11:00 PM</span>
            </div>
            <div>
              <h3 className="day">Monday</h3>
              <span className="time">Closed</span>
            </div>
          </div>
        </div>

        <div className="second-section">
          <div className="second-section-first">
            <form ref={form} onSubmit={sendEmail}>
              <h1>GET IN TOUCH</h1>
              <p>
                If you have any questions about Tout De Sweet, please send an
                email.
              </p>
              <div className="form-name">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  name="first_name"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  name="last_name"
                />
              </div>
              <div className="form-email">
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div>
                <textarea
                  placeholder="write your message here..."
                  rows="5"
                  name="message"
                />
              </div>
              <div className="form-icon-btn">
                <button type="submit" className="form-btn">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="second-section-second">
            <img src={Directions} draggable={false} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Findus;
