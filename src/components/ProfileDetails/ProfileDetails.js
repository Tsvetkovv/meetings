import React from 'react';
import PropTypes from 'prop-types';
import InterestPreference from './InterestPreference';
import AgePreference from './AgePreference';
import SexPreference from './SexPreference';
import DeleteControl from './DeleteControl/DeleteControl';
import PairCreate from './PairCreate/PairCreate';

class ProfileDetails extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    partner: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    requirement: PropTypes.shape({
      ageAfter: PropTypes.number,
      ageBefore: PropTypes.number,
      sex: PropTypes.string,
    }),
    interests: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    requirement: null,
    partner: null,
    interests: [],
  };

  render() {
    const { id, name, requirement, interests, partner } = this.props;

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
        <DeleteControl id={id} />
        {!partner && <PairCreate id={id} />}
        {partner &&
          <div>
            <div>
              Partner id: {partner.id}
            </div>
            <div>
              Partner name: {partner.name}
            </div>
          </div>}
      </div>
    );
  }
}

export default ProfileDetails;
