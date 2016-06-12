import __polyfill from "babel-polyfill";
import * as users from "../../domain/users";
import should from "should";

describe("top active users", () => {

  it("Gets Top Active Users", async () => {
    let result = await users.getTopActiveUsers(0);

    should.exist(result);
    result.length.should.be.above(0);

    should.exist(result[0].id);
    should.exist(result[0].name);
    should.exist(result[0].createdAt);
    should.exist(result[0].count);
    should.exist(result[0].listings);
  });

});
