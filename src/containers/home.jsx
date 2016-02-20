import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Card } from '../components/molecules';
import style from './home.style';
import AutoResponsive from 'autoresponsive-react';

class Home extends Component {
  static displayName = 'Home';
  static propTypes = {
  };

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
        <AutoResponsive style={style.container} {...this.getAutoResponsiveProps()}>
            <Helmet title="Home" />
            <Card className="item"/>
            <Card className="item"/>
            <Card className="item"/>
            <Card className="item"/>
            <Card className="item"/>
            <Card className="item"/>
            <Card className="item"/>
        </AutoResponsive>
    );
  }
}
const selector = createSelector(
  [state => state.get('navigation')],
  state => ({ navigation: state.get('navigation') })
);

const actions = Object.assign({}, {});

export default connect(selector, actions)(Home);
