import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import style from './app.style';
import * as navigationActions from '../reducers/navigation';

class Landing extends Component {
    render() {
      return (
          <div>
              <Helmet title="landing" />
          </div>
      );
    }
}

const selector = createSelector(
  [state => state.get('landing')],
  state => ({ landing: state.get('landing') })
);

const actions = Object.assign({}, navigationActions);

export default connect(selector, actions)(Landing);
