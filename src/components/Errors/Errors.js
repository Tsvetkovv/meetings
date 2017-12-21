import React from 'react';
import PropTypes from 'prop-types';
import { Errors as FormErrors } from 'react-redux-form';
import cn from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Errors.css';

const Errors = props =>
  <FormErrors {...props} className={cn(s.root, props.className)} />;

Errors.propTypes = {
  className: PropTypes.string,
};

Errors.defaultProps = {
  className: null,
};

export default withStyles(s)(Errors);
