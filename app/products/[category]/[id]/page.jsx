'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || !category) return;

    // fetch محصولات همان دسته و پیدا کردن محصول با id
    fetch(`http://localhost:5000/api/products?category=${category}`)
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p._id === id);
        setProduct(found || null);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching product:', err);
        setLoading(false);
      });
  }, [category, id]);

  if (loading) return <p style={{ padding: 20 }}>در حال بارگذاری...</p>;
  if (!product) return <p style={{ padding: 20 }}>محصول یافت نشد</p>;

  return (
    <div style={{ padding: '2rem', marginTop: '100px', fontFamily: 'Vazir' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{product.name}</h1>
      {product.mainImage && (
        <img
          src={`http://localhost:5000${product.mainImage}`}
          alt={product.name}
          style={{ width: '100%', maxWidth: '400px', borderRadius: 8, marginBottom: '1rem' }}
        />
      )}
      <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
        قیمت: {product.price.toLocaleString()} تومان
      </p>
      {product.description && <p>{product.description}</p>}
    </div>
  );
}
