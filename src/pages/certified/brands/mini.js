import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MiniBanner from '../../../images/banners/MINI-Header.jpg';
import MiniPhoto2 from '../../../images/photos/mini/_MINI2.jpg';
import MiniPhoto3 from '../../../images/photos/mini/_MINI3.jpg';
import MiniPhoto4 from '../../../images/photos/mini/_MINI4.jpg';

export default class MiniBrand extends React.Component {
  render() {
    return (
      <div>
        <div className="banner-fade">
          <img src={MiniBanner} id="banner" alt="MINI" />
        </div>
        <Container fluid>
          <div className="contained-text" id="space">
            <Row>
              <Col md={12}>
                <h1>MINI</h1>
                <hr />
              </Col>
              <Col md={8}>
                <p>
                  To be part of a MINI-certified program, a collision repair center must be equipped with industry-leading diagnostic instruments, approved measuring equipment, spray booth systems, and a wide array of specialized tools and apparatus.
                </p>
                <p>
                  Serious repairs often require your MINI to be disassembled to some extent. From individual repairs to reassembly, Certified Collision Repair Center technicians use tools and procedures designed from vehicle blueprints for pinpoint accuracy.
                </p>
                <p>
                  Each technician at a MINI Certified Collision Repair Center completes hours and hours of rigorous MINI-specific training.
                </p>
              </Col>
              <Col md={4}>
                <img src={MiniPhoto2} id="brand-photos" alt="MINI" />
              </Col>
              <Col md={6}>
                <img src={MiniPhoto3} id="brand-photos" alt="MINI" />
              </Col>
              <Col md={6}>
                <p>
                  Make sure your MINI's repairs are up to your standards, which is easy with a MINI Certified Collision Repair Center.
                </p>
                <p>
                  We have a proven record of working successfully with insurance providers - including fully documented repair procedures.
                </p>
                <p>
                  All work performed by MINI Certified Collision Repair Centers is guaranteed to be carried out by trained staff using approved repair procedures, tools and equipment specified by MINI.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
