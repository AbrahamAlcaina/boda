import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as navigationActions from '../reducers/navigation';

class Guests extends Component {
    render() {
      return (
          <div>
              <Helmet title="guests" />
                <h1>
                  <FormattedMessage
                    id="home.guests"
                  />
                </h1>
          </div>
      );
    }
}

const selector = createSelector(
  [state => state.get('guests')],
  state => ({ guests: state.get('guests') })
);

const actions = Object.assign({}, navigationActions);

export default connect(selector, actions)(Guests);
