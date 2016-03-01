import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
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
      intl: intlShape.isRequired
    };

    componentDidMount() {
      this.props.loadGuests();
    }

    render() {
      const { formatMessage } = this.props.intl;
      return (
          <div>
              <Helmet title="guests" />
              <h1>
                <FormattedMessage
                  id="home.guests"
                />
              </h1>
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
