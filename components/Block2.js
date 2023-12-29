import { Container, Row, Col } from "reactstrap";
import "../styles/Block2.css";
import Milk from "../assests/milk.png";
import Panner from '../assests/panner.png';
import Curd from '../assests/curd.png';
import Palkova from '../assests/palkova.png';
import Butter from '../assests/butter.png';
import Ghee from '../assests/ghee.png';

function Block2() {
  return (
    <Container fluid className="block2 text-center">
      <Row>
        <h3 className="block2-head">Our Products</h3>
        <Col lg="4" md="4" sm="4" xs="4">
          <img className="product-img" src={Milk} alt="" />

          <p>milk</p>
        </Col>
        <Col lg="4" md="4" sm="4" xs="4">
          <img
            src={Panner}
            className="product-img"
            alt=""
          />
          <p>Panner</p>
        </Col>
        <Col lg="4" md="4" sm="4" xs="4">
          <img
            src={Curd}
            className="product-img"
            alt=""
          />

          <p>Curd</p>
        </Col>
        <Col lg="4" md="4" sm="4" xs="4">
          <img
            className="product-img"
            src={Palkova}
            alt=""
          />
          <p>pal kova</p>
        </Col>
        <Col lg="4" md="4" sm="4" xs="4">
          <img
            src={Butter}
            className="product-img"
            alt=""
          />

          <p>Panner</p>
        </Col>
        <Col lg="4" md="4" sm="4" xs="4">
          <img
            src={Ghee}
            className="product-img"
            alt=""
          />

          <p>Curd</p>
        </Col>
      </Row>
    </Container>
  );
}
export default Block2;
