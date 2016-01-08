var Express = require('express');
var webpack = require('webpack');

var config = require('../src/config');
var webpackConfig = require('./dev.config');
var compiler = webpack(webpackConfig);

var host = process.env.HOST || 'localhost';
var port = parseInt(config.port, 10) + 1 || 3001;
var serverOptions = {
  contentBase: 'http://' + host + ':' + port,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
};

var app = new Express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});
if (process.env.HTTPS) {
  var fs = require('fs');
  var https = require('https');
  var privateKey  = fs.readFileSync('certificate/self_signed_ssl.key', 'utf8');
  var certificate = fs.readFileSync('certificate/self_signed_ssl.crt', 'utf8');
  var http = require('http'),
      httpProxy = require('http-proxy');

  //
  // Create the HTTPS proxy server in front of a HTTP server
  //
  var proxy = httpProxy.createServer({
    target: {
      host: host,
      port: 3000
    },
    ssl: {
      key: privateKey,
      cert: certificate
    }
  }).listen(4433);

  proxy.on('error', function(e) {
    console.log(e);
  });
}
