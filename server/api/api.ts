import bookmarkApi from "./bookmarkApi";

const Router = require("koa-router");
const api = new Router();

api.use("/bookmarks", bookmarkApi.routes());

export default api;