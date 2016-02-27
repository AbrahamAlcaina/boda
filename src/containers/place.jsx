import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import * as navigationActions from '../reducers/navigation';

class Place extends Component {
    render() {
      return (
          <div>
              <Helmet title="place" />
          </div>
      );
    }
}

const selector = createSelector(
  [state => state.get('place')],
  state => ({ place: state.get('place') })
);

const actions = Object.assign({}, navigationActions);

export default connect(selector, actions)(Place);
