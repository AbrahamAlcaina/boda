import React, { Component, PropTypes } from 'react';
import { Machines, Nav } from '../../components/organisms';
import { connect } from 'react-redux';
import { LinearProgress } from 'material-ui';
import { FormattedMessage } from 'react-intl';
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
    let page;
    if (this.props.home.loaded) {
      const machines = this.props.home.machines;
      page = (<Machines machines={machines} />);
    } else {
      page = (
        <h2>
          <LinearProgress mode="indeterminate" />
          <FormattedMessage
            id="home.loading"
            description="home loading"
            defaultMessage="loading..."
          />
        </h2>
      );
    }

    return (
      <div className={styles.home}>
        <Nav />
        <div className={styles.masthead}>
          <div className="container">
            {page}
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
