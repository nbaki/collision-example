import React from 'react';
import '../stylesheets/certifications.css';
import { Container, Row, Col } from 'reactstrap';

import AudiLogo from '../images/brands/audi.svg';
import AstonMartinLogo from '../images/brands/AstonMartin.svg';
import BMWLogo from '../images/brands/BMW.svg';
import BentleyLogo from '../images/brands/Bentley.svg';
import HondaLogo from '../images/brands/Honda.svg';
import InfinitiLogo from '../images/brands/INFINITI.svg';
import MiniLogo from '../images/brands/MINI.svg';
import RollsRoyceLogo from '../images/brands/RollsRoyce.svg';

export default class Certifications extends React.Component {

  render() {
    return (
      <div>
        <div className="certification-intro">
          <Container fluid>
            <Row>
              <Col>
                <h1 className="text-center" id="intro-header">Our Certifications</h1>
              </Col>
            </Row>
          </Container>
        </div>
        <Container fluid>
          <div className="contained-text">
            <Row>
              <Col>
                <p className="text-center">
                  We are proud to deliver a superior repair experience to each and every client. Our Certified
                  status reflects our commitment to investing in the right tools, equipment, and training to
                  maintain the value and safety of your vehicle after a collision repair.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="background-grad certified-block">
          <Container fluid>
            <div id="certified-icons-wrap">
              <Row>
                <Col>
                  <div className="certified-card">
                    <Row>
                      <Col md={6}>
                        <img id="brand-logo" src={AudiLogo} />
                      </Col>
                      <Col md={6}>
                        <div className="text-center">
                          <div id="brand-name">AUDI</div>
                          <a id="certified-link" href="/certified/brands/audi"><small>LEARN MORE ></small></a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col>
                  <div className="certified-card">
                    <Row>
                      <Col md={6}>
                        <img id="brand-logo" src={AstonMartinLogo} />
                      </Col>
                      <Col md={6}>
                        <div className="text-center">
                          <div id="brand-name">ASTON MARTIN</div>
                          <a id="certified-link" href="/certified/brands/aston_martin"><small>LEARN MORE ></small></a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="certified-card">
                    <Row>
                      <Col md={6}>
                        <img id="brand-logo" src={BMWLogo} />
                      </Col>
                      <Col md={6}>
                        <div className="text-center">
                          <div id="brand-name">BMW</div>
                          <a id="certified-link" href="/certified/brands/bmw"><small>LEARN MORE ></small></a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col>
                  <div className="certified-card">
                    <Row>
                      <Col md={6}>
                        <img id="brand-logo" src={BentleyLogo} />
                      </Col>
                      <Col md={6}>
                        <div className="text-center">
                          <div id="brand-name">BENTLEY</div>
                          <a id="certified-link" href="/certified/brands/bentley"><small>LEARN MORE ></small></a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="certified-card">
                    <Row>
                      <Col md={6}>
                        <img id="brand-logo" src={HondaLogo} />
                      </Col>
                      <Col md={6}>
                        <div className="text-center">
                          <div id="brand-name">HONDA</div>
                          <a id="certified-link" href="/certified/brands/honda"><small>LEARN MORE ></small></a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col>
                  <div className="certified-card">
                    <Row>
                      <Col md={6}>
                        <img id="brand-logo" src={InfinitiLogo} />
                      </Col>
                      <Col md={6}>
                        <div className="text-center">
                          <div id="brand-name">INFINITI</div>
                          <a id="certified-link" href="/certified/brands/infiniti"><small>LEARN MORE ></small></a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="certified-card">
                    <Row>
                      <Col md={6}>
                        <img id="brand-logo" src={MiniLogo} />
                      </Col>
                      <Col md={6}>
                        <div className="text-center">
                          <div id="brand-name">MINI</div>
                          <a id="certified-link" href="/certified/brands/mini"><small>LEARN MORE ></small></a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col>
                  <div className="certified-card">
                    <Row>
                      <Col md={6}>
                        <img id="brand-logo" src={RollsRoyceLogo} />
                      </Col>
                      <Col md={6}>
                        <div className="text-center">
                          <div id="brand-name">ROLLS ROYCE</div>
                          <a id="certified-link" href="/certified/brands/rolls_royce"><small>LEARN MORE ></small></a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
