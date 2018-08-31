import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BentleyBanner from '../../../images/banners/Bentley-Header.jpg';
import BentleyPhoto1 from '../../../images/photos/bentley/Bentley1.jpg';
import BentleyPhoto2 from '../../../images/photos/bentley/Bentley2.jpg';
import BentleyPhoto3 from '../../../images/photos/bentley/Bentley3.jpg';

export default class BentleyBrand extends React.Component {
  render() {
    return (
      <div>
        <div className="banner-fade">
          <img src={BentleyBanner} id="banner" alt="Bentley" />
        </div>
        <Container fluid>
          <div className="contained-text" id="space">
            <Row>
              <Col md={12}>
                <h1>Bentley</h1>
                <hr />
              </Col>
              <Col md={4}>
                <p>
                  Our collision center and body shop, Lauderdale Collision, offers top-notch equipment and highly-trained technicians who know exactly how to handle your incredible car.
                </p>
                <p>
                  We are a proud Bentley Certified Collision Repair Center.
                </p>
                <p>
                  Each member of our Lauderdale Collision team is uniquely certified to work on Bentley.
                </p>
              </Col>
              <Col md={8}>
                <img src={BentleyPhoto1} id="brand-photos" alt="Bentley" />
              </Col>
              <Col md={4}>
                <img src={BentleyPhoto2} id="brand-photos" alt="Bentley" />
              </Col>
              <Col md={8}>
                <p>
                  We use only original OEM parts and approved tools or equipment to repair your luxury auto.
                </p>
                <p>
                  Our collision work comes with a LIFETIME Guarantee on parts and labor for as long as you own/lease the vehicle.
                </p>
                <p>
                  Complimentary Flatbed service.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
