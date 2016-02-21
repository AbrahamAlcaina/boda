import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Card } from '../components/molecules';
import AutoResponsive from 'autoresponsive-react';

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


  render() {
    return (
      <div>
        <Helmet title="Home"/>
          <AutoResponsive ref="container" {...this.getAutoResponsiveProps()} >
              <div className="item" itemClassName="item" style={{ width: 360, height: 540 }} >
                <Card />
              </div>

              <div className="item" itemClassName="item" style={{ width: 360, height: 540 }} >
                <Card />
              </div>

              <div className="item" itemClassName="item" style={{ width: 360, height: 540 }} >
                <Card />
              </div>

              <div className="item" itemClassName="item" style={{ width: 360, height: 540 }} >
                <Card />
              </div>
              <div className="item" itemClassName="item" style={{ width: 360, height: 540 }} >
                <Card />
              </div>
              <div className="item" itemClassName="item" style={{ width: 360, height: 540 }} >
                <Card />
              </div>
              <div className="item" itemClassName="item" style={{ width: 360, height: 540 }} >
                <Card />
              </div>
              <div className="item" itemClassName="item" style={{ width: 360, height: 540 }} >
                <Card />
              </div>
              <div className="item" itemClassName="item" style={{ width: 360, height: 540 }} >
                <Card />
              </div>
              <div className="item" itemClassName="item" style={{ width: 360, height: 540 }} >
                <Card />
              </div>

                </AutoResponsive>
      </div>
        );
  }
}
const selector = createSelector(
  [state => state.get('navigation')],
  state => ({ navigation: state.get('navigation') })
);

const actions = Object.assign({}, {});

export default connect(selector, actions)(Home);
