import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { WeddingCard,
  OurHistoryCard,
  GuestsCard,
  WeddingPlaceCard,
  PlaceCard,
  WeekendPlan,
  WeedingList,
  SleepPlace
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
        <Helmet title="home" />
        <WeddingCard />
        <WeekendPlan />
        <WeddingPlaceCard />
        <PlaceCard />
        <SleepPlace />
        <GuestsCard />
        <OurHistoryCard />
        <WeedingList />
      </div>);
  }
}

const selector = createSelector(
  [state => state.get('navigation')],
  state => ({ navigation: state.get('navigation') })
);

const actions = Object.assign({}, {});

export default connect(selector, actions)(Home);
