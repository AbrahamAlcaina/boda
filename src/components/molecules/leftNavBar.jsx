import React, { PropTypes } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { browserHistory } from 'react-router'


export default class LeftNavBar extends React.Component {
  static propTypes = {
    navigation: PropTypes.array.isRequire
  };

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });
  handleRequestChange = open => this.setState({ open });
  handleNavigate = path => {
    this.handleClose();
    browserHistory.push(path);
  };

  render() {
    return (
      <div>
        <LeftNav
          docked= {false}
          width={200}
          open={this.state.open}
          onRequestChange={this.handleRequestChange}
        >
          {
            this.props.navigation.map(option => (
                <MenuItem
                  onTouchTap={this.handleNavigate.bind(this, option.get('path'))}
                  value={option.get('path')}
                  key={option.get('name')}
                >
                  {option.get('name')}
                </MenuItem>
            ))
          }
        </LeftNav>
      </div>
    );
  }
}
