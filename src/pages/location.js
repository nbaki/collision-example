import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import MapsImage from '../images/photos/mapshot.png';
import '../stylesheets/location.css';
import TimeIcon from '../images/icons/time.svg';

export default class Location extends React.Component {
  render() {
    return (
      <div>
        <div className="location-intro banner-fade">
          <Container fluid>
            <Row>
              <Col>
                <div className="text-center">
                  <h1 id="intro-header">Location</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="location-wrap">
          <Container fluid>
            <Row>
              <Col md={4}>
                <div id="address-text">
                  <a href="https://goo.gl/maps/5sz3EfzHeuB2" target="_blank" rel="noopener noreferrer">
                    900 N Andrews Ave <br />
                    Fort Lauderdale, FL 33304
                  </a>
                </div>
                <hr />
                <div id="hours-wrap">
                  <Row>
                    <Col>
                      <div className="text-center">
                        <h2 id="hours-header"><img src={TimeIcon} id="time-icon" alt="hours" /> Hours</h2>
                      </div>
                      <Table>
                        <tbody>
                          <tr>
                            <td>Monday</td>
                            <td className="float-right">8:00 AM - 5:00 PM</td>
                          </tr>
                          <tr>
                            <td>Tuesday</td>
                            <td className="float-right">8:00 AM - 5:00 PM</td>
                          </tr>
                          <tr>
                            <td>Wednesday</td>
                            <td className="float-right">8:00 AM - 5:00 PM</td>
                          </tr>
                          <tr>
                            <td>Thursday</td>
                            <td className="float-right">8:00 AM - 5:00 PM</td>
                          </tr>
                          <tr>
                            <td>Friday</td>
                            <td className="float-right">8:00 AM - 5:00 PM</td>
                          </tr>
                          <tr>
                            <td>Saturday</td>
                            <td className="float-right">8:00 AM - 12:00 PM</td>
                          </tr>
                          <tr>
                            <td>Sunday</td>
                            <td className="float-right">Closed</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={8}>
                <div>
                  <a href="https://goo.gl/maps/5sz3EfzHeuB2" target="_blank" rel="noopener noreferrer">
                    <img src={MapsImage} id="map" alt="Map" />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
