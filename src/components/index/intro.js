import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../stylesheets/index.css';
import '../../stylesheets/style.css';
import ScheduleIcon from '../../images/icons/schedule.svg';
import CertificationIcon from '../../images/icons/certified.svg';

export default class Intro extends React.Component {
  render() {
    return (
      <div className="background-intro">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="text-center" id="intro-header">All the tools and expertise <br />to repair your vehicle.</h1>
            </Col>
          </Row>
        </Container>
        <div className="background-blue-bar">
          <Container fluid>
            <div className="intro-icons-wrap">
              <Row>
                <Col sm={6} className="hover-expand">
                  <img src={ScheduleIcon} id="intro-icons" />
                  <div id="intro-text">
                    <p>
                      Schedule Appointment
                    </p>
                    <small>LEARN MORE ></small>
                  </div>
                </Col>
                <Col sm={6} className="hover-expand vertical-side">
                  <img src={CertificationIcon} id="intro-icons" />
                  <div id="intro-text">
                    <a href="/pages/certifications">
                      <p>
                        Our Certifications
                      </p>
                      <small>LEARN MORE ></small>
                    </a>
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
