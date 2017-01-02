var path = require('path');
var webpack = require('webpack');
console.log('directory is ', __dirname);

module.exports = {
    context: __dirname,
    entry  : [
        './src/index'
    ],
    output : {
        path    : path.join(__dirname, '..', 'public/dist/bundle'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module : {
        loaders: [
            {
                test   : /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                path   : path.join(__dirname, 'src')
            }
        ]
    }
}