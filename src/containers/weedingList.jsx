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
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                    <h1>
                      <FormattedMessage
                        id="home.weedingList"
                      />
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                    <p>
                      <FormattedMessage id="honeymoon.01" />
                    </p>
                    <img
                      className="img-responsive"
                      src="/img/ny.jpg"
                    />
                    <p>
                      <FormattedMessage id="honeymoon.02" />
                    </p>
                  </div>
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
