import __babelPolyfill from "babel-polyfill";

import koa from "koa";
import router from "koa-route";
import bodyParser from "koa-body";

import * as users from "./api/users";

app.use(router.get('/topActiveUsers', bodyParser, users.topActiveUsers));
app.use(router.get('/users', bodyParser, users.getUserDetails));

const port = process.argv.length >= 3 ? process.argv[2] : 8000;
app.listen(port);
