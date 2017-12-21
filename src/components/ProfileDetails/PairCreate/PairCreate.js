import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { withHandlers } from 'recompose';
import { Control, LocalForm } from 'react-redux-form';
import pairCreate from './pairCreate.graphql';
import Errors from '../../Errors/Errors';

const required = val => !!val;
const isNumber = val => val >= 0;

@graphql(pairCreate, { name: 'pairCreateMutation' })
@withHandlers({
  onPair: ({ pairCreateMutation, id }) => partnerId =>
    pairCreateMutation({
      variables: {
        firstPartnerId: id,
        secondPartnerId: partnerId,
      },
    }).catch(e => {
      console.error('Error', e);
    }),
})
class PairCreate extends React.Component {
  static propTypes = {
    onPair: PropTypes.func,
  };

  static defaultProps = {
    onPair: null,
  };

  handleSubmit = ({ id }) => {
    this.props.onPair(id);
  };

  render() {
    return (
      <span>
        <LocalForm onSubmit={this.handleSubmit}>
          <label htmlFor="local.id">Partner id: </label>
          <Control model=".id" validators={{ required, isNumber }} />
          <button type="submit">Pair</button>
          <Errors
            model=".id"
            show={{ touched: true, focus: false }}
            messages={{
              required: 'Required. ',
              isNumber: 'Should be valid number',
            }}
          />
        </LocalForm>
      </span>
    );
  }
}

export default PairCreate;
