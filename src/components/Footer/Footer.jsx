import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p>© 2024 Supersite, Powered by News API</p>
      </div>
      <div className="footer__right">
        <div className="footer__buttons">
          <a href="/" className="footer__link">
            Home
          </a>
          <a
            href="https://www.tripleten.com"
            className="footer__link"
            target="_blank"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__icons">
          <a href="https://github.com" className="footer__link" target="_blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub Logo"
              className="footer__icon"
            />
          </a>
          <a
            href="https://facebook.com"
            className="footer__link"
            target="_blank"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook Logo"
              className="footer__icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
