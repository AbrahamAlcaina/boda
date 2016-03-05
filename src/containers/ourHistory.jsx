import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Colors from 'material-ui/lib/styles/colors';
import { HistoryItem } from '../components/molecules';
import * as navigationActions from '../reducers/navigation';

class OurHistory extends Component {
      render() {
        return (
          <div className="container">
            <Helmet title="guests" />
              <div className="page-header">
                <h1 id="timeline">
                  <FormattedMessage
                    id="home.ourHistory"
                  />
                </h1>
            </div>
            <ul className="timeline">
              <HistoryItem
                color={Colors.grey200}
                title="history.00"
                imgSrc="/img/1a_noche.jpg"
                text="history.empty"
                inverted
              />
              <HistoryItem
                color={Colors.grey200}
                title="history.01"
                imgSrc="/img/granada.jpg"
                text="history.empty"
              />
              <HistoryItem
                color={Colors.grey200}
                title="history.02"
                imgSrc="/img/praga.jpg"
                text="history.empty"
                inverted
              />
              <HistoryItem
                color={Colors.grey200}
                title="history.03"
                imgSrc="/img/paris_1.jpg"
                text="history.empty"
              />
              <HistoryItem
                color={Colors.grey200}
                title="history.04"
                imgSrc="/img/madrid.jpg"
                text="history.empty"
                inverted
              />
              <HistoryItem
                color={Colors.grey200}
                title="history.05"
                imgSrc="/img/mitja_marato.jpg"
                text="history.empty"
              />
              <HistoryItem
                color={Colors.grey200}
                title="history.06"
                imgSrc="/img/ourHistory.jpg"
                text="history.empty"
                inverted
              />
              <HistoryItem
                color={Colors.grey200}
                title="history.07"
                imgSrc="/img/menorca.jpg"
                text="history.empty"
              />
              <HistoryItem
                color={Colors.grey200}
                title="history.08"
                imgSrc="/img/el_nostre_fill.jpg"
                text="history.empty"
                inverted
              />
              <HistoryItem
                color={Colors.grey200}
                title="history.09"
                imgSrc="/img/future.jpg"
                text="history.empty"
              />
              <HistoryItem
                color={Colors.grey200}
                title="history.10"
                imgSrc="/img/ny.jpg"
                text="history.11"
                inverted
              />
            </ul>
        </div>
        );
      }
    }


const selector = createSelector(
  [state => state.get('history')],
  state => ({ history: state.get('history') })
);

const actions = Object.assign({}, navigationActions);

export default connect(selector, actions)(OurHistory);
