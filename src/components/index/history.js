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
                  <a href="https://www.holmanauto.com/about-holman.htm" target="_blank">
                    <button id="history-btn" className="btn btn-default">READ OUR STORY</button>
                  </a>
                </div>
              </Col>
            </Row>
            <div className="holman-icon-wrap">
              <Row>
                <Col md={4}>
                  <img src={EnterprisesLogo} id="history-icons" />
                </Col>
                <Col md={4}>
                  <img src={AutomotiveLogo} id="history-icons" />
                </Col>
                <Col md={4}>
                  <img src={CollisionLogo} id="history-icons" />
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}



<div class="background-history">
    <div class="container-fluid">
      <div id="history-wrap">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center" id="history-header"></h1>

          </div>
          <div class="col-md-12">
            <div class="text-center">
              <a href="https://www.holmanauto.com/about-holman.htm" target="_blank">
                <button id="history-btn" class="btn btn-default">READ OUR STORY</button>
              </a>
            </div>
          </div>
        </div>
        <div class="holman-icon-wrap">
          <div class="row">
            <div class="col-md-4 col-sm-4">
              <img src="src/images/assets/HolmanEnterprisesLogo.svg" id="history-icons" />
            </div>
            <div class="col-md-4 col-sm-4 vertical-side">
              <img src="src/images/assets/HolmanAutomotiveLogo.svg" id="history-icons" />
            </div>
            <div class="col-md-4 col-sm-4 vertical-side">
              <img src="src/images/assets/CollisionLogo.svg" id="history-icons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
