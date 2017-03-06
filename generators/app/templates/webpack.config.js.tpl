const path = require('path');

module.exports = {
  entry: './<%= sourceDir %>/index.ts',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts']
  },
  output: {
    filename: '<%= name %>.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader'
      }
    ],
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        enforce: 'pre'
      },
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        exclude: /(node_modules)/,
        options: { /* Loader options go here */ }
      }
    ]
  }
};
