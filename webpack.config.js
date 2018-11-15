module.exports={
    entry:"./js/app.js",
    output: {
      filename: "out.js"
    },
    mode: 'development',
    watch: true,
    module: {
      rules: [
          {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }]
      }
    }
