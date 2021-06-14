const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const routes = require("./router/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", require("./router/index"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Server Error  ${err}`);
    return;
  }
  console.log(`Server running on port no ${port}`);
});
