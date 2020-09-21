import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
export function MapComponent(props) {
  return (
    <div className="map-wrapper">
      <Map
        key={new Date().getTime()}
        google={props.google}
        zoom={10}
        center={{
          lat: 100,
          lng: -100,
        }}
      >
        <Marker
          key="marker_1"
          position={{
            lat: 39.139,
            lng: -76.8705,
          }}
        />
      </Map>
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBmsu_PRrjasc_CbMmy4Q_1JOLt-O2paE0",
})(MapComponent);
