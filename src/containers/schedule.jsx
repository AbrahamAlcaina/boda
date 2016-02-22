import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import style from './app.style';
import * as navigationActions from '../reducers/navigation';

class Schedule extends Component {
    render() {
      return (
          <div>
              <Helmet title="schedule" />
          </div>
      );
    }
}

const selector = createSelector(
  [state => state.get('schedule')],
  state => ({ schedule: state.get('schedule') })
);

const actions = Object.assign({}, navigationActions);

export default connect(selector, actions)(Schedule);
