import createError from "http-errors";
import * as db from "../store/db";
import * as sql from "../store/sql";

import __userDetails from "../temp/user-details";

// this should be cacehed in redis

export async function getTopActiveUsers(page) {
  const Timeout = 10 * 60; // 10 mins
  const PageSize = 10;

  const { client, close } = await db.client();

  try {
    // top active users
    const { rows: topUsers } = await db.cachedQuery(client, Timeout, sql.TopUsersList);
    const topUsersInPage = topUsers.slice(page * PageSize, (page+1) * PageSize);

    let result = [];
    for(let user of topUsersInPage) {
      let { rows: details } = await db.query(client, sql.UserInfo, user.id);
      let { rows: listings } = await db.query(client, sql.RecentUserListings, user.id);
      result.push( Object.assign(details[0], 
                      { 
                        count: user.applicationCount, 
                        listings: (listings && listings.map(l => l.name)) || []
                      } ));
    }

    return result;

  } finally {
    close(); // close db
  }
}

export async function getUserDetails(id) {
  const user = __userDetails[id];

  if (!user) {
    // bad request
    throw createError.NotFound();
  }

  return { user: __userDetails[id], code: 200 };
}
