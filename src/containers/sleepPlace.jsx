import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as navigationActions from '../reducers/navigation';

class SleepPlace extends Component {
    render() {
      return (
          <div className="row">
              <Helmet title="sleepPlace" />
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                  <h1>
                    <FormattedMessage
                      id="home.sleepPlace"
                    />
                  </h1>
                  <p>
                    <FormattedMessage id="sleepplace.01" />
                  </p>
                  <p>
                    <FormattedMessage id="sleepplace.04" />
                  </p>
                  <p>
                    <FormattedMessage id="sleepplace.02" />
                  </p>
                  <img
                    className="img-responsive"
                    src="/img/bungalows.jpg"
                  />
                  <p>
                    <FormattedMessage id="sleepplace.03" />
                  </p>
                  <img
                    className="img-responsive"
                    src="/img/mapa_camping.jpg"
                  />
                </div>
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
