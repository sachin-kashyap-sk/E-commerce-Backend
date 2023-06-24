const LimitedOffer = require("../../models/Home/LimitedTimeOffer");
const AddLimitedTimeOffer = async (req, res) => {
  try {
    const savedOffer = await LimitedOffer.create(req.body);
    return res.status(200).json(savedOffer);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedLimitedTimeOffer = async (req, res) => {
  try {
    const updatedLimitedTimeOffer = await LimitedOffer.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedLimitedTimeOffer);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteLimitedTimeOffer = async (req, res) => {
  try {
    await LimitedOffer.findByIdAndDelete(req.params.id);
    return res.status(200).json("Offer Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetOffer = async (req, res) => {
  try {
    const offer = await LimitedOffer.findById(req.params.id);
    return res.status(200).json(offer);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllOffer = async (req, res) => {
  const query = req.query.new;
  try {
    const offerGet = query
      ? await LimitedOffer.find().sort({ _id: -1 }).limit(5)
      : await LimitedOffer.find();
    return res.status(200).json(offerGet);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddLimitedTimeOffer,
  UpdatedLimitedTimeOffer,
  DeleteLimitedTimeOffer,
  GetOffer,
  GetAllOffer,
};
