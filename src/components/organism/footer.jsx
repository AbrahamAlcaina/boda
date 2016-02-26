import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import style from './footer.style';

class Footer extends Component {
  static propTypes = {
    navigation: PropTypes.any.isRequired
  }
  render() {
    return (
      <footer style={style.container}>
        footer
      </footer>
    );
  }
}

export default injectIntl(Footer);
