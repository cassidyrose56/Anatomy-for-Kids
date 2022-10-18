const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './client/main.js',
    output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/index.html'
		})
	],
    devServer: {
        hot: true,
        proxy: {
            '/api': 'http://localhost:3000',
        }
    },
    module: {
		rules: [
			{
				// #regex saying that files have to end in .js
				test: /.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},

		]
	}
}