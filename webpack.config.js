const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "~": path.resolve(__dirname, "src"),
      "assets": path.resolve(__dirname, "src/assets")
    }
  },
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./src/main.js",
  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"),      //상대경로가 아닌 절대경로 사용해야함 path: "dist" <- 상대경로
    // filename: "main.js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.s?css$/, //.css로 끝나는 파일을 찾는 정규식   
        use: [
          "vue-style-loader",
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        use: [
          "babel-loader"
        ] 
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: "./index.html"
    }),
    new CopyPlugin({
      patterns: [{
        from: "static"
      }]
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    host: "localhost"
  }
}


// __dirname : 현재 파일이 있는 그 경로를 지칭