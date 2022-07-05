const express = require("express");
const app = express();
const UserHandler = require("./handler/userHandler");
const port = 3000;
const ip = "127.0.0.1";

// app.get("/", (req, resp) => {
//   resp.send("Hello from node server");
//   console.log(req.query);
//   console.log(req.ip);
// });

app.post("/login", UserHandler.login);

app.listen(port, ip, () => {
  console.log(`App is running on port ${port}`);
});
