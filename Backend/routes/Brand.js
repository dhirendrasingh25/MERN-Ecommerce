const express = require("express");
const { fetchBrands } = require("../controller/Brand");

const router = express.Router();

router.get("/", fetchBrands);

exports.router = router;
