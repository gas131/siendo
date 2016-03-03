module.exports = {
module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders:['react-hot','babel-loader']
    },
    {
     test: /\.html$/,
 	   loader: "file?name=[name].[ext]",
    }
  ],
},
  context: __dirname,
  entry: {
  	javascript: './js/src/app.js',
  	html: './home.html' 
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/js/build",
  },
}