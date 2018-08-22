import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class HondaBrand extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <div className="contained-text">
            <Row>
              <Col>
                <h1>Honda</h1>
                <hr />
                <p>
                  All repair work is done by Honda-trained technicians using Honda repair procedures and approved tools and equipment to meet Honda's repair specifications.
                </p>
                <p>
                  Only Honda Genuine Parts are used to live up to the Honda reputation for quality, and to suit the specific performance of a Honda
                </p>
                <p>
                  Our staff is fully trained by I-CAR and ASE
                </p>
                <p>
                  Peace of mind knowing your vehicle is in the hands of a professional.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
