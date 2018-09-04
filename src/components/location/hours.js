import React from 'react';
import { Button, Collapse, Card, CardBody, Table } from 'reactstrap';

export default class Hours extends React.Component {
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
        <div className="text-center">
          <Button outline color="secondary" size="lg" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Hours</Button>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
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
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}
