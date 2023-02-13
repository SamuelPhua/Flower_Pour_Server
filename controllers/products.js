const express = require("express");
const Products = require("../models/Products");

// GET PRODUCT BY NAME
// Test: Entered
const getProduct = async (req, res) => {
  console.log(req.params.name);
  try {
    const product = await Products.findOne({ name: req.params.name });
    if (!product) {
      console.log("product not found");
      return res.json({ status: "error", message: "product not found" });
    }
    res.json(product);
  } catch (error) {
    console.log("PUT /products/product", error);
    res.status(400).json({ status: "error", message: "an error has occurred" });
  }
};

module.exports = { getProduct };
