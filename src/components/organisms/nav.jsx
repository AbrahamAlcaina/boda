import React, { PropTypes } from 'react';
import { AppBar, Avatar } from 'material-ui';
import { NavMenu } from '../molecules';
import { Link } from 'react-router';
const logoImage = require('./icon.png');

const nav = ({}) => {
  return (
    <AppBar
      title = "My casino"
      iconElementLeft = {
        <Link to="/home">
          <Avatar src={logoImage} />
        </Link>
      }
      iconElementRight = {
        <NavMenu />
      }
    />
  );
};

nav.propTypes = {
  logout: PropTypes.func
};

export default nav;
