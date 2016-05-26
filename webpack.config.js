module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    module: {
      loaders: [
        {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
        {test: /\.css$/, loader: 'style!css'},
        {test: /\.html$/, loader: 'html', exclude: /node_modules/},
        {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file'}
      ]
  }
};