require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
<<<<<<< Updated upstream
=======
const Products = require("./models/Products");
const { products: productSeed } = require("./data/seed");
const enquiryFormRouter = require("./router/enquiryForm");
>>>>>>> Stashed changes
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/enquiryForm", enquiryFormRouter);

connectDB(process.env.MONGODB_URI);

<<<<<<< Updated upstream
const PORT = process.env.PORT || 5001;
=======
// Initial setup - seed cookies
app.put("/seedCookies", async (req, res) => {
  try {
    await Products.deleteMany();
    await Products.create(productSeed);
    return res.json({ status: "OK", message: "Seeds planted successfully!" });
  } catch (err) {
    return res.status(400).json({ status: "Error", message: err.message });
  }
});
>>>>>>> Stashed changes

app.listen(PORT, () => {
  console.log(`Server is listeing on ${PORT}`);
});
