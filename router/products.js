const express = require("express");
const router = express.Router();
const { getProduct } = require("../controllers/products");

// GET PRODUCT BY NAME
// Test 1: Working when I enter this in Postman -->{"name":"Pineapple Balls"}
router.put("/getProduct/:name", getProduct);

module.exports = router;
