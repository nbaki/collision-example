import React from 'react';
import { NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import DateIcon from '../../images/icons/date.svg';

export default class ScheduleAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <NavLink onClick={this.toggle}>{this.props.buttonLabel}SCHEDULE APPOINTMENT</NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><img src={DateIcon} id="date-icon" alt="date-icon" /> Schedule Appointment</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input type="fistName" name="firstName" id="firstName" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input type="lastName" name="lastName" id="lastName" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="example@example.com" />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input type="phone" name="phone" id="phone" placeholder="(---) --- - ----" />
              </FormGroup>
              <FormGroup>
                <Label for="contactMethod">Preferred Contact Method</Label>
                <Input type="select" name="select" id="contactMethod">
                  <option value="">Select</option>
                  <option value="contactPhone">Phone</option>
                  <option value="contactEmail">Email</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input type="address" name="address" id="address" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label for="stateSelect">State</Label>
                <Input type="select" name="select" id="stateSelect">
                  <option value="">Select</option>
                  <option value="AL">Alabama</option>
                	<option value="AK">Alaska</option>
                	<option value="AZ">Arizona</option>
                	<option value="AR">Arkansas</option>
                	<option value="CA">California</option>
                	<option value="CO">Colorado</option>
                	<option value="CT">Connecticut</option>
                	<option value="DE">Delaware</option>
                	<option value="DC">District Of Columbia</option>
                	<option value="FL">Florida</option>
                	<option value="GA">Georgia</option>
                	<option value="HI">Hawaii</option>
                	<option value="ID">Idaho</option>
                	<option value="IL">Illinois</option>
                	<option value="IN">Indiana</option>
                	<option value="IA">Iowa</option>
                	<option value="KS">Kansas</option>
                	<option value="KY">Kentucky</option>
                	<option value="LA">Louisiana</option>
                	<option value="ME">Maine</option>
                	<option value="MD">Maryland</option>
                	<option value="MA">Massachusetts</option>
                	<option value="MI">Michigan</option>
                	<option value="MN">Minnesota</option>
                	<option value="MS">Mississippi</option>
                	<option value="MO">Missouri</option>
                	<option value="MT">Montana</option>
                	<option value="NE">Nebraska</option>
                	<option value="NV">Nevada</option>
                	<option value="NH">New Hampshire</option>
                	<option value="NJ">New Jersey</option>
                	<option value="NM">New Mexico</option>
                	<option value="NY">New York</option>
                	<option value="NC">North Carolina</option>
                	<option value="ND">North Dakota</option>
                	<option value="OH">Ohio</option>
                	<option value="OK">Oklahoma</option>
                	<option value="OR">Oregon</option>
                	<option value="PA">Pennsylvania</option>
                	<option value="RI">Rhode Island</option>
                	<option value="SC">South Carolina</option>
                	<option value="SD">South Dakota</option>
                	<option value="TN">Tennessee</option>
                	<option value="TX">Texas</option>
                	<option value="UT">Utah</option>
                	<option value="VT">Vermont</option>
                	<option value="VA">Virginia</option>
                	<option value="WA">Washington</option>
                	<option value="WV">West Virginia</option>
                	<option value="WI">Wisconsin</option>
                	<option value="WY">Wyoming</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                <Input type="city" name="city" id="city" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label for="zipcode">Zip Code</Label>
                <Input type="zipcode" name="zipcode" id="zipcode" placeholder="" />
              </FormGroup>
              <hr />
              <FormGroup>
                <Label for="year">Vehicle Year</Label>
                <Input type="year" name="year" id="year" placeholder="2016" />
              </FormGroup>
              <FormGroup>
                <Label for="make">Vehicle Make</Label>
                <Input type="make" name="make" id="make" placeholder="Aston Martin" />
              </FormGroup>
              <FormGroup>
                <Label for="mileage">Vehicle Mileage</Label>
                <Input type="mileage" name="mileage" id="mileage" placeholder="35,000" />
              </FormGroup>
              <FormGroup>
                <Label for="licenseplate">License Plate</Label>
                <Input type="licenseplate" name="licenseplate" id="licenseplate" placeholder="------" />
              </FormGroup>
              <hr />
              <FormGroup>
                <Label for="approxDate">Approximate Appointment Date</Label>
                <Input type="approxDate" name="approxDate" id="approxDate" placeholder="date placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="time">Preferred Time</Label>
                <CustomInput type="select" id="time" name="time">
                  <option value="">Select</option>
                  <option value="anytime">Anytime</option>
                  <option value="morning">Morning</option>
                  <option value="midday">Mid-day</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </CustomInput>
              </FormGroup>
              <hr />
              <FormGroup>
                <Label for="serviceDescription">Type of Service Needed</Label>
                <Input type="textarea" name="service" id="serviceDescription" />
              </FormGroup>
              <FormGroup>
                <Label for="comments">Comments</Label>
                <Input type="textarea" name="comments" id="comments" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
