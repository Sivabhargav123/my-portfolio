import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Hero.css";
import profile from '../assets/IMG_20220925_174241.jpg'

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">

        {/* Profile Image */}
        <div className="hero-image">
          <img src={profile} alt="Siva Bhargav" />
        </div>

        <h1 className="hero-name">
          Siva Bhargav Gandikota
        </h1>

        <p className="hero-title">
          {/* Full Stack Developer (React & Node.js) */}
          Software Engineer | Web Developer
        </p>

        <p className="hero-description">
          Building scalable and secure web applications.
        </p>

        <div className="hero-buttons">
          <a href="mailto:gsiva52892@gmail.com" className="btn btn-primary">
            <FaEnvelope /> Email
          </a>

          <a href="https://linkedin.com" className="btn btn-outline">
            <FaLinkedin /> LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;