import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // اینجا اسم مدل محصولت رو بذار
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  }
});

export default mongoose.model('CartItem', CartItemSchema);
