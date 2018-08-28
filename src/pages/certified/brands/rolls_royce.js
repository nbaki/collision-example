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
          <div className="contained-text">
            <Row>
              <Col>
                <h1>Rolls Royce</h1>
                <hr />
                <p>
                  Our collision center and body shop, Lauderdale Collision, offers top-notch equipment and highly-trained technicians who know exactly how to handle your incredible car.
                </p>
                <p>
                  We are a proud Rolls-Royce Certified Collision Repair Center.
                </p>
                <p>
                  Each member of our Lauderdale Collision team is uniquely certified to work on Rolls-Royce.
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
