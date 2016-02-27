import React, { PropTypes } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AppBar from 'material-ui/lib/app-bar';
import { browserHistory } from 'react-router';
import { injectIntl, FormattedMessage } from 'react-intl';

class LeftNavBar extends React.Component {
  static propTypes = {
    navigation: PropTypes.any.isRequired
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
          openRight
          onRequestChange={this.handleRequestChange}
        >
          <AppBar
            showMenuIconButton={false}
            title={
              <FormattedMessage
                id="Nav.navigateOptions"
                description="Title options navigation"
                defaultMessage="Navegar"
              />
            }
          />
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

export default injectIntl(LeftNavBar);
