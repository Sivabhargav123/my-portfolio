import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-social">
        <a href="https://github.com/Sivabhargav123/" target="_blank">
          <FaGithub />
        </a>

        <a href="https://linkedin.com" target="_blank">
          <FaLinkedin />
        </a>
      </div>

      <p>
        © {new Date().getFullYear()} Siva Bhargav Gandikota. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;