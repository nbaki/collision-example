import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AstonMartinBanner from '../../../images/banners/Aston-Header.jpg';

export default class AstonMartinBrand extends React.Component {
  render() {
    return (
      <div>
        <div className="banner-fade">
          <img src={AstonMartinBanner} id="banner" alt="Aston Martin" />
        </div>
        <Container fluid>
          <div className="contained-text">
            <Row>
              <Col>
                <h1>Aston Martin</h1>
                <hr />
                <p>
                  Our collision center and body shop, Lauderdale Collision, offers top-notch equipment and highly-trained technicians who know exactly how to handle your incredible car.
                </p>
                <p>
                  We are a proud Aston Martin Certified Collision Repair Center.
                </p>
                <p>
                  Each member of our Lauderdale Collision team is uniquely certified to work on Aston Martin.
                </p>
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
