const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
const EnquiryForm = require("../models/EnquiryForm");

router.put("/createEnquiry", async (req, res) => {
  try {
    console.log("createEnquiry", req.body);
    const newEnquiry = new EnquiryForm({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });

    await newEnquiry.save();
    return res.status(200).json({ status: "OK", message: "Enquiry sent." });
  } catch (err) {
    return res.status(400).json({ status: "Error", message: err.message });
  }
});

module.exports = router;
