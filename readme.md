# Introduction


This is a very basic nodejs server for the purpose of giving a demo of my coding
ability. For a production application, I would add more testcases and
return better error values.

The time taken to complete this project was about 8 hours. It is the
first time I am building something from scratch with babel and async/await.


# Setup

## Install software


The project has following dependencies :-

* node version 4 or above
* postgres versipn 9 or above
* npm version 3 or above
* babel-cli, etc


## Setup database


```
./database/setup-db.sh 
```

You can also configure the server to use a remote postgres database using environment variable
DB_URL. Ex,

```
export DB_URL=postgres://user:password@/host/database
```

## Run testcases

* npm run test-db
* npm run test-domain
* npm run test-api

## Run the server


```
npm run start
```

## Curl testing


Get details of user with id 1

```
curl -X GET http://localhost:8000/users?id=1
```

Get top active user details

```
curl -X GET http://localhost:8000/topActiveUsers?page=0
```
 
