const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const fs = require('fs');
// const appDirectory = fs.realpathSync(process.cwd());
const host = process.env.HOST || 'localhost';
// const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
	entry: './main.js',
    output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],
    devServer: {
        // static: resolveAppPath('src'),
        compress: true,
        hot: true,
        host,
        port: 8080,
        proxy: { 
            "/api/**": { 
                target: 'http://localhost:3000', 
                secure: false 
            }  
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

// export default Config;