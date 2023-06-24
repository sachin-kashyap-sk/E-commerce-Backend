const User = require("../../models/AuthUser/User");

const UpdatedUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = req.body.password;
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete
const DeleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json("User Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...other } = user._doc;
    return res.status(200).json({ other });
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAll = async (req, res) => {
  const query = req.query.new;
  try {
    const user = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { UpdatedUser, DeleteUser, GetUser, GetAll };
