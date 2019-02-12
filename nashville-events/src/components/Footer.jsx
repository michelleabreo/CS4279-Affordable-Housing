import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styling/main.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-nav">
          <div className="col-sm">
            <b>© Afford Nash. 2019</b>
          </div>
          <div className="col-sm" id="footerMid">
            <a href="#">About</a>
            <a href="#">Events</a>
            <a href="#">Lifestyle</a>
            <a href="#">Housing</a>
          </div>
          <div className="col-sm">
            <a href="http://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="http://www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="http://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
