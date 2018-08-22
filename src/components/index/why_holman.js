import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import FacilityIcon from '../../images/icons/facility.svg';
import TechsIcon from '../../images/icons/techs.svg';
import GuaranteeIcon from '../../images/icons/guarantee.svg';

export default class WhyHolman extends React.Component {
  render() {
    return (
        <div className="background-grad">
          <Container fluid>
            <div id="why-holman-wrap">
              <Row>
                <Col md={12}>
                  <h1 className="text-center" id="why-holman">Why Holman Collision?</h1>
                </Col>
                <Col md={4}>
                  <div id="why-holman-block-wrap" className="hover-expand">
                    <img src={FacilityIcon} id="why-holman-icons" />
                    <div className="text-center">
                      State of the Art <br />Facility
                    </div>
                    <div id="why-line">
                    </div>
                    <p class="text-center">
                      <small>Using state of the art machinery we can spot everything down to the slightest fracture</small>
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div id="why-holman-block-wrap" className="hover-expand">
                    <img src={TechsIcon} id="why-holman-icons" />
                    <div className="text-center">
                      Certified <br />Technicians
                    </div>
                    <div id="why-line" >
                    </div>
                    <p class="text-center">
                      <small>Our technicians are factory certified to ensure your vehicle is returned to like new</small>
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div id="why-holman-block-wrap" className="hover-expand">
                    <img src={GuaranteeIcon} id="why-holman-icons" />
                    <div className="text-center">
                      Lifetime <br /> Guarantee
                    </div>
                    <div id="why-line" ></div>
                    <p className="text-center">
                      <small>Our work comes with a lifetime guarantee for the entirety of your ownership</small>
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
