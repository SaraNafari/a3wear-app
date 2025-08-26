import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  mainImage: { type: String },     // عکس اصلی
  images: [String],                // عکس‌های دیگر
  colors: [String],
  sizes: [String],
  description: { type: String },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
