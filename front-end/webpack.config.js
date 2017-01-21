var path = require('path');
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
        extensions: [''/*for react*/, '.js', '.jsx']
    },
    module : {
        preLoaders: [{
            test: /\.jsx?$/,
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],
            loader: 'eslint-loader'
        }],
        loaders: [
            {
                test   : /\.jsx?$/,
                loaders: ['react-hot', 'babel-loader'],
                path   : path.join(__dirname, 'src')
            }
        ]
    },
    eslint : {
        configFile : path.resolve(__dirname, '.eslintrc.json')
    }
}