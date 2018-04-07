const webpack = require('webpack');
const path = require('path')


module.exports = {
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './build'),
    },
    
    module: {        
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                }
            },
        ]
    },
    performance: {
        hints: false
      },
    devtool: 'cheap-source-map',
                
}
