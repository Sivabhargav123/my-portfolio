import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">

      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">

        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <div className="contact-info">
            <h4>Email</h4>
            <a href={`mailto:${portfolioData.email}`}>
              {portfolioData.email}
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FaPhone />
          </div>
          <div className="contact-info">
            <h4>Phone</h4>
            <p>{portfolioData.phone}</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FaLinkedin />
          </div>
          <div className="contact-info">
            <h4>LinkedIn</h4>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Contact;