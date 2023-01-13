const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api",
//     // 로컬 환경에서 http://localhost:3000/api 로 시작되는 요청을 라이브러리가 'api요청주소/api'로 프록싱해주게된다.
//     createProxyMiddleware({
//       target:
//         "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbkmimi05281551001",
//       pathRewrite: {
//         "^/api": "",
//       },
//     })
//   );
// };

// pathRewrite는 서버 API [https://jsonplaceholder.typicode.com/posts/1 이라고 가정했을 때 :
//추가해야 할 업무상 프로세스가 존재할 경우 화면에서 API URL path를 말 그대로 대체해주는 역할을 한다.
// 아래와 같이 설정할 경우 axios나 fetch 설정 시 /api/posts/1로 호출하게 되면 api는 '' 공백으로 대체되어 호출하게 된다.
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target:
        "/https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbkmimi05281551001&Query=강풀",
      // &QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101.js",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // URL ^/api -> 공백 변경
      },
    })
  );
};
