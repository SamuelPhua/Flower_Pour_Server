const mongoose = require("mongoose");

const EnquiryFormSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EnquiryForm", EnquiryFormSchema);
