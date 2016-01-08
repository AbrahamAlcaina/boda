import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import { pushState } from 'redux-router';
import { app } from 'config';

import * as auth from 'redux/modules/auth';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  static childContextTypes = {
    locales: PropTypes.array.isRequired,
    currentLocale: PropTypes.string.isRequired
  };

  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <DocumentMeta app={app}/>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user }),
  { pushState, auth })(App);
