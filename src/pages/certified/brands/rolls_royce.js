import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RollsRoyceBanner from '../../../images/banners/Rolls-Royce-Header.jpg';
import RollsRoycePhoto1 from '../../../images/photos/rolls-royce/_Rolls1.jpg';
import RollsRoycePhoto2 from '../../../images/photos/rolls-royce/_Rolls2.jpg';

export default class RollsRoyceBrand extends React.Component {
  render() {
    return (
      <div>
        <div className="banner-fade">
          <img src={RollsRoyceBanner} id="banner" alt="Rolls Royce" />
        </div>
        <Container fluid>
          <div className="contained-text" id="space">
            <Row>
              <Col md={12}>
                <h1 className="in-up">Rolls Royce</h1>
                <hr />
              </Col>
              <Col md={8}>
                <div className="in-left">
                  <p>
                    Our collision center and body shop, Lauderdale Collision, offers top-notch equipment and highly-trained technicians who know exactly how to handle your incredible car.
                  </p>
                  <p>
                    We are a proud Rolls-Royce Certified Collision Repair Center.
                  </p>
                  <p>
                    Each member of our Lauderdale Collision team is uniquely certified to work on Rolls-Royce.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <img src={RollsRoycePhoto1} className="in-up" id="brand-photos" alt="rolls-royce" />
              </Col>
              <Col md={4}>
                <img src={RollsRoycePhoto2} className="in-up" id="brand-photos" alt="rolls-royce" />
              </Col>
              <Col md={8}>
                <div className="in-right">
                  <p>
                    We use only original OEM parts and approved tools or equipment to repair your luxury auto.
                  </p>
                  <p>
                    Our collision work comes with a LIFETIME Guarantee on parts and labor for as long as you own/lease the vehicle.
                  </p>
                  <p>
                    Complimentary Flatbed service.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
