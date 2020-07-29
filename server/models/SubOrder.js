const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const subOrderSchema = new Schema({
  subOrderId: String,
  subTotal: Number,
  status: {
    type: String,
    enum: ["placed", "inPreparation", "outForDelivery"],
    default: "placed",
  },
  itemName: String,
  qty: Number,
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const SubOrder = mongoose.model("SubOrder", subOrderSchema);

module.exports = SubOrder;
