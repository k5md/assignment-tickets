import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class SelectInput extends React.Component {
  constructor(props) {
    super(props);
    this._id = _.uniqueId();
  }

  render() {
    const {
      label,
      value,
      onChange,
      selectables,
    } = this.props;

    return (
      <React.Fragment>
        {label && <label className="my-1 mr-2" htmlFor={this._id}>{label}</label>}
        <select
          id={this._id}
          value={value}
          className="form-control form-control-lg"
          onChange={onChange}
        >
          {selectables.map(item => (
            <option
              key={_.uniqueId()}
              value={item}>{item}
            </option>
          ))}
        </select>
      </React.Fragment>
    );
  }
}

SelectInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectables: PropTypes.array.isRequired,
};

export default SelectInput;
