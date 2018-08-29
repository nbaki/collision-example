import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import EnterprisesLogo from '../../images/assets/HolmanEnterprisesLogo.svg';
import AutomotiveLogo from '../../images/assets/HolmanAutomotiveLogo.svg';
import CollisionLogo from '../../images/assets/CollisionLogo.svg';

export default class History extends React.Component {
  render() {
    return (
      <div className="background-history">
        <Container fluid>
          <div id="history-wrap">
            <Row>
              <Col md={12}>
                <h1 className="text-center" id="history-header">More about our history and Holman.</h1>
                <p className="text-center" id="history-text">
                  It began with a single Ford dealership in 1924.  Today, Holman is an international automotive services
                  company encompassing six business segments that support diverse sectors of the automotive market.
                </p>
              </Col>
              <Col md={12}>
                <div className="text-center">
                  <a href="https://www.holmanauto.com/about-holman.htm" target="_blank" rel="noopener noreferrer">
                    <button id="history-btn" className="btn btn-default">READ OUR STORY</button>
                  </a>
                </div>
              </Col>
            </Row>
            <div className="holman-icon-wrap">
              <Row>
                <Col>
                  <img src={EnterprisesLogo} id="history-icons" alt="Holman Enterprises" />
                </Col>
                <Col>
                  <img src={AutomotiveLogo} id="history-icons" alt="Holman Automotive" />
                </Col>
                <Col>
                  <img src={CollisionLogo} id="history-icons" alt="Holman Collision" />
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
