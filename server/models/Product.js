import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String }, // مسیر عکس روی سرور
});

const Product = mongoose.model('Product', productSchema);

export default Product;
