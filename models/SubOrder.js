const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const subOrderSchema = new Schema({
  subOrderId: String,
  subTotal: Number,
  status: {
    type: String,
    enum: ['placed', 'inPreparation', 'outForDelivery', 'Delivered'],
    default: 'placed',
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'MenuItem',
    },
  ],
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
  },
  restaurantPrefix: String,

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const SubOrder = mongoose.model('SubOrder', subOrderSchema);

module.exports = SubOrder;
