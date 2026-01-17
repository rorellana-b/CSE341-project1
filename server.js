const express = require("express");
const app = express();

const mongodb = require("./data/database");
const e = require("express");

const port = process.env.PORT || 3000;

app.use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
