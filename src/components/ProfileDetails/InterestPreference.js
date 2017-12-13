import React from 'react';
import PropTypes from 'prop-types';

const InterestPreference = ({ interests }) => {
  if (interests.length > 0) {
    return (
      <div>
        Interests: {interests.join(', ')}
      </div>
    );
  }
  return <div>No interests</div>;
};

InterestPreference.propTypes = {
  interests: PropTypes.arrayOf(PropTypes.string),
};
InterestPreference.defaultProps = {
  interests: [],
};

export default InterestPreference;
