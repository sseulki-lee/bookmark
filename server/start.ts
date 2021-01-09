const koa = require("koa");
const serve = require("koa-static");

const ROOT_DIR = `${__dirname}/..`;

const app = new koa();

app.use(serve(`${ROOT_DIR}/bundles`));

app.listen(3000, () => console.log("http://localhost:3000"));
