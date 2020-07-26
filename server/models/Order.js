const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const orderSchema = new Schema({
  orderId: {
    type: String,
    unique: true,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
  totPrice: Number,
  status: {
    type: String,
    enum: ['placed', 'inPreparation', 'outForDelivery'],
    default: 'placed',
  },
  scheduledDelivery: Date,
  items: [String],
  subOrders: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
