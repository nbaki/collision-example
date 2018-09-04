import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import InfinitiBanner from '../../../images/banners/Infiniti-Header.jpg';
import InfinitiPhoto1 from '../../../images/photos/infiniti/_Infiniti1.jpg';
import InfinitiPhoto2 from '../../../images/photos/infiniti/_Infiniti2.jpg';

export default class InfinitiBrand extends React.Component {
  render() {
    return (
      <div>
        <div className="banner-fade">
          <img src={InfinitiBanner} id="banner" alt="INFINITI" />
        </div>
        <Container fluid>
          <div className="contained-text" id="space">
            <Row>
              <Col md={12}>
                <h1 className="in-up">INFINITI</h1>
                <hr />
              </Col>
              <Col md={8}>
                <div className="in-left">
                  <p>
                    Enjoy the many benefits of choosing an INFINITI Certified Collision Repair Facility, including:
                  </p>
                  <ul>
                    <li>
                      Adherence to INFINITI's strict repair standards.
                    </li>
                    <li>
                      Prioritized use of Genuine INFINITI replacement parts.
                    </li>
                    <li>
                      Compliance with all vehicle warranties.
                    </li>
                    <li>
                      Peace of mind knowing your vehicle is in the hands of a professional.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4}>
                <img src={InfinitiPhoto1} className="in-up" id="brand-photos" alt="INFINITI" />
              </Col>
              <Col md={4}>
                <img src={InfinitiPhoto2} className="in-up" id="brand-photos" alt="INFINITI" />
              </Col>
              <Col md={8}>
                <div className="in-right">
                  <p>
                    Besides being an INFINITI Certified Collision Repair Facility, there are many other benefits to having your car repaired at the Lauderdale Collision Center.
                  </p>
                  <ul>
                    <li>
                      Work comes with a Lifetime guarantee.
                    </li>
                    <li>
                      We are an authorized repair center for all insurance companies.
                    </li>
                    <li>
                      The collision center has been in operation for over 30 years.
                    </li>
                    <li>
                      Our staff is fully trained by I-Car and ASE.
                    </li>
                    <li>
                      We are equipped to handle all makes and models.
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
