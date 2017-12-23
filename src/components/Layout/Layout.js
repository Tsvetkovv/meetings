import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import reactTableCss from 'react-table/react-table.css';
import reactSelect from 'react-select/dist/react-select.css';
import reactDatepicker from 'react-datepicker/dist/react-datepicker.css';
import reactInputRange from 'react-input-range/lib/css/index.css';
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withStyles(
  normalizeCss,
  reactTableCss,
  reactSelect,
  reactDatepicker,
  reactInputRange,
  s,
)(Layout);
