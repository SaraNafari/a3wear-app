'use client';
import Link from 'next/link';
import React from 'react';

export default function ProductCard({ product }) {
  if (!product) return null;

  // اطمینان از اینکه category انگلیسی باشد و URL درست ساخته شود
  const categoryMap = {
    لگ: 'leggings',
    کراپ: 'crop',
    سوتین: 'soutien',
    شرت: 'shorts',
  };
  const productCategory = categoryMap[product.category] || product.category;

  return (
    <Link
      href={`/products/${encodeURIComponent(productCategory)}/${product._id}`}
      style={{
        border: '1px solid #ddd',
        padding: 16,
        marginBottom: 16,
        width: '200px',
        textDecoration: 'none',
        color: 'black',
        display: 'block',
      }}
    >
      {product.mainImage && (
        <img
          src={`http://localhost:5000${product.mainImage}`}
          alt={product.name}
          style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 8 }}
        />
      )}
      <h3 style={{ marginTop: 8 }}>{product.name}</h3>
      <p>{product.price.toLocaleString()} تومان</p>
    </Link>
  );
}
