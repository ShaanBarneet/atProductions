import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Maps = compose(
  withProps({
    googleMapURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1196483547274!2d85.82262471444224!3d20.295314086400193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19096cf8b98219%3A0xadf998bc6346707c!2sJaydev%20Vihar%20Square!5e0!3m2!1sen!2sin!4v1675003323375!5m2!1sen!2sin",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
  </GoogleMap>
));

// function Maps() {
//   return (
//     <iframe
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1196483547274!2d85.82262471444224!3d20.295314086400193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19096cf8b98219%3A0xadf998bc6346707c!2sJaydev%20Vihar%20Square!5e0!3m2!1sen!2sin!4v1675003323375!5m2!1sen!2sin"
//       width="400"
//       height="300"
//       style="border:0;"
//       allowFullScreen
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//     ></iframe>
//   );
// }

export default Maps;
