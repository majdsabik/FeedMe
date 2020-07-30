
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const menuItemSchema = new Schema({
  itemNo: { type: String, unique: true },
  name: String,
  description: String,
  price: Number,
  category: Array,
  prepTime: Number,
  restaurantPrefix: String,
  imgName: String,
  imgPath: String,
  restaurantID: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;