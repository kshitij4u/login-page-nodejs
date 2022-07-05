const UserAccessor = require("../accessor/userAccessor");

function login(email, password) {
  let user = UserAccessor.fetchUserInfo(email);
  console.log(UserAccessor.fetchUserInfo(email));
  if (!user) {
    return {
      status: false,
      error: "User does not exit..!",
    };
  } else {
    if (user.password === password) {
      return {
        status: true,
      };
    } else {
      return { status: false, error: "Password does not match..!" };
    }
  }
}

module.exports = {
  login,
};
