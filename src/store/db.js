import pg from "pg";
import promisify from "es6-promisify";

import { db_url } from "../config";

const pgConnect = promisify(pg.connect.bind(pg), {multiArgs: true});
const pgQuery = promisify((client, query, params, cb) => client.query(query, params, cb));

export async function client() {
  try {
    const [client, close] = await pgConnect(db_url);
    return { client, close };
  } catch(err) {
    err.status = 500; // internal server error
    throw(err);
  }
}

export async function query(client, sql, ...params) {
  return await pgQuery(client, sql, params || []);
}

export async function queryWithTimeout(client, timeout, sql, ...params) {
  return await pgQuery(client, sql, params || []);
}