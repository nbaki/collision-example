import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AstonMartinBanner from '../../../images/banners/Aston-Header.jpg';
import AstonMartinPhoto1 from '../../../images/photos/aston-martin/_Aston1.jpg';
import AstonMartinPhoto3 from '../../../images/photos/aston-martin/_Aston3.jpg';
import AstonMartinPhoto4 from '../../../images/photos/aston-martin/_Aston4.jpg';

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
                <Row>
                  <Col>
                    <img src={AstonMartinPhoto1} id="brand-photos" />
                  </Col>
                </Row>
                <p>
                  We are a proud Aston Martin Certified Collision Repair Center.
                </p>
                <Row>
                  <Col>
                    <img src={AstonMartinPhoto3} id="brand-photos" />
                  </Col>
                </Row>
                <p>
                  Each member of our Lauderdale Collision team is uniquely certified to work on Aston Martin.
                </p>
                <p>
                  We use only original OEM parts and approved tools or equipment to repair your luxury auto.
                </p>

                <p>
                  Our collision work comes with a LIFETIME Guarantee on parts and labor for as long as you own/lease the vehicle.
                </p>
                <Row>
                  <Col>
                    <img src={AstonMartinPhoto4} id="brand-photos" />
                  </Col>
                </Row>
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
