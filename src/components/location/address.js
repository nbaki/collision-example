import React from 'react';
import { Button, Collapse, Card, CardBody } from 'reactstrap';

export default class Address extends React.Component {
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
          <Button outline color="secondary" size="lg" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Address</Button>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <a href="https://goo.gl/maps/5sz3EfzHeuB2" target="_blank" rel="noopener noreferrer">
                900 N Andrews Ave <br />
                Fort Lauderdale, FL 33304
              </a>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}
