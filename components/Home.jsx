import { React, useEffect } from "react";
import {  useAnimation } from "framer-motion";
import { Col, Container, Row } from "reactstrap";
import "../styles/Home.css";

import HomeLftimg from "../assests/home.png.png";

function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <Container fluid className="home">
      {/* ... rest of your code */}

      <Row>
        <Col className="home-left" lg="6" md="6" sm="6" xs="6">
          <div className="welcome-para">
            <div>
              <h1 className="">
                Welcome to Harini <br /> Your Source for <br /> Dairy Delights
              </h1>
              <p>
                At Harini, Indulge in the pure essence of our dairy products,
                <br />
                where quality meets flavor in every wholesome bite. <br />{" "}
                Crafted with care and precision, our dairy offerings <br />
                promise a symphony of richness and freshness
              </p>
              <button type="button" className="btn btn-dark home-but">
                {" "}
                Explore our products
              </button>
            </div>
          </div>
        </Col>
        <Col lg="6" md="6" sm="6" xs="6">
          <div className="home-left-img">
            <img src={HomeLftimg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
