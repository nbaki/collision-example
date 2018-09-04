import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AudiBanner from '../../../images/banners/Audi-Header.jpg'
import AudiPhoto1 from '../../../images/photos/audi/_Audi1.jpg';
import AudiPhoto2 from '../../../images/photos/audi/_Audi2.jpg';

export default class AudiBrand extends React.Component {
  render() {
    return (
      <div>
        <div className="banner-fade">
          <img src={AudiBanner} id="banner" alt="Audi" />
        </div>
        <Container fluid>
          <div className="contained-text" id="space">
            <Row>
              <Col md={12}>
                <h1 className="in-up">Audi</h1>
                <hr />
              </Col>
              <Col md={8}>
                <div className="in-left">
                  <p>
                    This facility meets Audi's exacting repair standards and uses Audi Genuine Parts backed by the factory warranty.
                  </p>
                  <p>
                    While the three parties involved in most collision repairs are the vehicle owner, the insurance company and the collision professional,
                    you are the one who decides where your vehicle will be repaired.  As the owner or lessee, you have the right to know in advance what parts are proposed,
                    and decide which ones are ultimately used, for the repair of your vehicle.  
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <img src={AudiPhoto1} className="in-up" id="brand-photos" alt="audi" />
              </Col>
              <Col md={4}>
                <img src={AudiPhoto2} className="in-up" id="brand-photos" alt="audi" />
              </Col>
              <Col md={8}>
                <div className="in-right">
                  <p>
                    Lauderdale Collision Center uses only Audi Genuine Parts that are backed by the Audi Manufacturer Vehicle Warranty. 
                  </p>
                  <p>
                    All technicians underwent extensive training in the proper use of the Audi factory-approved repair equipment,
                    tools and technologies to ensure the repair meets Audi's exact standards.
                  </p>
                  <p>
                    Our goal as an Audi Authorized Collision Repair Facility, is to bring your Audi back to its pre-crash condition. 
                    We call it, "Fixed Right, First Time." In short - you can rely on Audi excellence.
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
