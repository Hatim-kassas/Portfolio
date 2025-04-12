// Footer.jsx
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-nav">
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <a href="https://github.com/Hatim-kassas" target="_blank" rel="noopener noreferrer" className="footer-social-icon icon-github">
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/hatim-kassas-2a9837203/" target="_blank" rel="noopener noreferrer" className="footer-social-icon icon-linkedin">
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="footer-social-icon icon-instagram">
            <span className="sr-only">Instagram</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Hatim Kassas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}