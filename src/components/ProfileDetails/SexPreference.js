import React from 'react';
import PropTypes from 'prop-types';
import { SEX } from '../../constants';

const SexPreference = ({ sex }) => {
  if (sex === SEX.male) {
    return <span>a man</span>;
  }

  if (sex === SEX.female) {
    return <span>a woman</span>;
  }
  return <span>person</span>;
};

SexPreference.propTypes = {
  sex: PropTypes.oneOf([SEX.female, SEX.male]),
};
SexPreference.defaultProps = {
  sex: null,
};

export default SexPreference;
