const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  about: [
    { type: String },
    {
      ingredients: { type: String },
      allergens: { type: String },
      packaging: { type: String },
      storage: { type: String },
    },
  ],
  image: { type: String }, //Can find out more about the base64
});

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
