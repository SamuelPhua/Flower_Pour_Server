const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
  customerPhone: { type: String, required: true },
  email: { type: String, required: true },
  deliveryMethod: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  apartment: { type: String, required: true },
  postalCode: { type: String, required: true },
  discountCode: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  paymentAmount: { type: String, required: true },
  cart: [
    {
      name: { type: String, required: true },
      weight: { type: String, required: true },
      packaging: { type: String, required: true },
      price: { type: String, required: true },
      quantity: { type: String, required: true },
      total: { type: String },
    },
  ],
});

const Checkout = mongoose.model("Checkout", CheckoutSchema)

module.exports = Checkout
