import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AudiLogo from '../images/brands/Audi.svg';
import AstonMartinLogo from '../images/brands/AstonMartin.svg';
import BMWLogo from '../images/brands/BMW.svg';
import BentleyLogo from '../images/brands/BMW.svg'; 
import '../stylesheets/certifications.css';

export default class CertifiedBrands extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <div id="intro-icons-wrap">
            <Row>
              <Col md={6}>
                <div className="certified-card">
                  Audi
                  <img src={AudiLogo} />
                </div>
              </Col>
              <Col md={6}>
                <div className="certified-card">
                  ASTON MARTIN
                  <img src={AudiLogo} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="certified-card">
                  BMW
                  <img src={AudiLogo} />
                </div>
              </Col>
              <Col md={6}>
                <div className="certified-card">
                  BENTLEY
                  <img src={AudiLogo} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="certified-card">
                  HONDA
                  <img src={AudiLogo} />
                </div>
              </Col>
              <Col md={6}>
                <div className="certified-card">
                  INFINITI
                  <img src={AudiLogo} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="certified-card">
                  MINI
                  <img src={AudiLogo} />
                </div>
              </Col>
              <Col md={6}>
                <div className="certified-card">
                  ROLLSROYCE
                  <img src={AudiLogo} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}
