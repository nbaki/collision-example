import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MapsImage from '../images/photos/mapshot.png';
import '../stylesheets/location.css';
import Hours from '../components/location/hours';
import Address from '../components/location/address';
import NavigationIcon from '../images/icons/navigation.svg';
import TimeIcon from '../images/icons/time.svg';

export default class Location extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <div className="location-intro banner-fade">
          <Container fluid>
            <Row>
              <Col>
                <div className="text-center">
                  <h1 id="intro-header">Hours and Directions</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="location-wrap">
          <Container fluid>
            <Row>
              <Col md={12}>
                <div id="map-wrap">
                  <a href="https://goo.gl/maps/5sz3EfzHeuB2" target="_blank" rel="noopener noreferrer">
                    <img src={MapsImage} id="map" alt="Map" />
                  </a>
                </div>
              </Col>
            </Row>
            <div className="address-hours-wrap">
              <Row>
                <Col md={6}>
                  <Address />
                </Col>
                <Col md={6}>
                  <Hours />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
