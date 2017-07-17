const path = require('path')

module.exports = {
  entry: {
    app: "./src/app.js",
    appReactStudy: "./src/appReactStudy.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map'
}
