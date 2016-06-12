import __polyfill from "babel-polyfill";
import * as db from "../../store/db";
import * as sql from "../../store/sql";
import should from "should";

describe("test db", () => {

  let _db;

  beforeEach(async () => {
    _db = await db.client();
  });

  afterEach(async () => {
    await _db.close();
  });

  it("test top users list query", async () => {
    const { rows: result } = await db.query(_db.client, sql.TopUsersList);
    should.exist(result);
    result.length.should.be.above(0);
  });

  it("test multiple queries", async () => {
    const query = `SELECT * FROM users`;

    const { rows: result } = await db.query(_db.client, query);
    should.exist(result);
    result.length.should.be.above(0);

    const { rows: result1 } = await db.query(_db.client, query);
    should.exist(result1);
    result1.length.should.equal(result.length);
  });

  it("test user companies query", async () => {
    const { rows: result } = await db.query(_db.client, sql.UserCompanies, 1);
    should.exist(result);
    result.length.should.be.above(0);
  });

  it("test created listing", async () => {
    const { rows: result } = await db.query(_db.client, sql.UserCreatedListings, 1);
    should.exist(result);
    result.length.should.be.above(0);
  });

  it("test user applications", async () => {
    const { rows: result } = await db.query(_db.client, sql.UserApplications, 1);
    should.exist(result);
    result.length.should.be.above(0);
  });

});
