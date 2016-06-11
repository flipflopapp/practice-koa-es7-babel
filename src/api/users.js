import * as usersModule from "../domain/users";

export async function getTopActiveUsers(ctx) {
  const page = (this.params.page) ? this.params.page : 0;
  
  const { users, error, code } = await usersModule.getTopActiveUsers(page);
  
  if (user) ctx.body = { user };
  if (message) ctx.message = message;
  ctx.status = code;
}


export async function getUserDetails(ctx) {
  const id = this.params.id;

  if (!id) {
    this.response.status = 400;
    this.response.message = "url should have an `id` parameter";
    return;
  }

  const { user, message, code } = await usersModule.getUserDetails(id);

  if (user) ctx.body = { user };
  if (message) ctx.message = message;
  ctx.status = code;
}
