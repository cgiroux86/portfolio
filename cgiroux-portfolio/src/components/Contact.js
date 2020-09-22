import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPhone, faFile } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export default function Contact() {
  useEffect(() => {
    gsap.from(".contact_card", { opacity: 0, y: 200, x: 200, duration: 0.4 });
  }, []);
  return (
    <div className="contact_wrapper">
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
            center={{
              lat: 39.1427,
              lng: -76.8606,
            }}
            zoom={11}
            onGoogleApiLoaded={({ map, maps }) => {
              new maps.Marker({
                icon: {
                  strokeColor: "#FFFFFF",
                  strokeOpacity: 0.7,
                  strokeWeight: 2,
                  fillColor: "#4285F4",
                  fillOpacity: 1,
                  scale: 8,
                  anchor: new maps.Point(0, 0),
                },
                map,
                position: {
                  lat: 39.1427,
                  lng: -76.8606,
                },
                zIndex: -1,
              });
              new maps.Marker({
                icon: {
                  strokeColor: "transparent",
                  strokeOpacity: 0.7,
                  strokeWeight: 0,
                  fillColor: "#4285F4",
                  fillOpacity: 0.2,
                  path: maps.SymbolPath.CIRCLE,
                  scale: 20,
                  anchor: new maps.Point(0, 0),
                },
                map,
                position: {
                  lat: 39.1427,
                  lng: -76.8606,
                },
                zIndex: -1,
              });
            }}
          >
            <Marker lat={39.138997} lng={-76.870529} />
          </GoogleMapReact>
        </div>
        <div className="connect_container">
          <h2 className="connect_title">Connect</h2>
          <div className="connect">
            <FontAwesomeIcon
              style={{ color: "navy", fontSize: "1.5rem" }}
              icon={faLinkedinIn}
            />
            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faGithub} />
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#00acee" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
