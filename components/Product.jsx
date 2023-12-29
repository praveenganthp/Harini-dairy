import { Col, Container, Row } from "reactstrap";
import '../styles/Product.css';

function Product() {
  return (
    <Container fluid>
      <Row>
        <Col className="product-images">
          <img
            src="https://th.bing.com/th/id/R.b9959967c6a439b9074894ebd92c65fe?rik=pH2WWRs0cSOoyQ&riu=http%3a%2f%2fonedaycart.com%2fodcb%2fwp-content%2fuploads%2f2016%2f05%2fcurd-recipes.jpg&ehk=rsMnMp3hNDV3ArjeV2ZHrb%2fUp7X3S9aRJrDGJZni67M%3d&risl=1&pid=ImgRaw&r=0"
            alt=""
          />
          <img src="" alt="" />
          <img src="" alt="" />
        </Col>
      </Row>
    </Container>
  );
}
export default Product;
