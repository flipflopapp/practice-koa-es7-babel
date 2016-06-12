import __polyfill from "babel-polyfill";
import * as users from "../../domain/users";
import should from "should";

describe("top active users", () => {

  it("Gets Top Active Users", async () => {
    let result = await users.getTopActiveUsers(0);
    console.log(result);

    should.exist(result);
  });

});
