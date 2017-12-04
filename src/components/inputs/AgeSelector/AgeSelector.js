import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import InputRange from 'react-input-range';
import s from './AgeSelector.css';
import { AGE } from '../../../constants';

@withStyles(s)
class AgeSelector extends React.Component {
  static propTypes = {
    value: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    disabled: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <InputRange
          {...this.props}
          formatLabel={value => `${value} yo`}
          maxValue={AGE.max}
          minValue={AGE.min}
        />
      </div>
    );
  }
}

export default AgeSelector;
