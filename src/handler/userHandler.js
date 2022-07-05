const UserService = require("../services/userServices");

function login(req, resp) {
  //   console.log(req.query);
  let email = req.query.email;
  let password = req.query.password;

  let result = UserService.login(email, password);
  if (result.status === true) {
    resp.status(200).send("Login Successful");
  } else {
    resp.status(401).send(result.error);
  }
}

module.exports = {
  login,
};
