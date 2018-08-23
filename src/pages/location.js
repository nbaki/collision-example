import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import MapsImage from '../images/photos/mapshot.png';
import '../stylesheets/location.css';

export default class Location extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th>Hours</th>
                  </tr>
                </thead>
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
          <Row>
            <Col>
              <img src={MapsImage} id="map" alt="Map" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
