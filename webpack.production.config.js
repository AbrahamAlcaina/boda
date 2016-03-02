'use strict';

var path = require('path');
var webpack = require('webpack');
var del = require('del');

class CleanPlugin {
    constructor(options) {
        this.options = options;
    }

    apply () {
        del.sync(this.options.files);
    }
}

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'static/dist'),
        filename: 'app.min.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new CleanPlugin({
            files: ['dist/*']
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"development"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        })
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
                    ['transform-object-assign']
                ]
            }
        }]
    }
};
