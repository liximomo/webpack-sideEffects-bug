const webpack = require("webpack");

const compiler = webpack(require("../webpack.config"));

compiler.run((err, stats) => {
  // Stats Object
  if (err) {
    console.error(err);
    return;
  }

  console.log(
    stats.toString({
      chunks: false, // Makes the build much quieter
      colors: true // Shows colors in the console
    })
  );
});
