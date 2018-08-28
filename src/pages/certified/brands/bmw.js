import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BMWBanner from '../../../images/banners/BMW-Header.jpg';
import BMWPhoto1 from '../../../images/photos/bmw/_BMW1.jpg';
import BMWPhoto2 from '../../../images/photos/bmw/_BMW2.jpg';
import BMWPhoto3 from '../../../images/photos/bmw/_BMW3.jpg';
import BMWPhoto4 from '../../../images/photos/bmw/_BMW4.jpg';

export default class BMWBrand extends React.Component {
  render() {
    return (
      <div>
        <div className="banner-fade">
          <img src={BMWBanner} id="banner" alt="BMW" />
        </div>
        <Container fluid>
          <div className="contained-text">
            <Row>
              <Col>
                <h1>BMW</h1>
                <hr />
                <p>
                  We are Broward County's only exclusive BMW Certified Collision Repair Center.
                </p>
                <p>
                  All repair work is done by BMW-trained technicians using BMW repair procedures and approved tools and equipment to meet BMW's repair specifications.   
                </p>
                <p>
                  Only Original BMW Parts are used.
                </p>
                <p>
                  Besides restoring the integrity and safety features of your BMW, all properly installed Original BMW Parts come with a two-year unlimited mileage limited warranty.
                </p>
                <p>
                  Only BMW Certified Collision Repair Centers possess the technology, tools, equipment and expertise to locate problems beneath the surface, delivering more accurate and precise diagnoses for repairs, both inside and out.
                </p>
                <p>
                  Our work comes with a lifetime guarantee.
                </p>
                <p>
                  Special courtesies for current BMW owners.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
