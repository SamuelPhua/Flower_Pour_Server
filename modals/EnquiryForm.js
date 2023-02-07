const mongoose = require("mongoose");

const EnquiryFormSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String },
  telephone: { type: String, required: true },
  message: { type: String, required: true },
});

const EnquiryForm = mongoose.model("EnquiryForm", EnquiryFormSchema);

module.exports = EnquiryForm;
