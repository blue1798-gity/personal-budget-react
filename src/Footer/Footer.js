import React from "react";

function Footer() {
  return (
    <footer>
      <div className="bottom">
        <img className="bottom-icon" src="/github.png" alt="Github Profile" />
        <img className="bottom-icon" src="/insta.png" alt="Instagram Profile" />
        <img
          className="bottom-icon"
          src="/linkedin.png"
          alt="LinkedIn Profile"
        />
        <div className="center">All rights reserved &copy; Fabio Nolasco</div>
        <a id="contact-me" className="contact" href="/contact.html">
          Contact Info
        </a>
      </div>
    </footer>
  );
}

export default Footer;
