import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import Product from '../models/Product.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsPath = path.join(__dirname, '../uploads');

// تنظیمات multer برای آپلود عکس
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// روت افزودن محصول جدید با آپلود عکس
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';

    if (!name || !price || !category) {
      return res.status(400).json({ error: 'فیلدهای name, price و category الزامی هستند.' });
    }

    const newProduct = new Product({ name, price, category, image });
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (err) {
    console.error('❌ خطا در ثبت محصول:', err);
    res.status(500).json({ error: 'خطا در ثبت محصول' });
  }
});

// دریافت همه محصولات یا فیلتر بر اساس دسته (اختیاری)
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'خطا در دریافت محصولات' });
  }
});

export default router;
