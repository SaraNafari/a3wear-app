import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import Product from '../models/Product.js';
import fs from 'fs';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsPath = path.join(__dirname, '../uploads');

if (!fs.existsSync(uploadsPath)) fs.mkdirSync(uploadsPath);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsPath),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

const categoryMap = {
  leggings: 'لگ',
  crop: 'کراپ',
  soutien: 'سوتین',
  shorts: 'شرت',
};

// افزودن محصول با چند عکس
router.post(
  '/',
  upload.fields([
    { name: 'mainImage', maxCount: 1 },
    { name: 'images', maxCount: 5 },
  ]),
  async (req, res) => {
    try {
      const { name, price, category, colors, sizes, description } = req.body;

      const mainImage = req.files?.mainImage?.[0]?.filename
        ? `/uploads/${req.files.mainImage[0].filename}`
        : '';

      const images = req.files?.images?.map((file) => `/uploads/${file.filename}`) || [];

      if (!name || !price || !category) {
        return res.status(400).json({ error: 'فیلدهای name, price و category الزامی هستند.' });
      }

      const newProduct = new Product({
        name,
        price,
        category,
        mainImage,
        images,
        colors: colors ? colors.split(',').map((c) => c.trim()) : [],
        sizes: sizes ? sizes.split(',').map((s) => s.trim()) : [],
        description,
      });

      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (err) {
      console.error('❌ خطا در ثبت محصول:', err);
      res.status(500).json({ error: 'خطا در ثبت محصول' });
    }
  }
);

// دریافت محصولات
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category: categoryMap[category] } : {};
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'خطا در دریافت محصولات' });
  }
});

export default router;
