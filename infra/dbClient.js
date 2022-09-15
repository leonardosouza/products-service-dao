const { HOST_DB, PORT_DB, USER_DB, PASS_DB, DATABASE } =
  require("dotenv").config().parsed;

const { Client } = require("pg");

const client = new Client({
  host: HOST_DB,
  port: PORT_DB,
  user: USER_DB,
  password: PASS_DB,
  database: DATABASE,
});

/*
     PROMISE API
         |
      <pending>
      /       \
  rejected    resolved
  .catch()    .then()
*/

client
  .connect()
  .then(() => {
    console.log("Postgree Connected!");
  })
  .catch((err) => {
    console.log("Connection failed with code:", err.code);
  });

module.exports = client;
