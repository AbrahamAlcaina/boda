import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import Menu from 'material-ui/lib/svg-icons/navigation/menu';
import IconButton from 'material-ui/lib/icon-button';
import { FormattedMessage } from 'react-intl';
import { LeftNavBar } from '../molecules';

export default class Nav extends React.Component {

  static propTypes = {
    navigation: PropTypes.any.isRequired
  }

  onClick = () => browserHistory.push('/');
  handleLeftIconButtonTouchTap = () => this.refs.leftNav.handleToggle();

  render() {
    return (
      <div>
      <AppBar
        title={
          <FormattedMessage
            id="nav.title"
            defaultMessage="titulillo"
          />
        }
        style={{
          position: 'fixed'
        }}
        iconElementLeft={
          <img
            src="img/rings.png"
            height={48}
            width={48}
            onClick={this.onClick}
            onTouchTap={this.conClick}
          />
        }
        iconElementRight={
          <IconButton onTouchTap={this.handleLeftIconButtonTouchTap}><Menu /></IconButton>
        }
        onTitleTouchTap={this.onClick}
        onLeftIconButtonTouchTap={this.onClick}
      />
      <LeftNavBar ref={'leftNav'} navigation={this.props.navigation} />
    </div>
    );
  }
}
