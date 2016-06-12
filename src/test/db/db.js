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

  it("test db", async () => {
    const query = `SELECT * FROM users`;
    const { rows: result } = await db.query(_db.client, query);
    should.exist(result);
    result.length.should.be.above(0);
  });

  it("test db for top users list query", async () => {
    const query = sql.TopUsersList;
    const { rows: result } = await db.query(_db.client, query);
    should.exist(result);
    result.length.should.be.above(0);
  });

});
