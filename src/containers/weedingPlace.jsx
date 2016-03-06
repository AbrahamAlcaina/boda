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
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                  <h1>
                    <FormattedMessage
                      id="home.weddingPlace"
                    />
                  </h1>
                  <p>
                    <FormattedMessage id="weddingplace.01" />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="responsive-video col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                    <iframe
                      frameBorder="0"
                      src="//www.youtube.com/embed/8a0mTUbaGOc"
                    />
                </div>
              </div>
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
