import React from 'react';
import Formsy from 'formsy-react';
import FormInput from '../../components/form/form_input';
import Dropdown from '../../components/form/dropdown';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink } from 'reactstrap';
import PhoneIcon from '../../images/icons/phone.svg';
import '../../stylesheets/contact.css';
import jquery from 'jquery';

// http://collision.lvh.me:3000/schedule_lauderdale

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = {
      modal: false,
      enableButton: false,
      contactMethod: [
        { label: 'Contact by Phone', value: 'contactByPhone' },
        { label: 'Contact by Email', value: 'contactByEmail' }
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

  sendContact(data) {
     jquery.ajax({
        type: "POST",
        url: 'https://collision.holmanautomotive.com/contact_lauderdale',
        data: jquery( this ),
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
        <NavLink onClick={this.toggle}>{this.props.buttonLabel}CONTACT US</NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Contact Us</ModalHeader>
          <ModalBody>
            <Container fluid>
              <Row>
                <Col>
                  <div className="text-center">
                    <img src={PhoneIcon} alt="Phone" id="phone-icon" /> (954) 926-3590
                  </div>
                </Col>
              </Row>
            </Container>
            <Formsy onValid={this.enableButton} onInvalid={this.disableButton} onSubmit={this.sendContact}>
              <FormInput name="first_name" label="First Name" validations="minLength:2" required />
              <FormInput name="last_name" label="Last Name" validations="minLength:2" required />
              <FormInput name="email" label="Email" validations="isEmail" required />
              <FormInput name="phone" label="Phone" validations="isNumeric,minLength:7,maxLength:10" required />
              <Dropdown name="contactby" label="Preferred Contact Method" placeholder="Preferred Contact Method" options={this.state.contactMethod} required />
              <FormInput componentClass="textarea" name="question" label="Questions or Comments" required />
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
