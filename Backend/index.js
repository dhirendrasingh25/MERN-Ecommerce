const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.json({ status: "Found" });
});

server.listen(8080, () => {
  console.log("Server Started");
});
