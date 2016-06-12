// sql queries for user related info

// Top Users

export const TopUsersList = `
SELECT id, COUNT(id) AS "applicationCount"
FROM companies
GROUP BY id
ORDER BY "applicationCount"`;

// User info

export const UserInfo = `
SELECT id, created_at AS "createdAt", name
FROM users
WHERE id=$1`;

// Top listings of a user

const NumOfRecentListings = 3;

export const RecentUserListings = `
SELECT name, description 
FROM listings 
WHERE created_by=$1 
ORDER BY created_at 
LIMIT ${NumOfRecentListings}`;

