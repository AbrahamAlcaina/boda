import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as navigationActions from '../reducers/navigation';

class SleepPlace extends Component {
    render() {
      return (
          <div>
              <Helmet title="sleepPlace" />
              <h1>
                <FormattedMessage
                  id="home.sleepPlace"
                />
              </h1>
              <div className="row">
                <FormattedMessage id="sleepplace.01" />
                <img
                  className="img-responsive"
                  src="/img/bungalows.jpg"
                />
              <FormattedMessage id="sleepplace.02" />
                <img
                  className="img-responsive"
                  src="/img/mapa_camping.jpg"
                />
              <FormattedMessage id="sleepplace.03" />
              </div>
          </div>
      );
    }
}

const selector = createSelector(
  [state => state.get('sleepPlace')],
  state => ({ sleepPlace: state.get('sleepPlace') })
);

const actions = Object.assign({}, navigationActions);

export default connect(selector, actions)(SleepPlace);
