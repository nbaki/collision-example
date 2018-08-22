import React from 'react';
import '../stylesheets/certifications.css';
import { Container, Row, Col } from 'reactstrap';
import Brands from '../certified/brands';

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
          <Brands />
        </div>
      </div>
    );
  }
}
