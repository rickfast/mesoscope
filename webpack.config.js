var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: "./web/static/js/app.js",
  output: {
    path: "./priv/static",
    filename: "js/app.js"
  },

  resolve: {
    modulesDirectories: [ "node_modules", __dirname + "/web/static/js" ],
    alias: {
      phoenix: __dirname + "/deps/phoenix/web/static/js/phoenix.js"
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ["es2015", "react"]
      }
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ["es2015", "react"]
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("css")
    }]
  },
  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new CopyWebpackPlugin([
      { from: "./web/static" },
      { from: "./deps/phoenix_html/web/static/js/phoenix_html.js",
        to: "js/phoenix_html.js" }
    ])
  ]
};
