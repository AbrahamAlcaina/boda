import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './splash.scss';
import * as auth from 'redux/modules/auth';
import { connect } from 'react-redux';

/**
 * @class Splash
 * Container for the splash page
 */
class Splash extends Component {
  static propTypes = {
    loginSuccess: PropTypes.func.isRequired,
    loginFail: PropTypes.func.isRequired
  };

  static contextTypes = {
    history: PropTypes.object.isRequired
  };

  login = (status) => {
    if (status.status === 'connected') {
      this.props.loginSuccess(status);
      this.context.history.pushState({ user: status }, '/home');
    } else {
      this.props.loginFail(status);
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.welcome}>
          <FormattedMessage
            id="splash.welcome"
            description="splash welcome"
            defaultMessage="Welcome to my slot"
          />
        </h1>
        <div className={styles.bg}>
          <img src={require('./rambow.gif')} alt=""/>
        </div>
      </div>
    );
  }
}

export default connect(state => state, auth)(Splash);
