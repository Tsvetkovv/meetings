import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { AGE } from '../../../constants';
import s from './BirthdaySelector.css';

@withStyles(s)
class BirthdaySelector extends React.Component {
  static propTypes = {
    value: (propValue, key, componentName, location, propFullName) =>
      !propValue && !moment.isMoment(propValue)
        ? new Error(
            `Invalid prop ${propFullName} supplied to ${componentName}. Validation failed.`,
          )
        : undefined,
    disabled: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
  };

  render() {
    const { value, ...props } = this.props;

    return (
      <div className={s.root}>
        <DatePicker
          {...props}
          minDate={moment().subtract(AGE.max, 'years')}
          maxDate={moment().subtract(AGE.min, 'years')}
          onChangeRaw={event => this.props.onChange(moment(event.target.value))}
          selected={value}
        />
      </div>
    );
  }
}

export default BirthdaySelector;
