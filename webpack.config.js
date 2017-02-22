const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    disable: process.env.NODE_ENV === 'development'
});

console.log( process.env.NODE_ENV );

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [
                    'css-loader',
                    'sass-loader'
                ],
                // use style-loader in development
                fallback: 'style-loader'
            })
        }, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            exclude: /node_modules/,
            use: [{
                    loader: 'file-loader',
                    query: {
                        hash: 'sha512',
                        digest: 'hex',
                        name: '[hash].[ext]'
                    }
                }, {
                    loader: 'image-webpack-loader',
                    query: {
                        progressive: true,
                        optimizationLevel: 7,
                        interlaced: false
                        // more here: https://github.com/tcoopman/image-webpack-loader#usage
                    }
                }
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,
            use: 'url-loader?limit=1024&name=fonts/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `v${require('./package.json').version}`,
            raw: false,
            entryOnly: true
        }),
        new ExtractTextPlugin({
            filename: 'build/[name].css',
            disable: process.env.NODE_ENV === 'development'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, '/'),
        publicPath: '/build/',
        inline: false,
        compress: true,
        port: 3000
    }
};