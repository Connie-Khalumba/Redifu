import React from "react";
import "../App.css";


const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="contact-info">
            <h2>GET IN TOUCH WITH US</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="contact-item">
              <h4>Our Location</h4>
              <p>99 St. Jomblo Park Pekanbaru, Indonesia</p>
            </div>
            <div className="contact-item">
              <h4>Phone Number</h4>
              <p>(+62)81 414 257 9980</p>
            </div>
            <div className="contact-item">
              <h4>Email Address</h4>
              <p>info@yourdomain.com</p>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <ContactInputBox type="text" name="name" placeholder="Your Name" />
              <ContactInputBox type="email" name="email" placeholder="Your Email" />
              <ContactInputBox type="tel" name="phone" placeholder="Your Phone" />
              <ContactTextArea name="message" placeholder="Your Message" />
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactTextArea = ({ name, placeholder }) => {
  return (
    <div className="input-group">
      <textarea name={name} placeholder={placeholder} className="input-textarea" />
    </div>
  );
};

const ContactInputBox = ({ type, name, placeholder }) => {
  return (
    <div className="input-group">
      <input type={type} name={name} placeholder={placeholder} className="input-field" />
    </div>
  );
};

export default Contact;
