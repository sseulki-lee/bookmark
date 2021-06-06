import api from "./api/api";

const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");

const ROOT_DIR = `${__dirname}/..`;

const app = new Koa();
const router = new Router();

router.use("/api", api.routes());

app.use(serve(`${ROOT_DIR}/bundles`));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000, () => console.log("http://localhost:3000"));
