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
        loaders: [
            {
                test   : /\.jsx?$/,
                loader : 'babel-loader',
                path   : path.join(__dirname, 'src')
            }
        ]
    }
}