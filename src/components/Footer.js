/* const Footer = () => {
  return (
    <footer
      className="text-center bg-dark p-3 fixed-bottom"
      style={{ marginTop: "30px" }}
    >
      <p className="text-light">Copyright 2022</p>
    </footer>
  );
};

export default Footer; */

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer bg-dark p-3 pb-0">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Achtsam & Heilsam</h4>
            <ul className="list-unstyled">
              <li>Praxis für ganzheitliche Lebensweise</li>
              <li>Familienstellen/ Aufstellungen</li>
              <li>Stärkung des eigenen Potentials</li>
              <li>Meditation</li>
              <li>Hochzeitszeremonien/ Rituale</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>So erreichen Sie mich</h4>
            <ul className="list-unstyled">
              <li>Marktstraße 14</li>
              <li>99423 Weimar</li>
              <li>mail@achtsam-heilsam.de</li>
              <li>03643 49 09 86</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <p>
              <iframe
                title="myAddres"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.956959941812!2d11.32652641591051!3d50.97998615694794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a41ac4a28ab31b%3A0x89f9578721c8c920!2sMarktstra%C3%9Fe%2014%2C%2099423%20Weimar!5e0!3m2!1sen!2sde!4v1643568240022!5m2!1sen!2sde"
                width="300"
                height="200"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </p>
          </div>
          <hr />
        </div>

        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} ACHTSAM&HEILSAM | Alle Rechte
            vorbehalten |
            <a
              href="./haftung"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Haftungshinweis & Datenschutz
            </a>{" "}
            | Made with{" "}
            <svg
              viewBox="0 0 1792 1792"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "0.8rem" }}
            >
              <path
                d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
                fill="#e25555"
              ></path>
            </svg>{" "}
            by Irfan
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
