import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { withHandlers } from 'recompose';
import moment from 'moment';
import { LocalForm, Control, Errors } from 'react-redux-form';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import history from '../../history';
import addProfile from './addProfile.graphql';
import { AGE } from '../../constants';
import CitySelector from '../../components/inputs/CitySelector';
import GoalSelector from '../../components/inputs/GoalSelector';
import SexSelector from '../../components/inputs/SexSelector';
import BirthdaySelector from '../../components/inputs/BirthdaySelector';
import InterestSelector from '../../components/inputs/InterestSelector';
import s from './AddProfile.css';
import AgeSelector from '../../components/inputs/AgeSelector';

const getAge = bd => moment().diff(bd, 'years');
const required = val => !!val;
const isLegal = birthday => !birthday || getAge(birthday) >= AGE.min;
const validAge = birthday => !birthday || getAge(birthday) <= AGE.max;
const length = val => !val || val.length >= 3;

@withStyles(s)
@graphql(addProfile, { name: 'addProfileMutation' })
@withHandlers({
  toggleMutation: ({ addProfileMutation }) => ({
    name,
    birthday,
    sex,
    cityId,
    goalId,
    requirement,
    photoId,
    interestIds,
  }) =>
    addProfileMutation({
      variables: {
        name,
        birthday,
        sex,
        cityId,
        goalId,
        requirement,
        photoId,
        interestIds,
      },
    })
      .then(
        /* data */ () => {
          history.push('/profiles');
        },
      )
      .catch(e => {
        console.error(e, 'Error');
      }),
})
class AddProfile extends React.Component {
  static propTypes = {
    toggleMutation: PropTypes.func.isRequired,
  };

  handleSubmit = ({
    city,
    sex,
    birthday,
    goal,
    interests,
    partner,
    ...restValues
  }) => {
    this.props.toggleMutation({
      cityId: city.value,
      goalId: goal.value,
      sex: sex.value,
      requirement: {
        ageBefore: partner.age.min,
        ageAfter: partner.age.max,
        sex: (partner.sex || null) && partner.sex.value,
      },
      interestIds: (interests || null) && interests.map(i => i.value),
      birthday: birthday.format('YYYY-MM-DD'),
      ...restValues,
    });
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Add new profile</h1>
          <LocalForm
            initialState={{
              partner: {
                age: {
                  min: AGE.min,
                  max: AGE.max,
                },
              },
            }}
            onSubmit={this.handleSubmit}
          >
            <div>
              <label htmlFor="local.name">Name: </label>
              <Control model=".name" validators={{ required, length }} />
              <Errors
                className={s.error}
                model=".name"
                show="touched"
                messages={{
                  required: 'Required',
                  length: 'Must be 3 characters or more',
                }}
              />
            </div>
            {/* <label htmlFor="local.birthday">Birthday:</label> */}
            {/* <Control.input model={'.birthday'} type="date"/> */}
            <div>
              <label htmlFor="local.city">City: </label>
              <Control
                model=".city"
                component={CitySelector}
                validators={{ required }}
                mapProps={({ ownProps }) => ({ ...ownProps })}
              />
              <Errors
                className={s.error}
                model=".city"
                show="touched"
                messages={{
                  required: 'Required',
                }}
              />
            </div>
            <div>
              <label htmlFor="local.goal">Goal: </label>
              <Control
                model=".goal"
                component={GoalSelector}
                validators={{ required }}
                mapProps={({ ownProps }) => ({ ...ownProps })}
              />
              <Errors
                className={s.error}
                model=".goal"
                show="touched"
                messages={{
                  required: 'Required',
                }}
              />
            </div>
            <div>
              <label htmlFor="local.sex">Sex: </label>
              <Control
                model=".sex"
                component={SexSelector}
                validators={{ required }}
                mapProps={({ ownProps }) => ({ ...ownProps })}
              />
              <Errors
                className={s.error}
                model=".sex"
                show="touched"
                messages={{
                  required: 'Required',
                }}
              />
            </div>
            <div>
              <label htmlFor="local.birthday">Birthday: </label>
              <Control
                model=".birthday"
                component={BirthdaySelector}
                validators={{ required, isLegal, validAge }}
                mapProps={({ ownProps }) => ({ ...ownProps })}
              />
              <Errors
                className={s.error}
                model=".birthday"
                show="touched"
                messages={{
                  required: 'Required',
                  isLegal: 'Only +18',
                  validAge: 'Too old',
                }}
              />
            </div>
            <div>
              <label htmlFor="local.interests">Interests: </label>
              <Control
                model=".interests"
                component={InterestSelector}
                mapProps={({ ownProps }) => ({ ...ownProps })}
              />
            </div>
            <h3>Partner preferences</h3>
            <div>
              <label htmlFor="local.partner.age">Age: </label>
              <Control
                model=".partner.age"
                component={AgeSelector}
                mapProps={({ ownProps }) => ({ ...ownProps })}
              />
            </div>
            <div>
              <label htmlFor="local.partner.sex">Sex: </label>
              <Control
                model=".partner.sex"
                component={SexSelector}
                mapProps={({ ownProps }) => ({ ...ownProps })}
              />
            </div>
            <button type="submit">Submit</button>
          </LocalForm>
        </div>
      </div>
    );
  }
}

export default AddProfile;
