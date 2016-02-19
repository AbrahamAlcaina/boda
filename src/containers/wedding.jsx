import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import style from './app.style';
import * as navigationActions from '../reducers/navigation';

class Wedding extends Component {
    render() {
      return (
          <div>
              <Helmet title="wedding" />
          </div>
      );
    }
}

const selector = createSelector(
  [state => state.get('wedding')],
  state => ({ wedding: state.get('wedding') })
);

const actions = Object.assign({}, navigationActions);

export default connect(selector, actions)(Wedding);
