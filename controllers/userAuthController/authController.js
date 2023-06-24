const User = require("../../models/AuthUser/User");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "123456789";

//register new User
const registerUser = async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json("Wrong Credentials email !");

    const originalPassword = user.password;

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong Credentials password !");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      SECRET_KEY,

      { expiresIn: "3d" }
    );

    const { password, ...other } = user._doc;
    return res.status(200).json({ ...other, accessToken });
  } catch (err) {
    return res.status(500).json({ msg: "Something Went Wrong" });
  }
};

module.exports = { registerUser, loginUser };
