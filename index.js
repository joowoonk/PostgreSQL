const express = require("express");
const app = express();

const pool = require("./db");

app.use(express.json()); //=> req.body

//routes//

//get all todos

//get a todo

//create a todo
app.post("/todos", async (req, res) => {
  try {
    //await
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *", //$1 is a vairable it's going to defin what's going to be ->
      [description]
    );

    res.json(newTodo);
    console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

//detele a todo

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
