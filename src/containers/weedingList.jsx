import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as navigationActions from '../reducers/navigation';

class WeedingList extends Component {
    render() {
      return (
          <div>
              <Helmet title="weedingList" />
                <h1>
                  <FormattedMessage
                    id="home.weedingList"
                  />
                </h1>
                <div className="row">
                  <FormattedMessage id="honeymoon.01" />
                  <img
                    className="img-responsive"
                    src="/img/ny.jpg"
                  />
                  <FormattedMessage id="honeymoon.02" />
                </div>
          </div>
      );
    }
}

const selector = createSelector(
  [state => state.get('weedingList')],
  state => ({ weedingList: state.get('weedingList') })
);

const actions = Object.assign({}, navigationActions);

export default connect(selector, actions)(WeedingList);
