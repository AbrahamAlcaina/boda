import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import { FormattedMessage } from 'react-intl';
import { LeftNavBar } from '../molecules';

export default class Nav extends React.Component {

  static propTypes = {
    navigation: PropTypes.array.isRequired
  }
  handleLeftIconButtonTouchTap = () => this.refs.leftNav.handleToggle();

  render() {
    return (
      <AppBar
        title={
          <FormattedMessage
            id="nav.title"
            defaultMessage="titulillo"
          />
        }
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap}
      >
        <LeftNavBar ref={'leftNav'} navigation={this.props.navigation} />
      </AppBar>
    );
  }
}
