import { Container, Row , Col} from "reactstrap";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import '../styles/Contact.css';
import customMarkerIcon from '../assests/delivery-man-svgrepo-com.png';

function Contact(){
  const shopLocation = [12.991133, 80.242908]; // Replace with your actual shop's coordinates

  // for icon on map
  const customIcon= new L.Icon({
    iconUrl:customMarkerIcon,
    iconSize:[40,40],
    iconAnchor:[16,32],
    popupAnchor:[0,-32]

  });
  return (
    <Container fluid className="contact">
      <div className="contact-overall">
        <Row>
          <Col lg="6" md="6" sm="6" xs="12" className="contact-left">
            <h2>
              contact us
            </h2>
            <div className="con-lef-div">
              <input type="text" placeholder="Name" />
              <br />
              <input type="email" placeholder="Email" />
              <br />
              <input type="text" placeholder="Mobile Number" />
              <br />
              <textarea name="" id="" cols="30" rows="7"></textarea>
              <br />
              <button type="submit" className="btn btn-dark fw-400">
                submit
              </button>
            </div>
          </Col>
          <Col lg="6" md="6" sm="6" xs="12" className="contact-right">
            <div>
              <MapContainer
                className="map-cont"
                center={shopLocation}
                zoom={15}
                style={{ height: "400px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={shopLocation} icon={customIcon}>
                  <Popup>Harini Dairy</Popup>
                </Marker>
              </MapContainer>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Contact;