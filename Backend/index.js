const express = require("express");
const server = express();
const mongoose = require("mongoose");
const productRouters = require("./routes/Product");

//middlewares
server.use(express.json()); // to parse req.body

server.use("/products", productRouters.router);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ecommerce");
  console.log("database Connected");
}

server.get("/", (req, res) => {
  res.json({ status: "Found" });
});

server.listen(8080, () => {
  console.log("Server Started");
});
