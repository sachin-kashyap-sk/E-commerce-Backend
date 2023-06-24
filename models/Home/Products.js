const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: { type: String, require: true },
    title: { type: String, require: true },
    gender: { type: String, require: true },
    price: { type: Number, require: true },
    description: { type: String, require: true },

    desImage: { type: String, require: true },
    brand: { type: String, require: true },
    shortDes: { type: String, require: true },
    offer: { type: String, require: true },

    bankOffer: { type: String, require: true },
    bankOfferText: { type: String, require: true },

    noCostEMI: { type: String, require: true },
    emiText: { type: String, require: true },

    partnerOffers: { type: String, require: true },
    partnerOffersText: { type: String, require: true },

    pointFirst: { type: String, require: true },
    pointSec: { type: String, require: true },
    pointThree: { type: String, require: true },
    pointFour: { type: String, require: true },
    pointFive: { type: String, require: true },
    pointSix: { type: String, require: true },

    DateFirstAvailable: { type: String, require: true },
    Manufacturer: { type: String, require: true },
    ItemModelNumber: { type: String, require: true },
    CountryOfOrigin: { type: String, require: true },
    Department: { type: String, require: true },
    ItemWeight: { type: String, require: true },
    GenericName: { type: String, require: true },
  },
  { timestamps: true } // for created at and updated at
);

module.exports = mongoose.model("Product", ProductSchema);
