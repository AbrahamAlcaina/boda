import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Nav } from 'components/organisms';
import connectData from 'helpers/connectData';
import * as homeActions from 'redux/modules/home';

class Home extends Component {
  static propTypes = {
    home: PropTypes.object,
    auth: PropTypes.object.isRequired,
    loaded: PropTypes.bool
  };

  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
      <Helmet title="Home"/>
        <Nav />
        <div className={styles.masthead}>
          <div className="container">
          </div>
        </div>
      </div>
    );
  }
}

function fetchData(getState, dispatch) {
  const { home } = getState();
  if (home.loaded) {
    return Promise.resolve();
  }
  return dispatch(homeActions.load());
}

const connectedHome = connectData(fetchData)(Home);
const connected = connect(
  state => ({ home: state.home, auth: state.auth }), homeActions)(connectedHome);
export default connected;
