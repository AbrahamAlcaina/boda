import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

class Home extends Component {
  static displayName = 'Home';
  static propTypes = {
    navigation: PropTypes.array
  };

  render() {
    return (
        <div>
            <Helmet title="Home" />
        </div>
    );
  }
}
const selector = createSelector(
  [state => state.get('navigation')],
  state => ({ navigation: state.get('navigation') })
);

const actions = Object.assign({}, {});

export default connect(selector, actions)(Home);
