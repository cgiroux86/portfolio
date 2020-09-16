import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPhone, faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Profile from "../images/profile.jpg";
import { gsap } from "gsap";

export default function Contact() {
  useEffect(() => {
    gsap.from(".contact_card", { opacity: 0, y: 200, duration: 0.4 });
  }, []);
  return (
    <div style={{ height: "100%", width: "80%", margin: "0 auto" }}>
      <div>
        <div className="img_wrapper">
          <img className="header_pic" src={Profile}></img>
          <div className="icons_wrapper">
            <Link to="/contact">
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <p>Contact</p>
            </Link>
            <div>
              <FontAwesomeIcon className="icon" icon={faDesktop} />
              <p>Projects</p>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon={faFile} />
              <p>Resume</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_card">
        <h2 className="contact_title">Contact</h2>
        <div className="contact_me">
          <div className="contact_type">
            <p style={{ fontWeight: "bold" }}>Email</p>
            <p>cgiroux86@gmail.com</p>
          </div>
          <div className="contact_type">
            <p style={{ fontWeight: "bold" }}>Phone</p>
            <p>301-875-9381</p>
          </div>
          <div className="contact_type">
            <p style={{ fontWeight: "bold" }}>Location</p>
            <p>Laurel, MD</p>
          </div>
        </div>
        <div className="map_wrapper">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBmsu_PRrjasc_CbMmy4Q_1JOLt-O2paE0",
            }}
            defaultCenter={{
              lat: 39.138997,
              lng: -76.870529,
            }}
            defaultZoom={10}
          ></GoogleMapReact>
        </div>
        <div>
          <h2>Connect</h2>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </div>
    </div>
  );
}
