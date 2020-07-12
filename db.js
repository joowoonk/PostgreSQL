//this one is going to represent our dabase and connect from server

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "password",
  database: "todo_database",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
