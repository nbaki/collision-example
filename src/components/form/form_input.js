import React from 'react';
import {withFormsy} from 'formsy-react';
import { FormGroup, Label, Input, HelpBlock } from 'reactstrap';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this._bind('onChange');
  }

  onChange(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    let errorMessage = this.props.getErrorMessage();

    return <FormGroup>
      {this.props.label && <Label>{this.props.label}: {this.props.required && '*'}</Label>}
      <Input type={this.props.type} componentClass={this.props.componentClass} value={this.props.getValue() || ''} onChange={this.onChange} placeholder={this.props.placeholder} />
      <HelpBlock>{errorMessage}</HelpBlock>
    </FormGroup>
  }
}

Input.defaultProps = {
  type: 'text'
}

export default withFormsy(FormInput);
