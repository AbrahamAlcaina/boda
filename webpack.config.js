'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: '#source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'static/dist'),
        filename: 'app.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV' : JSON.stringify('development')
        }
    }),
    ],
    node: {
      fs: "empty"
    },
    resolve: {
      modulesDirectories: [
        'src',
        'node_modules'
      ],
      extensions: ['', '.json', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: path.join(__dirname, 'src'),
            query: {
                plugins: [
                    ['react-transform', {
                        'transforms': [{
                            transform: 'react-transform-hmr',
                            // If you use React Native, pass 'react-native' instead:
                            imports: ['react'],
                            // This is important for Webpack HMR:
                            locals: ['module']
                        },
                        {
                            'transform': 'react-transform-catch-errors',
                            'imports': ['react', 'redbox-react']
                          }]
                    }],
                    ['transform-object-assign']
                ]
            }
        }]
    }
};
