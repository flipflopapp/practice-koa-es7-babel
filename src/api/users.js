import * as usersModule from "../domain/users";

export async function getTopActiveUsers(ctx) {
  const page = (this.request.query.page) ? this.request.query.page : 0;
 
  try { 
    const users = await usersModule.getTopActiveUsers(page);
    ctx.body = { users };
  } catch(err) {
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
  }

}


export async function getUserDetails(ctx) {
  const id = this.request.query.id;

  if (!id) {
    ctx.body = { message: "id parameter is required in getUserDetails api" };
    ctx.status = err.status || 400;
  } 
  
  try {
    const user = await usersModule.getUserDetails(id);
    ctx.body = { user };
  } catch(err) {
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
  }

}
