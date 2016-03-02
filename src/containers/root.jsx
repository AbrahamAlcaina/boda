import React, { Component, PropTypes } from 'react';
import styles from './root.style';

class Root extends Component {

  static propTypes = {
    content: PropTypes.string,
    css: PropTypes.object,
    initialState: PropTypes.object.isRequired,
    head: PropTypes.shape({
      title: PropTypes.shape({
        toComponent: PropTypes.func.isRequired
      }),
      meta: PropTypes.shape({
        toComponent: PropTypes.func.isRequired
      }),
      link: PropTypes.shape({
        toComponent: PropTypes.func.isRequired
      }),
    }),
    locale: PropTypes.string,
    localeMessages: PropTypes.any,
    localeData: PropTypes.any
  };

  renderInitialState() {
    if (this.props.initialState) {
      const innerHtml = `window.__INITIAL_STATE__ = ${JSON.stringify(this.props.initialState)}`;
      return <script dangerouslySetInnerHTML={{ __html: innerHtml }} />;
    }
    return void 0;
  }

  renderLocale() {
    if (!this.props.locale) {
      return void 0;
    }
    const {
      locale,
      localeMessages,
      localeData
    } = this.props;
    const language = { locale, localeMessages, localeData };
    const innerHtml = `window.__LANGUAGE__ = ${JSON.stringify(language)}`;
    return <script dangerouslySetInnerHTML={{ __html: innerHtml }} />;
  }

  renderEnvironment() {
    const innerHtml = `window.__ENVIRONMENT__ = '${__ENVIRONMENT__}'`;
    return <script dangerouslySetInnerHTML={{ __html: innerHtml }} />;
  }

  render() {
    const head = this.props.head;
    return (
      <html style={styles.html}>
        <head>
          <link rel="apple-touch-icon" sizes="57x57" href="/img/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/img/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/img/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/img/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/img/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/img/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/img/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/img/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/img/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
          <link rel="manifest" href="/img/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          <meta property="og:title" content="Nicole i Abraham" />
          <meta property="og:description" content="Nos casamos el 28 de mayo" />
          <meta property="og:image" content="http://nicoleiabraham.com/img/meta.jpg" />
          <meta property="og:url" content="http://nicoleiabraham.com/" />
          <meta property="og:type" content="website" />

          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link
            href="//fonts.googleapis.com/css?family=Roboto:400,300,500,700"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="css/app.css"
            rel="stylesheet"
            type="text/css"
          />
          {head.title.toComponent()}
          {head.link.toComponent()}
          {head.meta.toComponent()}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#d81b60" />
        </head>
        <body style={styles.body}>
            <div id="root" dangerouslySetInnerHTML={{ __html: this.props.content }} />
            {this.renderEnvironment()}
            {this.renderInitialState()}
            {this.renderLocale()}
            {head.script.toComponent()}
            <script src={!process.env.NODE_ENV ? '/app.js' : '/dist/app.min.js'}></script>
        </body>
      </html>
    );
  }
}

export default Root;
