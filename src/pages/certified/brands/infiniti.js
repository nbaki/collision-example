import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class InfinitiBrand extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <div className="contained-text">
            <Row>
              <Col>
                <h1>INFINITI</h1>
                <hr />
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
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
