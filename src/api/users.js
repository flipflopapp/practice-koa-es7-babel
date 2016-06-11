import * as usersModule from "../domain/user";

import parse from "co-body";

export async function getTopActiveUsers(ctx) {
  const params = parse(this);
  const users = await usersModule.getTopActiveUsers(params.page);
  ctx.body = { users };
}


export async function getUserDetails(ctx) {
  const params = parse(this);
  const user = await usersModule.getUserDetails(params.id);
  ctx.body = { user };
}
