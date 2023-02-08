const express = require("express");
// 다운로드한 express를 가져옵니다.
const app = express();

const path = require("path");
// Node.js에서 파일이나 디렉토리의 경로를 다룰 때 사용하는 내장 모듈
const port = 3000;
// 사용할 서버 포트 값은 8800 이 아니어도 괜찮습니다.

app.use(express.static(path.join(__dirname, "/")));
// 기준이 될 경로를 지정해 줍니다.

app.get("/*", (req, res) => {
  console.log("fe");
  res.sendFile(path.join(__dirname, "/main.js"));
});
// *은 모든 경로입니다. 즉 모든 경로로 get 요청 시 index.html을 전달해 줍니다.

app.listen(port);
