const express = require("express");
const app = express();
const port = process.env.PORT || 6000;
require("dotenv").config();
app.use(express.json());
const connection = require("./connection/connection");
const v1Routes = require("./v1/routes/student");
const validation = require("./validation/index");
app.use("/v1", v1Routes);
//if we send any request then it will read it in json form
app.use(express.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
  res.status(400);
  res.send({
    message: err || err.message,
    data: {},
  });
});
app.listen(port, async () => {
  console.log(`Server is listening the port no ${port}`);
  await connection.conn();
});
