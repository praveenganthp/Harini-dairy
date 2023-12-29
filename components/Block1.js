import { Container,Row,Col } from "reactstrap";
import '../styles/Block1.css';
import sVg2 from "../assests/delivery-man-svgrepo-com.png";
import sVg3 from "../assests/secure-svgrepo-com.png";



function Block1 (){
    return (
      <Container fluid className="block1">
        <Row>
          <h4 className="text-center">what we serve</h4>
          <h1 className="text-center">
            Dairy products delivered <br /> To your Home
          </h1>
          <br />
          <br />
          <div className="block1-pad">
            <div className="grid">
              <div className="card serve-card">
                <div className="serve-card-back">
                  <span className="icon">
                    <svg
                      className="home-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      fill="#000000"
                    >
                      <g id="free-shipping">
                        <circle className="cls-1" cx="53" cy="17" r="2" />
                        <circle cx="45.5" cy="23.5" r="1.0691" />
                        <circle cx="16.5" cy="14.5" r="1.0691" />
                        <polyline
                          className="cls-1"
                          points="53.934 54 61 54 61 43.485 54 40 49.476 31 39.173 31"
                        />
                        <line
                          className="cls-1"
                          x1="20.6727"
                          x2="44.1886"
                          y1="54"
                          y2="54"
                        />
                        <polyline
                          className="cls-1"
                          points="10.748 24 3 24 3 54 10.894 54"
                        />
                        <polyline
                          className="cls-1"
                          points="39 49 39 24 32.161 24"
                        />
                        <line
                          className="cls-1"
                          x1="43"
                          x2="45"
                          y1="44"
                          y2="44"
                        />
                        <circle
                          className="cls-1"
                          cx="49.0802"
                          cy="54.75"
                          r="4.75"
                        />
                        <circle
                          className="cls-1"
                          cx="15.7406"
                          cy="54.75"
                          r="4.75"
                        />
                        <polyline
                          className="cls-1"
                          points="26 37 23 37 23 43 26 43"
                        />
                        <line
                          className="cls-1"
                          x1="26"
                          x2="23"
                          y1="40"
                          y2="40"
                        />
                        <polyline
                          className="cls-1"
                          points="32 37 29 37 29 43 32 43"
                        />
                        <line
                          className="cls-1"
                          x1="32"
                          x2="29"
                          y1="40"
                          y2="40"
                        />
                        <polyline
                          className="cls-1"
                          points="13 37 10 37 10 43"
                        />
                        <line
                          className="cls-1"
                          x1="13"
                          x2="10"
                          y1="40"
                          y2="40"
                        />
                        <path
                          className="cls-1"
                          d="M16,43V37h2.6439A1.3562,1.3562,0,0,1,20,38.3561v.2878A1.3562,1.3562,0,0,1,18.6439,40H17l3,3"
                        />
                        <path
                          className="cls-1"
                          d="M31.5561,22.7505,27.623,17.8342a2.0742,2.0742,0,0,0-2.598-.5845,2.001,2.001,0,0,0-.5919,3l1.4,1.75H12.9946a2,2,0,0,0-2,2h0a2,2,0,0,0,2,2H25.8335l-1.317,1.6462a2.1129,2.1129,0,0,0,.2609,2.9407,2,2,0,0,0,2.7787-.3374l4-5A2,2,0,0,0,31.5561,22.7505Z"
                        />
                        <line
                          className="cls-1"
                          x1="33"
                          x2="30"
                          y1="7"
                          y2="10"
                        />
                        <line
                          className="cls-1"
                          x1="30"
                          x2="33"
                          y1="7"
                          y2="10"
                        />
                        <line
                          className="cls-2"
                          x1="39"
                          x2="54"
                          y1="40"
                          y2="40"
                        />
                        <line
                          className="cls-2"
                          x1="3"
                          x2="61"
                          y1="50"
                          y2="50"
                        />
                      </g>
                    </svg>
                  </span>
                  <h4>Free shipping</h4>
                  <p>
                    enjoy order in a hand
                    <br /> using the freshness of groceries
                  </p>
                </div>
              </div>
              <div className="card serve-card">
                <div className="serve-card-back">
                  <span className="icon">
                    <img src={sVg2} alt="" className="home-card-img" />
                  </span>
                  <h4>Super fast delivery</h4>
                  <p>
                    Order in a handy way
                    <br /> using the freshness of the groceries.
                  </p>
                </div>
              </div>
              <div className="card serve-card">
                <div className="serve-card-back">
                  <span className="icon">
                    <img src={sVg3} alt="" className="home-card-img" />
                  </span>
                  <h4>Secure checkout</h4>
                  <p>
                    If you get rotten items
                    <br /> - return immediately to us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    );
}

export default Block1;