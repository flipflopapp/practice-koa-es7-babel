// sql queries for user related info

// Top Users

export const TopUsersList = `
SELECT id, COUNT(id) AS "applicationCount"
FROM companies
GROUP BY id
ORDER BY "applicationCount"
`;

// User info

export const UserInfo = `
SELECT id, created_at AS "createdAt", name
FROM users
WHERE id=$1
`;

// Top listings of a user

const NumOfRecentListings = 3;

export const RecentUserListings = `
SELECT name, description 
FROM listings 
WHERE created_by=$1 
ORDER BY created_at 
LIMIT ${NumOfRecentListings}
`;

// User companies

export const UserCompanies = `
SELECT company_id AS id, contact_user AS "isContract", created_at AS "createdAt", name
FROM teams
INNER JOIN companies
On teams.company_id=companies.id
WHERE user_id=$1
ORDER BY created_at DESC
`;

export const UserCreatedListings = `
SELECT id, created_at AS "createdAt", name, description
FROM listings
WHERE created_by=$1;
`;

export const UserApplications = `
SELECT app.id AS "id", app.created_at AS "createdAt", listing_id, listing.name AS "listing_name", listing.description AS "listing_description"
FROM applications AS app
INNER JOIN listings AS listing
ON app.listing_id=listing.id
WHERE app.id=$1
`;

