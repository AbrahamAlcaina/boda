import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
      return (
          <div>
              <Helmet title="Home" />
              <h5>Main:</h5>
          </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(Home);
