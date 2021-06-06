const Router = require("koa-router");

const bookmarkApi = new Router();
bookmarkApi.get("/", async (ctx, next) => {
  const response = [{"url": "http://www.naver.com"}];
  ctx.body = response;
});

export default bookmarkApi;
