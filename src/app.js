import __babelPolyfill from "babel-polyfill";

import koa from "koa";
import router from "koa-route";

import * as users from "./api/users";

const app = new koa();

app.use(router.get( '/topActiveUsers', users.getTopActiveUsers ));
app.use(router.get( '/users', users.getUserDetails ));

app.on("error", error => {
  console.error(error.stack);
});

const port = process.argv.length >= 3 ? process.argv[2] : 8000;
app.listen(port);
