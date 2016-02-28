import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import * as navigationActions from '../reducers/navigation';
import { FormattedMessage } from 'react-intl';

class WeddingPlace extends Component {
    render() {
      return (
          <div>
              <Helmet title="weedingPlace" />
              <h1>
                <FormattedMessage
                  id="home.weddingPlace"
                />
              </h1>
          </div>
      );
    }
}

const selector = createSelector(
  [state => state.get('weedingPlace')],
  state => ({ weedingPlace: state.get('weedingPlace') })
);

const actions = Object.assign({}, navigationActions);

export default connect(selector, actions)(WeddingPlace);
