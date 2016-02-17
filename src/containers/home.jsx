import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Card } from '../components/molecules';

class Home extends Component {
  static displayName = 'Home';
  static propTypes = {
    navigation: PropTypes.array.isRequired
  };

  render() {
    const { navigation = [] } = this.props;
    return (
        <div>
            <Helmet title="Home" />
            { navigation.map(item => (
              <Card name={item.get('name')} key={item.get('name')}/>
            ))}
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
