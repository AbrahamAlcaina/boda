import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { WeddingCard,
  OurHistoryCard,
  GuestsCard,
  WeddingPlaceCard,
  PlaceCard,
  WeekendPlan
} from '../components/molecules';

class Home extends Component {
  static displayName = 'Home';
  static propTypes = {
  };

  render() {
    return (
      <div
        className="row"
      >
        <WeddingCard />
        <WeekendPlan />
        <GuestsCard />
        <WeddingPlaceCard />
        <PlaceCard />
        <OurHistoryCard />
      </div>);
  }
}

const selector = createSelector(
  [state => state.get('navigation')],
  state => ({ navigation: state.get('navigation') })
);

const actions = Object.assign({}, {});

export default connect(selector, actions)(Home);
