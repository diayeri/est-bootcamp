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
};
