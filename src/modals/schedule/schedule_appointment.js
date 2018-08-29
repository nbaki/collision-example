import React from 'react';
import Formsy from 'formsy-react';
import FormInput from '../../components/form/form_input';
import Dropdown from '../../components/form/dropdown';
import { NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DateIcon from '../../images/icons/date.svg';
import jquery from 'jquery';

export default class ScheduleAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      enableButton: false,
      contactMethod: [
        { label: 'Contact by Phone', value: 'contactByPhone' },
        { label: 'Contact by Email', value: 'contactByEmail' }
      ],
      selectState: [
        { label: 'Alabama', value: 'AL' },
        { label: 'Alaska', value: 'AK' },
        { label: 'Arizona', value: 'AZ' },
        { label: 'Arkansas', value: 'AR' },
        { label: 'California', value: 'CA' },
        { label: 'Colorado', value: 'CO' },
        { label: 'Connecticut', value: 'CT' },
        { label: 'Delaware', value: 'DE' },
        { label: 'District Of Columbia', value: 'DC' },
        { label: 'Florida', value: 'FL' },
        { label: 'Georgia', value: 'GA' },
        { label: 'Hawaii', value: 'HI' },
        { label: 'Idaho', value: 'ID' },
        { label: 'Illinois', value: 'IL' },
        { label: 'Indiana', value: 'IN' },
        { label: 'Iowa', value: 'IA' },
        { label: 'Kansas', value: 'KS' },
        { label: 'Kentucky', value: 'KY' },
        { label: 'Louisiana', value: 'LA' },
        { label: 'Maine', value: 'ME' },
        { label: 'Maryland', value: 'MD' },
        { label: 'Massachusetts', value: 'MA' },
        { label: 'Michigan', value: 'MI' },
        { label: 'Minnesota', value: 'MN' },
        { label: 'Mississippi', value: 'MS' },
        { label: 'Missouri', value: 'MO' },
        { label: 'Montana', value: 'MT' },
        { label: 'Nebraska', value: 'NE' },
        { label: 'Nevada', value: 'NV' },
        { label: 'New Hampshire', value: 'NH' },
        { label: 'New Jersey', value: 'NJ' },
        { label: 'New Mexico', value: 'NM' },
        { label: 'New York', value: 'NY' },
        { label: 'North Carolina', value: 'NC' },
        { label: 'North Dakota', value: 'ND' },
        { label: 'Ohio', value: 'OH' },
        { label: 'Oklahoma', value: 'OK' },
        { label: 'Oregon', value: 'OR' },
        { label: 'Pennsylvania', value: 'PA' },
        { label: 'Rhode Island', value: 'RI' },
        { label: 'South Carolina', value: 'SC' },
        { label: 'South Dakota', value: 'SD' },
        { label: 'Tennessee', value: 'TN' },
        { label: 'Texas', value: 'TX' },
        { label: 'Utah', value: 'UT' },
        { label: 'Vermont', value: 'VT' },
        { label: 'Virginia', value: 'VA' },
        { label: 'Washington', value: 'WA' },
        { label: 'West Virginia', value: 'WV' },
        { label: 'Wisconsin', value: 'WI' },
        { label: 'Wyoming', value: 'WY' }
      ],
      preferredTime: [
        { label: 'Anytime', value: 'anytime' },
        { label: 'Morning', value: 'morning' },
        { label: 'Mid-day', value: 'midday' },
        { label: 'Afternoon', value: 'afternoon' },
        { label: 'Evening', value: 'evening' }
      ]
    }
    this.toggle = this.toggle.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  disableButton() {
    this.setState({ enableButton: false });
  }

  enableButton() {
    this.setState({ enableButton: true });
  }

  sendSchedule(data) {
       jquery.ajax({
          type: "POST",
          url: 'https://collision.holmanautomotive.com/schedule_laudale',
          data: jquery( this ).serialize(),
          success: () => {
              alert('Mail Sent');
          },
          error: () => {
              alert('Something went wrong, please try again.');
          }
       });
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
            <Formsy onValid={this.enableButton} onInvalid={this.disableButton} onSubmit={this.sendSchedule}>
              <FormInput name="first_name" label="First Name" validations="minLength:2" required />
              <FormInput name="last_name" label="Last Name" validations="minLength:2" required />
              <FormInput name="email" label="Email" validations="isEmail" required />
              <FormInput name="phone" label="Phone" validations="isNumeric,minLength:7,maxLength:10" required />
              <Dropdown name="contactby" label="Preferred Contact Method" placeholder="Preferred Contact Method" options={this.state.contactMethod} required />
              <FormInput name="address" label="Address" required />
              <FormInput name="city" label="City" required />
              <Dropdown name="selectstate" label="Select State" placeholder="Select State" options={this.state.selectState} required />
              <FormInput name="zipcode" label="Zip Code" validations="isNumeric" required />
              <hr />
              <FormInput name="vehiclemake" label="Vehicle Make" required />
              <FormInput name="vehiclemodel" label="Vehicle Model" required />
              <FormInput name="vehicleyear" label="Vehicle Year" validations="isNumeric,minLength:2,maxLength:4" required />
              <FormInput name="licenseplate" label="License Plate" required />
              <FormInput name="mileage" label="Mileage" validations="isNumeric,maxLength:6" required />
              <hr />
              <FormInput type="date" name="date" label="Approximate Appointment Date" />
              <Dropdown name="preferredtime" label="Preferred Time for Contact" placeholder="Preferred Time for Contact" options={this.state.preferredTime} required />
              <FormInput type="textarea" name="servicedescription" label="Description of Service" required />
              <FormInput type="textarea" name="comments" label="Comments and Notes" required />
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                <Button type="submit" disabled={!this.state.enableButton} color="primary" onClick={this.toggle}>Submit</Button>{' '}
              </ModalFooter>
            </Formsy>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
