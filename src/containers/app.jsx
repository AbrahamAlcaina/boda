import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import AppBar from 'material-ui/lib/app-bar';
import { FormattedMessage } from 'react-intl';

class App extends Component {
  static propTypes = {
    children: PropTypes.any
  };
  render() {
    return (
          <div>
              <Helmet
                title="Nicole i Abraham"
                titleTemplate="Nicole i Abraham - %s"
                meta={[
                      { 'char-set': 'utf-8' },
                      { name: 'description', content: 'My super dooper dope app' }
                ]}
              />
              <AppBar
                title={
                  <FormattedMessage
                    id="nav.title"
                    defaultMessage="titulillo"
                  />
                }
                iconClassNameRight="muidocs-icon-navigation-expand-more"
              />
              {this.props.children}
          </div>
      );
  }
}

export default App;
