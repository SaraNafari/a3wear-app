import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import productRoutes from './routes/Products.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// مسیر جاری
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// اتصال به MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ اتصال به MongoDB برقرار شد'))
.catch((err) => {
  console.error('❌ خطا در اتصال به MongoDB:', err);
  process.exit(1);
});

// میدلورها
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// مسیر فایل‌های استاتیک عکس‌ها
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// روت محصولات
app.use('/api/products', productRoutes);

// روت تست
app.get('/', (req, res) => {
  res.send('سرور Node.js با موفقیت اجرا شد 🎉');
});

app.listen(PORT, () => {
  console.log(`🚀 سرور روی پورت ${PORT} اجرا شد`);
});
