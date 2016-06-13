var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');

module.exports = {
	plugins : [commonsPlugin],
	entry: {
		index: path.join(__dirname, 'src/test.js')
	},
	output: {
		path: path.join(__dirname, 'result'),
		filename: '[name].js'
	},
	module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, loader: 'babel' },
      { test: /\.scss$/, include:[path.resolve(__dirname, 'src/css')], loader: 'style-loader!css-loader!sass-loader'},
      { test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
    ]
  }
}