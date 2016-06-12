import createError from "http-errors";
import * as db from "../store/db";
import * as sql from "../store/sql";

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
    close(); // close db connection
  }
}

export async function getUserDetails(id) {
  const { client, close } = await db.client();

  try {
    const { rows: user } = await db.query(client, sql.UserInfo, id);
    user = user.shift(); // find one

    if (!user) {
      // bad request
      throw createError.NotFound();
    }

    const { rows: companies } = await db.query(client, sql.UserCompanies, id);
    const { rows: createdListings } = await db.query(client, sql.UserCreatedListings, id);
    const { rows: applications } = await db.query(client, sql.UserApplications, id);

    console.log(applications);

    return Object.assign(user, {
      companies,
      createdListings,
      applications: applications.map(a => {
        return {
          id: a.id,
          createdAt: a.createdAt,
          listing: {
            id: a.listing_id,
            name: a.listing_name,
            description: a.listing_description
          }
        }
      })
    });

  } finally {
    close(); // close db connection
  }

}
