import React from 'react';
import { withFormsy} from 'formsy-react';
import { FormGroup, Label, HelpBlock} from 'reactstrap';
import Select from 'react-select';

class Dropdown extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('onChange');
    this.state = {
      selections: []
    }
  }

  onChange(selection) {
    let selectedValues = [];
    if (this.props.multiple) {
      selectedValues = selection.map((sel) => {return sel.value});
    } else {
      selectedValues = (selection && selection.value);
    }

    this.props.setValue(selectedValues);
    if (this.props.onChange) this.props.onChange(selectedValues);
  }

  render() {
    let errorMessage = this.props.getErrorMessage();

    return <FormGroup>
      {this.props.label && <ControlLabel>{this.props.label}: {this.props.required && '*'}</ControlLabel>}
      <Select
        onChange={this.onChange}
        placeholder={this.props.placeholder}
        value={this.props.getValue() || this.props.value || ''}
        options={this.props.options}
        closeOnSelect={!this.props.multiple}
        multi={this.props.multiple}
        disabled={this.props.disabled}
      />
      <HelpBlock>{errorMessage}</HelpBlock>
    </FormGroup>
  }
}

Dropdown.defaultProps = {
  type: 'text',
  options: []
}

export default withFormsy(Dropdown);
