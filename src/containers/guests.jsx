import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import * as navigationActions from '../reducers/navigation';
import * as guestActions from '../reducers/guests';

import {
  FamilyTrempCard,
  FamilyBDNCard,
  FamilyHollandCard,
  FriendsBCNCard,
  FriendsBDNCard,
  FriendsTrempCard
} from '../components/molecules';


class Guests extends Component {
    static propTypes = {
      loadGuests: PropTypes.func.isRequired
    };

    componentDidMount() {
      this.props.loadGuests();
    }

    render() {
      return (
          <div>
              <Helmet title="guests" />
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                  <h1>
                    <FormattedMessage
                      id="home.guests"
                    />
                  </h1>
                </div>
              </div>
              <div className="row">
                <FamilyBDNCard />
                <FamilyTrempCard />
                <FamilyHollandCard />
                <FriendsBCNCard />
                <FriendsBDNCard />
                <FriendsTrempCard />
              </div>
          </div>
      );
    }
}

const selector = createSelector(
  [state => state.get('guests')],
  state => ({ guests: state.get('guests') })
);

const actions = Object.assign({}, navigationActions, guestActions);

export default connect(selector, actions)(injectIntl(Guests));
