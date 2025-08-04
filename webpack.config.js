const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.argv.includes('--mode=production');
const isGhPages = process.env.GH_PAGES === 'true';

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js',
		publicPath: isGhPages ? '/dateswiper/' : '/',
	},
	mode: isProduction ? 'production' : 'development',
	devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 3000,
		historyApiFallback: true,
		hot: true,
		client: {
			overlay: {
				errors: true,
				warnings: false,
			},
			progress: true,
		},
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules[\\/]/,
				use: {
					loader: 'ts-loader',
					options: {
						transpileOnly: true,
					},
				},
			},
			{
				test: /\.scss$/,
				use: [
					isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								auto: true,
								localIdentName: isProduction
									? '[hash:base64:8]'
									: '[path][name]__[local]--[hash:base64:5]',
								exportLocalsConvention: 'camelCaseOnly',
							},
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							implementation: require('sass'),
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/[name].[contenthash][ext]',
				},
			},
			{
				test: /\.(ico)$/i,
				type: 'asset/resource',
				generator: {
					filename: '[name][ext]',
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.ico',
			minify: isProduction,
			publicPath: isGhPages ? '/dateswiper/' : './',
		}),
		...(isProduction
			? [
					new MiniCssExtractPlugin({
						filename: 'styles.[contenthash].css',
					}),
			  ]
			: []),
	],
	optimization: {
		minimize: isProduction,
		minimizer: ['...', ...(isProduction ? [new CssMinimizerPlugin()] : [])],
	},
};
