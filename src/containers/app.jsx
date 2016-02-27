import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Nav, Footer } from '../components/organism';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import style from './app.style';
import * as navigationActions from '../reducers/navigation';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import theme from '../config/theme';

class App extends Component {

  static displayName = 'Nav';

  static propTypes = {
    children: PropTypes.any,
    navigation: PropTypes.any,
    loadNavigationOptions: PropTypes.func.isRequired
  };

  static childContextTypes = {
    muiTheme: React.PropTypes.object,
  };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(theme)
    };
  }

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
            <div style={style.content}>
                {this.props.children}
            </div>
            <Footer />
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
