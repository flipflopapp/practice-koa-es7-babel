import createError from "http-errors";

import __topActiveUsers from "../temp/top-active-users";
import __userDetails from "../temp/user-details";

export async function getTopActiveUsers(page) {
  return { users: __topActiveUsers, code: 200 };
}

export async function getUserDetails(id) {
  const user = __userDetails[id];

  if (!user) {
    // bad request
    throw createError.NotFound();
  }

  return { user: __userDetails[id], code: 200 };
}
