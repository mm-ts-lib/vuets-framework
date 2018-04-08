const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './build'),
    },

    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {}
        }, ]
    },
    performance: {
        hints: false
    },
    devtool: 'cheap-source-map',
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                ecma: 6,
                warnings: false,
                parse: {},
                compress: {},
                mangle: false,
                output: {
                    comments: false,
                    beautify: false,
                },
                toplevel: true,
                nameCache: null,
                ie8: false,
                keep_classnames: undefined,
                keep_fnames: false,
                safari10: false,
            }
        }),
    ]
};