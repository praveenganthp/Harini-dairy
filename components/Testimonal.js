import { Container, Row, Col } from "reactstrap";
import "../styles/Testimonal.css";
import What_we_do from "../assests/watch_how_we.png";

function Testimonal() {
  return (
    <Container fluid className="testimonal">
      <Row className="testimonal2">
        <Col className="youtubevideo" lg="12" md="12" sm="12" xs="12">
          <h2>Watch how we made for you</h2>
          <div className="watch-video">
            <img className="watch-video-img" src={What_we_do} alt="" />
            <a
              href="https://www.youtube.com/watch?v=XWJ1sn3QC2c&list=RDAZeU5_YpqsA&index=11"
              target="blank"
            >
              {" "}
              <img
                className="play-button-img"
                src="https://th.bing.com/th/id/R.769109050d360c743deef7977cf51185?rik=TnxLPi%2bjaCAymg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fncE%2fBRG%2fncEBRGpLi.png&ehk=vDHmz7REt9el2ux1lOxcXcW9coIr%2bXrsZqMxnS1XiMs%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Testimonal;

/* <iframe
            width="100%" 
            height="100%"
            src="https://www.youtube.com/embed/H2YXo9L6l-s"
            frameborder="0"
            allowfullscreen
            title="youtube video"
          ></iframe> */
