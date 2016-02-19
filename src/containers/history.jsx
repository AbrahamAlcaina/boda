import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import style from './app.style';
import * as navigationActions from '../reducers/navigation';

class History extends Component {
    render() {
      return (
          <div>
              <Helmet title="history" />
          </div>
      );
    }
}

const selector = createSelector(
  [state => state.get('history')],
  state => ({ history: state.get('history') })
);

const actions = Object.assign({}, navigationActions);

export default connect(selector, actions)(History);
