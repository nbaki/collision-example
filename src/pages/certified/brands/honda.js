import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import HondaBanner from '../../../images/banners/Honda-Header.jpg';
import HondaPhoto1 from '../../../images/photos/honda/_Honda1.jpg';
import HondaPhoto2 from '../../../images/photos/honda/_Honda2.jpg';

export default class HondaBrand extends React.Component {
  render() {
    return (
      <div>
        <div className="banner-fade">
          <img src={HondaBanner} id="banner" alt="Honda" />
        </div>
        <Container fluid>
          <div className="contained-text">
            <Row>
              <Col md={12}>
                <h1>Honda</h1>
                <hr />
              </Col>
              <Col md={6}>
                <p>
                  All repair work is done by Honda-trained technicians using Honda repair procedures and approved tools and equipment to meet Honda's repair specifications.
                </p>
                <p>
                  Only Honda Genuine Parts are used to live up to the Honda reputation for quality, and to suit the specific performance of a Honda.
                </p>
              </Col>
              <Col md={6}>
                <img src={HondaPhoto1} id="brand-photos" alt="Honda" />
              </Col>
              <Col md={6}>
                <img src={HondaPhoto2} id="brand-photos" alt="Honda" />
              </Col>
              <Col md={6}>
                <p>
                  Our staff is fully trained by I-CAR and ASE.
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
