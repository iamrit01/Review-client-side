const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const db = require("./config/mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, function (err) {
  if (err) {
    console.log(`Server Error  ${err}`);
    return;
  }
  console.log(`Server running on port no ${port}`);
});
