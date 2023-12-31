const express = require("express");
const server = express();
const mongoose = require("mongoose");
const productRouters = require("./routes/Product");
const categoriesRouter = require("./routes/Category");
const brandsRouter = require("./routes/Brand");
const usersRouter = require("./routes/Users");
const authRouter = require("./routes/Auth");

//middlewares
const cors = require("cors");
server.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);

server.use(express.json()); // to parse req.body

server.use("/products", productRouters.router);
server.use("/categories", categoriesRouter.router);
server.use("/brands", brandsRouter.router);
server.use("/users", usersRouter.router);
server.use("/auth", authRouter.router);

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
