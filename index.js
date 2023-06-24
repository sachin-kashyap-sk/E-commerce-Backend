const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/AuthUser/auth");
const productRoute = require("./routes/Home/productsRoute");
const cartRoute = require("./routes/Cart/cartRoute");
const orderRoute = require("./routes/orderRoute");
const homeRoute = require("./routes/Home/homeHeaderRoute");
const brandRoute = require("./routes/Home/homeBrandsRoute");
const shopNowRoute = require("./routes/Home/homeShopNowRoute");
const limitedOfferRoute = require("./routes/Home/homeLimitedOffer");
const footerIconRoute = require("./routes/Footer/footerRoute");
const footerTextRoute = require("./routes/Footer/footerTextRoute");
const menProductRoute = require("./routes/Men/menRoute");
const bestSellerRoute = require("./routes/BestSeller/BestSellerRoute");
const womenRoute = require("./routes/Women/womenRoute");
const aboutRoute = require("./routes/About/AboutHeaderRoute");
const aboutWeAreRoute = require("./routes/About/AboutWeAreRoute");
const aboutFewWord = require("./routes/About/AboutFewWordsRoute");
const aboutTeam = require("./routes/About/AboutTeamRoute");
const contactHeaderRoute = require("./routes/ContactUs/ContactHeaderRoute");
const contactQueriesRoute = require("./routes/ContactUs/ContactQueries");
const contactComplainRoute = require("./routes/ContactUs/ContactComplain");
const contactUserMessageRoute = require("./routes/ContactUs/ContactUserMessageRoute");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api", authRoute);
app.use("/api", productRoute);
app.use("/api", cartRoute);
app.use("/api", orderRoute);
app.use("/api", homeRoute);
app.use("/api", brandRoute);
app.use("/api", shopNowRoute);
app.use("/api", limitedOfferRoute);
app.use("/api", footerIconRoute);
app.use("/api", footerTextRoute);
app.use("/api", menProductRoute);
app.use("/api", bestSellerRoute);
app.use("/api", womenRoute);
app.use("/api", aboutRoute);
app.use("/api", aboutWeAreRoute);
app.use("/api", aboutFewWord);
app.use("/api", aboutTeam);
app.use("/api", contactHeaderRoute);
app.use("/api", contactQueriesRoute);
app.use("/api", contactComplainRoute);
app.use("/api", contactUserMessageRoute);
mongoose
  .connect("mongodb://127.0.0.1:27017/E-Commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Backend server is running at 5000");
});
