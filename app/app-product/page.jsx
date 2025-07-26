'use client';
import React, { useState } from 'react';
import axios from 'axios';

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image', image);

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
        <input
          type="text"
          placeholder="نام محصول"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />

        <input
          type="text"
          placeholder="قیمت"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        /><br /><br />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">انتخاب دسته‌بندی</option>
          <option value="لگ">لگ</option>
          <option value="کراپ">کراپ</option>
          <option value="سوتین">سوتین</option>
          <option value="شرت">شرت</option>
        </select><br /><br />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        /><br /><br />

        <button type="submit">ثبت محصول</button>
      </form>
    </div>
  );
}
