
var webpack = require('webpack');

module.exports = {
	entry: [
		'./src/App.jsx',
		"bootstrap-webpack"
	],
		output: {
		path: './public',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],
	module: {
		loaders: [
			{ 
				test: /.(js|jsx)?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react','es2015']
				}
			},
			{ test: require.resolve("jquery"), loader: "imports?jQuery=jquery" },
			{ test: /\.(css|less)$/,  	loader: 'style-loader!css-loader!less-loader' },
			{ test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf$/,    loader: "file-loader" },
			{ test: /\.eot$/,    loader: "file-loader" },
			{ test: /\.svg$/,    loader: "file-loader" }
		]
	}
 };
