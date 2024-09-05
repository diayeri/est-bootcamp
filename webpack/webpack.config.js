// node.js 의 path 모듈을 불러옴
// - 운영체제별 경로 문법(구분자: / 혹은 \)을 절대 경로로 반환
const path = require("path");

// 모듈을 밖으로 빼내는 노드 JS문법
// - 엔트리, 아웃풋, 번들링 모드 설정
module.exports = {
  mode: "development",
  entry: {
    main: path.resolve("./src/app.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      // 여기서 로더를 추가할 수 있습니다.
      // {
      //   // 로더가 처리해야할 파일의 패턴(정규표현식)입니다.
      //   // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$ 는 .js 로 끝나는 모든 파일을 의미합니다.
      //   // 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 의미합니다.
      //   test: /\.js$/,
      //   use: [
      //     // 위와 일치하는 패턴의 파일이 전달될 로더를 설정합니다.
      //     path.resolve("./myLoader.js"),
      //   ],
      // },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   type: "asset/inline",
      // },
      {
        test: /\.(png|jpg|gif|svg|jpeg|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
          },
        },
      },
    ],
  },
};
