var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    'app'
  ],

  output: {
    path: path.join(__dirname + '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    root: __dirname + '/app',
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx'],
  },

  devtool: "source-map",

  module: {
    loaders: [
                { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
                { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']},
                { test: /\.css$/, loader: 'style!css' },
                { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
                { test: /\.woff$/,   loader: 'url-loader?limit=10000&minetype=application/font-woff' },
                { test: /\.ttf$/,    loader: 'file-loader' },
                { test: /\.eot$/,    loader: 'file-loader' },
                { test: /\.svg$/,    loader: 'file-loader' },
                { test: /\.png$/,    loader: 'file-loader' },
                { test: /\.gif$/,    loader: 'file-loader' }
             ]
  },
}
