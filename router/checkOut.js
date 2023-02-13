const express = require("express");
const router = express.Router();

const { createOrder } = require("../controllers/checkout");

router.put("/createOrder", createOrder);

module.exports = router;
