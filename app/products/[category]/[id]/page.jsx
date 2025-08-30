'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function ProductPage() {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // تبدیل دسته‌بندی انگلیسی به فارسی برای عنوان صفحه (اختیاری)
  const categoryMapReverse = {
    leggings: 'لگ',
    crop: 'کراپ',
    soutien: 'سوتین',
    shorts: 'شرت',
  };
  const categoryFarsi = categoryMapReverse[category] || category;

  useEffect(() => {
    if (!id || !category) return;

    // fetch همه محصولات دسته برای پیدا کردن محصول موردنظر
    fetch(`http://localhost:5000/api/products?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p._id === id);
        setProduct(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
        setLoading(false);
      });
  }, [category, id]);

  if (loading) return <p style={{ padding: 20 }}>در حال بارگذاری...</p>;
  if (!product) return <p style={{ padding: 20 }}>محصول یافت نشد</p>;

  // جمع کردن تصاویر برای گالری
  const images = [];
  if (product.mainImage) {
    images.push({
      original: `http://localhost:5000${product.mainImage}`,
      thumbnail: `http://localhost:5000${product.mainImage}`,
    });
  }
  if (product.images?.length) {
    product.images.forEach((img) => {
      // جلوگیری از اضافه شدن mainImage دوباره
      if (img !== product.mainImage) {
        images.push({
          original: `http://localhost:5000${img}`,
          thumbnail: `http://localhost:5000${img}`,
        });
      }
    });
  }

  return (
    <div style={{ padding: '2rem', marginTop: '100px', fontFamily: 'Vazir' }}>
      <h2 style={{ marginBottom: '1rem' }}>دسته: {categoryFarsi}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {/* گالری تصاویر */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            slideDuration={300}
          />
        </div>

        {/* مشخصات محصول */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
            {product.name}
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            قیمت: {product.price.toLocaleString()} تومان
          </p>
          {product.description && (
            <p style={{ marginBottom: '1rem', lineHeight: 1.8 }}>
              {product.description}
            </p>
          )}
          {product.material && <p>جنس: {product.material}</p>}
          {product.size && <p>سایز: {product.size}</p>}
        </div>
      </div>
    </div>
  );
}
