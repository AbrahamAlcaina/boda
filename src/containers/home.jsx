import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { WeddingCard, OurHistoryCard, GuestsCard, WeddingPlaceCard } from '../components/molecules';

class Home extends Component {
  static displayName = 'Home';
  static propTypes = {
  };
  constructor(props) {
    super(props);
    this.state = {
      containerWidth: 1900
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        containerWidth: React.findDOMNode(this.refs.container).clientWidth
      });
    }, false);
  }

  getAutoResponsiveProps = () =>
  ({
    itemMargin: 10,
    containerWidth: this.state.containerWidth,
    itemClassName: 'item',
    gridWidth: 100,
    transitionDuration: '.5'
  });


  getAutoResponsiveProps() {
    return {
      itemMargin: 10,
      containerWidth: this.state.containerWidth || document.body.clientWidth,
      itemClassName: 'item',
      gridWidth: 100,
      transitionDuration: '.5'
    };
  }

  render() {
    return (
      <div
        className="row"
        style={{
          padding: 10
        }}
      >
        <Helmet title="Home"/>
        <WeddingCard />
        <OurHistoryCard />
        <GuestsCard />
        <WeddingPlaceCard />
      </div>);
  }
}

const selector = createSelector(
  [state => state.get('navigation')],
  state => ({ navigation: state.get('navigation') })
);

const actions = Object.assign({}, {});

export default connect(selector, actions)(Home);
