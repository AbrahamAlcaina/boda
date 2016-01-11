import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import DocumentMeta from 'react-document-meta';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
class Html extends Component {
  static propTypes = {
    locale: PropTypes.string,
    localeData: PropTypes.array,
    localeMessages: PropTypes.object,
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object,
    css: PropTypes.array
  };

  render() {
    const {locale, localeData, localeMessages, assets, component, store, css} = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const style = {
      height: '100%'
    }
    const data = {
      store: store.getState(),
      locale: locale,
      localeData: localeData,
      localeMessages: localeMessages
    };
    /* styles (will be present only in production with webpack extract text plugin)
    {Object.keys(assets.styles).map((style, key) =>
      <link href={assets.styles[style]} key={key} media="screen, projection"
            rel="stylesheet" type="text/css" charSet="UTF-8"/>
    )}
    */
    return (
      <html lang={locale} style={style}>
        <head>
          <link rel="dns-prefetch" href={process.env.CDN} />
          <link rel="dns-prefetch" href={process.env.API_URL} />
          <link rel="dns-prefetch" href="//fonts.googleapis.com/css" />
          <link rel="shortcut icon" href="/favicon.ico" />
          {DocumentMeta.renderAsReact()}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link href="//fonts.googleapis.com/css?family=Roboto:400,300,500,700" rel="stylesheet" type="text/css" />
          {css.map( item => <style dangerouslySetInnerHTML={{__html: item.toString()}} />)}

          {/* (will be present only in development mode) */}
          {/* outputs a <style/> tag with all bootstrap styles + App.scss + it could be CurrentPage.scss. */}
          {/* can smoothen the initial style flash (flicker) on page load in development mode. */}
          {/* ideally one could also include here the style for the current page (Home.scss, About.scss, etc) */}
          { Object.keys(assets.styles).length === 0 ? <style dangerouslySetInnerHTML={{__html: require('bootstrap-loader/no-op') + require('../containers/App/App.scss')._style}}/> : null }
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(data)};`}} charSet="UTF-8"/>
          <script src={assets.javascript.main} charSet="UTF-8"/>
        </body>
      </html>
    );
  }
}

export default Html;
