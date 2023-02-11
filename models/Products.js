const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    about: {
      ingredients: { type: String },
      allergens: { type: String },
      packaging: { type: String },
      storage: { type: String },
    },
    price: [{ weight: String, packaging: String, sgdPrice: Number }],
    image: [{ packaging: String, imageSrc: String }], //Can find out more about the base64
    // added packaging in the image array - when cust select "Kraft Pouch" -> the corresponding image will show instead
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
