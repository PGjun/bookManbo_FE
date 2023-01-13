const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    // 로컬 환경에서 http://localhost:3000/api 로 시작되는 요청을 라이브러리가 'api요청주소/api'로 프록싱해주게된다.
    createProxyMiddleware({
      target:
        "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbkmimi05281551001",
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
