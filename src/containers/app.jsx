import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Nav } from '../components/organism';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import * as navigationActions from '../reducers/navigation';

class App extends Component {

  static displayName = 'Nav';

  static propTypes = {
    children: PropTypes.any,
    navigation: PropTypes.array,
    loadNavigationOptions: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadNavigationOptions();
  }

  render() {
    const { navigation = [] } = this.props;
    return (
          <div>
              <Helmet
                title="Nicole i Abraham"
                titleTemplate="Nicole i Abraham - %s"
                meta={[
                      { 'char-set': 'utf-8' },
                      { name: 'description', content: 'Nicole i Abraham' }
                ]}
              />
            <Nav navigation={navigation}/>
                {this.props.children}
          </div>
      );
  }
}

const selector = createSelector(
  [state => state.get('navigation')],
  state => ({ navigation: state.get('navigation') })
);

const actions = Object.assign({}, navigationActions);

export default connect(selector, actions)(App);
