const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const pkg = require('./package.json');

module.exports = {
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        // filename: '[name].bundle.js',
        filename: pkg.name + "." + pkg.version + '.js',
        path: path.resolve(__dirname, './build'),
    },
    target: 'node',
    // externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: [
                /node_modules/,
                /build/,
            ],
            options: {}
        },],
    },
    resolve: {
        extensions: ['.js', '.ts', '.json'],
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },

    performance: {
        hints: false
    },
    devtool: 'cheap-source-map',
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            cache: '.uglify-cache',
            parallel: true,
            uglifyOptions: {
                ecma: 8,
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