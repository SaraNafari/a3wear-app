'use client';

import React, { useState } from 'react';
import axios from 'axios';

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState([]);
  const [colors, setColors] = useState('');
  const [sizes, setSizes] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('mainImage', mainImage);
    formData.append('colors', JSON.stringify(colors.split(',')));
    formData.append('sizes', JSON.stringify(sizes.split(',')));
    formData.append('description', description);

    // 🔹 اصلاح ارسال چند عکس
    images.forEach((file) => {
      formData.append('images', file);
    });

    try {
      await axios.post('http://localhost:5000/api/products', formData);
      alert('محصول با موفقیت اضافه شد');
    } catch (error) {
      alert('خطا در ثبت محصول');
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: 'Vazir' }}>
      <h2>افزودن محصول</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" placeholder="نام محصول" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />
        <input type="text" placeholder="قیمت" value={price} onChange={(e) => setPrice(e.target.value)} required /><br /><br />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">انتخاب دسته‌بندی</option>
          <option value="لگ">لگ</option>
          <option value="کراپ">کراپ</option>
          <option value="سوتین">سوتین</option>
          <option value="شرت">شرت</option>
        </select><br /><br />

        <input type="file" onChange={(e) => setMainImage(e.target.files[0])} required /><br /><br />
        <input type="file" multiple onChange={(e) => setImages(Array.from(e.target.files))} /><br /><br />

        <input type="text" placeholder="رنگ‌ها (با , جدا کن)" value={colors} onChange={(e) => setColors(e.target.value)} /><br /><br />
        <input type="text" placeholder="سایزها (با , جدا کن)" value={sizes} onChange={(e) => setSizes(e.target.value)} /><br /><br />
        <textarea placeholder="توضیحات" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} /><br /><br />

        <button type="submit">ثبت محصول</button>
      </form>
    </div>
  );
}
