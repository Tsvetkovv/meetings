import moment from 'moment/moment';
import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  birthday: PropTypes.instanceOf(moment),
  sex: PropTypes.string,
  city: PropTypes.string,
  goal: PropTypes.string,
  interests: PropTypes.arrayOf(PropTypes.string),
  requirement: PropTypes.shape({
    ageAfter: PropTypes.number,
    ageBefore: PropTypes.number,
    sex: PropTypes.string,
  }),
});
