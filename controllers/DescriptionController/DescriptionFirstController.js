// const mongoose = require("mongoose");
// const DescriptionFirst = require("../../models/Description/DescriptionFirst");

// const AddDescriptionFirst = async (req, res) => {
//   try {
//     const saved = await DescriptionFirst.create(req.body);
//     return res.status(200).json(saved);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// const UpdatedDescriptionFirst = async (req, res) => {
//   try {
//     const UpdatedDescriptionFirst = await DescriptionFirst.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     return res.status(200).json(UpdatedDescriptionFirst);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// const DeleteDescriptionFirst = async (req, res) => {
//   try {
//     await DescriptionFirst.findByIdAndDelete(req.params.id);
//     return res.status(200).json("Description Has Been Deleted...");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// const GetDescription = async (req, res) => {
//   try {
//     const contact = await DescriptionFirst.findById(
//       new mongoose.Types.ObjectId(req.params.id)
//     );
//     console.log(contact);
//     return res.status(200).json(contact);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// };

// const GetAllDescriptionFirst = async (req, res) => {
//   const query = req.query.new;
//   try {
//     const descriptionFirst = query
//       ? await DescriptionFirst.find().sort({ _id: -1 }).limit(5)
//       : await DescriptionFirst.find();
//     return res.status(200).json(descriptionFirst);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// module.exports = {
//   AddDescriptionFirst,
//   UpdatedDescriptionFirst,
//   GetDescription,
//   GetAllDescriptionFirst,
//   DeleteDescriptionFirst,
// };
