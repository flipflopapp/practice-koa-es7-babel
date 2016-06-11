import __topActiveUsers from "../temp/top-active-users";
import __userDetails from "../temp/user-details";

export async function getTopActiveUsers(page) {
  return { users: __topActiveUsers };
}

export async function getUserDetails(id) {
  const user = __userDetails[id];

  if (!user) {
    // bad request
    return { error: "user not found", code: 400 };
  }

  return { user: __userDetails[id] };
}
