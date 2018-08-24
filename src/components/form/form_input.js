import React from 'react';
import {withFormsy} from 'formsy-react';
import { FormGroup, FormControl, Label } from 'reactstrap';

class FormInput extends BaseComponent {
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
      {this.props.label && <ControlLabel>{this.props.label}: {this.props.required && '*'}</ControlLabel>}
      <FormControl type={this.props.type} componentClass={this.props.componentClass} value={this.props.getValue() || ''} onChange={this.onChange} placeholder={this.props.placeholder} />
      <HelpBlock>{errorMessage}</HelpBlock>
    </FormGroup>
  }
}

Input.defaultProps = {
  type: 'text'
}

export default withFormsy(FormInput);
