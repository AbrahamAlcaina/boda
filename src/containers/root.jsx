import React, { Component, PropTypes } from 'react';
import styles from './root.style';

class Root extends Component {

  static propTypes = {
    content: PropTypes.string,
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
    const scrollFunction = `
    (function( win ){
    	var doc = win.document;
    	// If there's a hash, or addEventListener is undefined, stop here
    	if( !location.hash && win.addEventListener ){
    		//scroll to 1
    		window.scrollTo( 0, 1 );
    		var scrollTop = 1,
    			getScrollTop = function(){
    				return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
    			},
    			//reset to 0 on bodyready, if needed
    			bodycheck = setInterval(function(){
    				if( doc.body ){
    					clearInterval( bodycheck );
    					scrollTop = getScrollTop();
    					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
    				}
    			}, 15 );
    		win.addEventListener( "load", function(){
    			setTimeout(function(){
    					//reset to hide addr bar at onload
    					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
    			}, 0);
    		} );
    	}
    })( this );
    `;
    return (
      <html style={styles.html}>
        <head>
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
          <link
            href="//fonts.googleapis.com/css?family=Roboto:400,300,500,700"
            rel="stylesheet"
            type="text/css"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#00bcd4" />
          <script dangerouslySetInnerHTML={{ __html: scrollFunction }}></script>
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
