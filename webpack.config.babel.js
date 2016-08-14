import path from 'path';

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'react-hot!babel' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel!eslint' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
