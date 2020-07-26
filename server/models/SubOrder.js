const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const subOrderSchema = new Schema({
  subOrderId: {
    type: String,
    unique: true,
  },
  subTotal: Number,
  status: {
    type: String,
    enum: ['placed', 'inPreparation', 'outForDelivery'],
    default: 'placed',
  },
  items: [String],
  restaurant: {
    type: mongoose.Schema.ObjectId,
    ref: 'Restaurant',
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const SubOrder = mongoose.model('SubOrder', subOrderSchema);

module.exports = SubOrder;
