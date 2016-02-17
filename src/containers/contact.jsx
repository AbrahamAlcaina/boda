import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

class Contact extends Component {
    render() {
      return (
          <div>
              <Helmet title="contact" />
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

export default connect(mapStateToProps)(Contact);
