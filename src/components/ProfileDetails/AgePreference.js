import React from 'react';
import PropTypes from 'prop-types';

const AgePreference = ({ ageBefore, ageAfter }) => {
  let ret = '';
  ret += ageBefore ? ` from ${ageBefore}yo` : '';
  ret += ageAfter ? ` to ${ageAfter}yo` : '';

  return (
    <span>
      {ret}
    </span>
  );
};

AgePreference.propTypes = {
  ageBefore: PropTypes.number,
  ageAfter: PropTypes.number,
};
AgePreference.defaultProps = {
  ageBefore: null,
  ageAfter: null,
};

export default AgePreference;
