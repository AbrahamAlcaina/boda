import React, { PropTypes } from 'react';
import Snackbar from 'material-ui/lib/snackbar';

export default class SnackbarSimple extends React.Component {

  static propTypes = {
    message: PropTypes.any.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { message } = this.props
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message={message}
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default SnackbarSimple;
