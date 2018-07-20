const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: {
        index: './src/app.jsx'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            include: [path.resolve(__dirname, 'src')],
            exclude: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'bower_components')
            ],
            loader: 'babel-loader'
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css']
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};