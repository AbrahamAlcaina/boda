import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import * as navigationActions from '../reducers/navigation';
import { FormattedMessage } from 'react-intl';

class Place extends Component {
    render() {
      return (
          <div >
              <Helmet title="place" />
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                    <h1>
                      <FormattedMessage
                        id="home.placePlace"
                      />
                    </h1>
                    <p>
                      <FormattedMessage id="place.01" />
                    </p>
                    <img
                      className="img-responsive"
                      src="/img/celebrem_00.jpg"
                    />
                    <p>
                      <FormattedMessage id="place.02" />
                    </p>
                    <img
                      className="img-responsive"
                      src="/img/celebrem_01.jpg"
                    />
                    <p>
                      <FormattedMessage id="place.03" />
                    </p>
                    <img
                      className="img-responsive"
                      src="/img/celebrem_02.jpg"
                    />
                </div>
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
