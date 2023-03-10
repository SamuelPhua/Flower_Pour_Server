const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    deliveryMethod: { type: String, required: true },
    address: { type: String }, // address not required for self-collection
    apartment: { type: String },
    postalCode: { type: String },
    deliveryCountry: { type: String },
    orderCurrency: { type: String }, // to default to 'SGD'
    discountCode: { type: String },
    deliveryCharge: { type: Number },
    checkoutAmount: { type: Number, required: true }, // front-end validation: checkoutAmount === paymentAmount (can be 0 if customer use coupons to pay for orders.)
    paymentMethod: { type: String },
    paymentAmount: { type: Number },
    orderStatus: { type: String }, // default to 'O' : 'open' (in case they need to be able to mark order as delivered in future to manage open orders.)
    cart: [
      {
        name: { type: String, required: true },
        weight: { type: String },
        packaging: { type: String },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        itemTotal: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Checkout", CheckoutSchema);
