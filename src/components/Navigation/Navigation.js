import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/">
          Profiles
        </Link>
        <Link className={s.link} to="/pairs">
          Pairs
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
