import { Container, Col, Row } from "reactstrap";
import "../styles/Founder.css";
import FounDer from "../assests/founder.png";

function Founder() {
  return (
    <Container fluid className="founder">
      <Row className="testimonal1">
        
        <div className="found-head">
          <h2>Meet <br /> Mr.Subash Chandra Bose</h2>
          <p>-founder of Harini</p>
        </div>

        <Col lg="6" md="6" sm="6" xs="12">
          <div className="testimonal-img">
            <img src={FounDer} alt="" />
          </div>
        </Col>
        <Col lg="6" md="6" sm="6" xs="12">
          <div className="testimonal-content">
            <p>
              In this example, the filter: drop-shadow(0 4px 8px rgba(0, 0, 0,
              0.1)); applies a drop shadow to the image. The parameters inside
              the drop-shadow() function are similar to those in the box-shadow
              property. You can adjust the values (horizontal offset, vertical
              offset, blur radius, and color) to achieve the desired drop shadow
              effect. The filter property is used here to apply the drop shadow,
              and the drop-shadow() function is part of the CSS Filter Effects
              Module. In this example, the filter: drop-shadow(0 4px 8px rgba(0,
              0, 0, 0.1)); applies a drop shadow to the image. The parameters
              inside the drop-shadow() function are similar to those in the
              box-shadow property. You can adjust the values (horizontal offset,
              vertical offset, blur radius, and color) to achieve the desired
              drop shadow effect. The filter property is used here to apply the
              drop shadow, and the drop-shadow() function is part of the CSS
              Filter Effects Module.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Founder;
