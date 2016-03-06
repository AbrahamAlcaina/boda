import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import * as navigationActions from '../reducers/navigation';
import { FormattedMessage } from 'react-intl';

class Place extends Component {
    render() {
      return (
          <div>
              <Helmet title="place" />
              <h1>
                <FormattedMessage
                  id="home.placePlace"
                />
              </h1>
              <div className="row">
                <p>
                  <FormattedMessage id="place.01" />
                </p>
                <img
                  className="img-responsive"
                  src="/img/celebrem_00.jpg"
                />
              </div>
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
