import express from 'express';
import CartItem from '../models/CartItem.js';

const router = express.Router();

// گرفتن سبد خرید با اطلاعات کامل محصول
router.get('/', async (req, res) => {
  try {
    const cart = await CartItem.find().populate('productId');
    const formattedCart = cart.map(item => ({
      _id: item._id,
      quantity: item.quantity,
      name: item.productId.name,
      price: item.productId.price,
      image: item.productId.image
    }));
    res.json(formattedCart);
  } catch (err) {
    res.status(500).json({ error: 'خطا در گرفتن سبد خرید' });
  }
});

// افزودن محصول به سبد خرید
router.post('/', async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let existingItem = await CartItem.findOne({ productId });
    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.json(existingItem);
    }
    const newItem = await CartItem.create({ productId, quantity });
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ error: 'خطا در افزودن محصول به سبد خرید' });
  }
});

// حذف محصول از سبد خرید
router.delete('/:id', async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'حذف شد' });
  } catch (err) {
    res.status(500).json({ error: 'خطا در حذف محصول' });
  }
});

// بروزرسانی تعداد محصول (PATCH)
router.patch('/:id', async (req, res) => {
  const { quantity } = req.body;
  if (quantity < 1) {
    return res.status(400).json({ error: 'تعداد باید بزرگ‌تر یا مساوی ۱ باشد' });
  }
  try {
    const updatedItem = await CartItem.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ error: 'آیتم یافت نشد' });
    }
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: 'خطا در بروزرسانی تعداد' });
  }
});

export default router;
