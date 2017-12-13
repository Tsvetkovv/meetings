import React from 'react';
import PropTypes from 'prop-types';
import InterestPreference from './InterestPreference';
import AgePreference from './AgePreference';
import SexPreference from './SexPreference';

class ProfileDetails extends React.Component {
  static propTypes = {
    requirement: PropTypes.shape({
      ageAfter: PropTypes.number,
      ageBefore: PropTypes.number,
      sex: PropTypes.string,
    }),
    name: PropTypes.string.isRequired,
    interests: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    requirement: null,
    interests: [],
  };

  render() {
    const { name, requirement, interests } = this.props;

    return (
      <div style={{ padding: '20px' }}>
        <InterestPreference interests={interests} />
        {!requirement && <div>No requirements</div>}
        {requirement &&
          <div>
            {name} prefers{' '}
            <AgePreference
              ageAfter={requirement.ageAfter}
              ageBefore={requirement.ageBefore}
            />{' '}
            <SexPreference sex={requirement.sex} />
          </div>}
      </div>
    );
  }
}

export default ProfileDetails;
