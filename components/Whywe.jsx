import { Col, Container, Row } from "reactstrap";
import "../styles/Whywe.css";
import whyWe from "../assests/why_we.png";

function Whywe() {
  return (
    <Container fluid className="whywe">
      <Row>
        <h2>
          Why <br />
          We are the best
        </h2>
        <Col lg="5" md="5" sm="5" xs="12">
          <div className="whywe-left">
            <img src={whyWe} alt="" />
          </div>
        </Col>
        <Col lg="7" md="7" sm="7" xs="12">
          <div className="whywe-right">
            <Row>
              <Col lg="4" md="4" sm="4" xs="4" className="years-exp">
                <div>
                  {" "}
                  <h3>
                    <span>7+</span>
                    <br />
                    years of experience
                  </h3>
                </div>
              </Col>
              <Col lg="8" md="8" sm="8" xs="8" className="whywe-descrip">
                <p>
                  We've had quite a run in our 3+ years of operation with
                  successful project launches across all over the world
                </p>
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg="4" md="4" sm="4" xs="4" className="years-exp">
                <div>
                  {" "}
                  <h3>
                    <span>5</span>
                    <br />
                    clients
                  </h3>
                </div>
              </Col>
              <Col lg="8" md="8" sm="8" xs="8" className="whywe-descrip">
                <p>
                  We believe that the surest measure of success is when a client
                  partners with us more than once. Over half our clients stay
                  with us for longer than a single project.
                </p>
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg="4" md="4" sm="4" xs="4" className="years-exp">
                <div>
                  {" "}
                  <h3>
                    <span>150+</span>
                    <br />
                    customers
                  </h3>
                </div>
              </Col>
              <Col lg="8" md="8" sm="8" xs="8" className="whywe-descrip">
                <p>
                  We've had quite a run in our 3+ years of operation with
                  successful project launches across all over the world
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Whywe;
