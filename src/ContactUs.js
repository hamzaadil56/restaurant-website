import React from "react";
import emailjs from "emailjs-com";
import { AiFillPhone } from "react-icons/ai";

import "./App.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    alert("Your Request Has Been Submitted");
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        "user_uEbWw8WwOMXOG0uapz3pu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div id="contact-us" className="reservation-container">
      <div className="contact-us-container">
        <div className="contact-description">
          <div className="contact-header">
            <h4>CONTACT US</h4>
            <h2>Here You Can Make A Reservation Or Just walkin to our cafe</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore neque officiis doloremque.
            </p>
          </div>
          <div className="phone-numbers">
            <div className="phone-icon">
              <AiFillPhone />
            </div>
            <h3>PHONE NUMBERS</h3>
            <p>03122218931</p>
            <p>03122218932</p>
          </div>
        </div>
        <div className="form">
          <h1>Table Reservation</h1>
          <form className="contact-form" onSubmit={sendEmail}>
            {/* <label>Name</label> */}
            <input
              placeholder="Your Name*"
              type="text"
              required="required"
              name="user_name"
            />
            {/* <label>Email</label> */}
            <input
              placeholder="Your Email*"
              type="email"
              required="required"
              name="user_email"
            />
            <input
              placeholder="Your Phone Number*"
              required="required"
              type="text"
              name="phone"
            />
            <select required="required" name="number-guests" id="number-guests">
              <option value="">Number Of Guests</option>
              <option value="1" name="1" id="1">
                1
              </option>
              <option value="2" name="2" id="2">
                2
              </option>
              <option value="3" name="3" id="3">
                3
              </option>
              <option value="4" name="4" id="4">
                4
              </option>
              <option value="5" name="5" id="5">
                5
              </option>
              <option value="6" name="6" id="6">
                6
              </option>
              <option value="7" name="7" id="7">
                7
              </option>
              <option value="8" name="8" id="8">
                8
              </option>
              <option value="9" name="9" id="9">
                9
              </option>
              <option value="10" name="10" id="10">
                10
              </option>
              <option value="11" name="11" id="11">
                11
              </option>
              <option value="12" name="12" id="12">
                12
              </option>
            </select>
            <input required="required" type="date" name="reservation_date" />
            <select required="required" name="time">
              <option value="">time</option>

              <option value="breakfast">breakfast</option>
              <option value="lunch">lunch</option>
              <option value="dinner">dinner</option>
            </select>

            {/* <label>Message</label> */}
            <textarea
              required="required"
              placeholder="Your Message*"
              name="message"
            />
            <input
              className="reservation-button"
              type="submit"
              value="Make A Reservation"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
