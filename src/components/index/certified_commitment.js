import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../stylesheets/index.css';
import '../../stylesheets/style.css';

export default class CertifiedCommitment extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <div className="contained-text">
            <Row>
              <Col>
                <h1 className="text-center" id="certified-header">Our Certified Commitment.</h1>
                <p>
                  Lauderdale Collision Center is a manufacturer-certified Audi, Aston Martin, BMW, Bentley, Honda, INFINITI, MINI, and Rolls-Royce  body shop located in Fort Lauderdale, Florida.
                  Our team of ASE-certified technicians and certified Body Shop Professionals have the parts, tools and expertise to repair your vehicle's damage. We repair all makes and models,
                  and offer a lifetime guarantee on paint and workmanship for the current vehicle owner in addition to any manufacturer’s warranty on factory (OEM) parts. We also offer special services like aluminum repair.
                </p>
                <p>
                  The Lauderdale Collision team provides convenient and friendly support through every step of the repair process. We can coordinate vehicle towing, assist with a rental vehicle
                  from our onsite Enterprise Rent-A-Car office, work with your insurance company, and communicate to you as our technicians work to fix your vehicle quickly and correctly the first time.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
