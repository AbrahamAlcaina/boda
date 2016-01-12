import React, { PropTypes } from 'react';
import { AppBar, Avatar } from 'material-ui';
import { Colors } from 'material-ui/lib/styles';
import { Link } from 'react-router';
const logoImage = require('./icon.png');

const nav = ({}) => {
  return (
    <AppBar
      title = "Nicole i Abraham"
      iconElementLeft = {
        <Link to="/">
          <Avatar src={logoImage} color={Colors.grey50} />
        </Link>
      }
    />
  );
};

nav.propTypes = {
  logout: PropTypes.func
};

export default nav;
