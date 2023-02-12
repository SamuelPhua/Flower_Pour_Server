const Checkout = require("../models/Checkout");

const createOrder = async (req, res) => {
  try {
    const newOrder = new Checkout({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      deliveryMethod: req.body.deliveryMethod,
      address: req.body.address,
      apartment: req.body.apartment,
      postalCode: req.body.postalCode,
      deliveryCountry: req.body.deliveryCountry,
      orderCurrency: req.body.orderCurrency,
      discountCode: req.body.discountCode,
      deliveryCharge: req.body.deliveryCharge,
      checkoutAmount: req.body.checkoutAmount,
      paymentMethod: req.body.paymentMethod,
      paymentAmount: req.body.paymentAmount,
      orderStatus: req.body.orderStatus,
      cart: {
        name: req.body.name,
        weight: req.body.weight,
        packaging: req.body.packaging,
        price: req.body.price,
        quantity: req.body.quantity,
        itemTotal: req.body.itemTotal,
      },
    });

    await newOrder.save();
    return res
      .status(200)
      .json({ status: "OK", message: "Checkout order sent." });
  } catch (err) {
    return res.status(400).json({ status: "Error", message: err.message });
  }
};

// const getOrders - for auth users (flourpour admin)

module.exports = { createOrder };
