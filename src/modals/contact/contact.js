import React from 'react';
import Formsy from 'formsy-react';
import FormInput from '../../components/form/form_input';
import Dropdown from '../../components/form/dropdown';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import PhoneIcon from '../../images/icons/phone.svg';
import '../../stylesheets/contact.css';
import jquery from 'jquery';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = {
      modal: false,
      canSubmit: false
    };

    this.toggle = this.toggle.bind(this);
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  sendContact() {
     var my_form = this;
     jquery.ajax({
        type: "POST",
        url: 'https://collision.holmanautomotive.com/contact_lauderdale',
        data: jquery( this ).serialize(),
        success: function() {
            alert('Mail Sent');
        },
        complete: function() {
          my_form.reset();
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
            <Form>
              <FormGroup>
                <Label for="exampleEmail">First Name</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Last Name</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input type="phone" name="phone" id="phone" placeholder="(---) --- - ----" />
              </FormGroup>
              <FormGroup>
                <Label for="contactMethod">Preferred Contact Method</Label>
                <Input type="select" name="contactMethod" id="contactMethod">
                  <option value="">Select</option>
                  <option value="contactPhone">Phone</option>
                  <option value="contactEmail">Email</option>
                </Input>
              </FormGroup>
              <FormGroup>
                 <Label for="comments">Comments or Questions</Label>
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
