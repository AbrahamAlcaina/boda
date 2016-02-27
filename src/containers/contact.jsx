import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import * as navigationActions from '../reducers/navigation';

class Contact extends Component {
    render() {
      return (
          <div>
              <Helmet title="contact" />
          </div>
      );
    }
}

const selector = createSelector(
  [state => state.get('contact')],
  state => ({ contact: state.get('contact') })
);

const actions = Object.assign({}, navigationActions);

export default connect(selector, actions)(Contact);
