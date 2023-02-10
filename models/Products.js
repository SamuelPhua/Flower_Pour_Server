const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    about: {
      ingredients: { type: String },
      allergens: { type: String },
      packaging: { type: String },
      storage: { type: String },
    },
    image: { type: String }, //Can find out more about the base64
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
