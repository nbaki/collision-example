import React from 'react';
import {withFormsy} from 'formsy-react';
import { FormGroup, Label, Input, FormText } from 'reactstrap';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    let errorMessage = this.props.getErrorMessage();

    return <FormGroup>
      {this.props.label && <Label>{this.props.label}: {this.props.required && '*'}</Label>}
      <Input type={this.props.type} value={this.props.getValue() || ''} onChange={this.onChange} placeholder={this.props.placeholder} />
      <FormText>{errorMessage}</FormText>
    </FormGroup>
  }
}

Input.defaultProps = {
  type: 'text'
}

export default withFormsy(FormInput);
