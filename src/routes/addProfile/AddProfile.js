import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { withHandlers } from 'recompose';
import { LocalForm, Control, Errors } from 'react-redux-form';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import addProfile from './addProfile.graphql';
import s from './AddProfile.css';
import CitySelector from '../../components/CitySelector';

const required = val => !!val;
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
          // TODO
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

  handleSubmit = ({ city, ...restValues }) => {
    this.props.toggleMutation({
      cityId: city.value,
      ...restValues,
    });
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Add new profile</h1>
          <LocalForm onSubmit={this.handleSubmit}>
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
            <button type="submit">Submit</button>
          </LocalForm>
        </div>
      </div>
    );
  }
}

export default AddProfile;
