import __polyfill from "babel-polyfill";
import * as users from "../../domain/users";
import should from "should";

describe("top active users", () => {

  it("Gets Top Active Users", async () => {
    let result = await users.getTopActiveUsers(0); // page 0

    should.exist(result);
    result.length.should.be.above(0);

    // TODO replace with something more efficient
    should.exist(result[0].id);
    should.exist(result[0].name);
    should.exist(result[0].createdAt);
    should.exist(result[0].count);
    should.exist(result[0].listings);
  });

  it("Gets users details", async () => {
    let result = await users.getUserDetails(1); // id 1

    // TODO replace with a validation framework or something more efficient
    should.exist(result);
    should.exist(result.id);
    should.exist(result.createdAt);
    
    should.exist(result.companies);
    should.exist(result.companies[0].id);
    should.exist(result.companies[0].createdAt);
    should.exist(result.companies[0].name);
    should.exist(result.companies[0].isContact);
    should.exist(result.createdListings);
    should.exist(result.applications);
  });

});
