const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./dist/index.js",
    output: {
        filename: 'boundle.js',
        path: path.resolve(__dirname, './dist'),

    },
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'source/'
                    }
                }]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'link:href']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    },
}
