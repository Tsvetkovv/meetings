import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Select from 'react-select';
import s from './SexSelector.css';
import { SEX } from '../../constants';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

@withStyles(s)
class SexSelector extends React.Component {
  static propTypes = {
    value: PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
    disabled: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
  };

  static sexOptions = Object.keys(SEX).map(key => ({
    value: key,
    label: capitalizeFirstLetter(key),
  }));

  static defaultProps = {
    value: null,
  };

  render() {
    // TODO: ssr instanceID
    // https://github.com/JedWatson/react-select/issues/1325
    // https://github.com/facebook/react/issues/6451
    return (
      <Select
        {...this.props}
        options={SexSelector.sexOptions}
        searchable={false}
        className={s.root}
      />
    );
  }
}

export default SexSelector;
