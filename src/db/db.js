import pg from "pg";
import promisify from "es6-promisify";

import { db_url } from "../config";

const pgConnect = promisify(pg.connect.bind(pg), {multiArgs: true});
const pgQuery = promisify((client, query, params, cb) => client.query(query, params, cb));

export async function getClient() {
  try {
    const [client, done] = await pgConnect(db_url);
    return { client, done };
  } catch(err) {
    err.status = 500; // internal server error
    throw(err);
  }
}

export async function executeQuery(client, sql, ...params) {
  return await pgQuery(client, sql, params);
}
