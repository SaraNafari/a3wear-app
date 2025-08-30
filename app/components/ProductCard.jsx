'use client';
import Link from 'next/link';
import React from 'react';

export default function ProductCard({ product }) {
  if (!product) return null;

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
        width: '100%',
        maxWidth: 250,
        textDecoration: 'none',
        color: 'black',
        display: 'block',
        borderRadius: 8,
      }}
    >
      {/* عکس اصلی */}
      {product.mainImage && (
        <img
          src={`http://localhost:5000${product.mainImage}`}
          alt={product.name}
          style={{
            width: '100%',
            height: 200,
            objectFit: 'cover',
            borderRadius: 8,
          }}
        />
      )}

      {/* نمایش عکس‌های دیگر به صورت افقی و ریسپانسیو */}
      {product.images && product.images.length > 0 && (
        <div
          style={{
            display: 'flex',
            gap: 6,
            marginTop: 8,
            overflowX: 'auto',
          }}
        >
          {product.images.map((img, i) => (
            <img
              key={i}
              src={`http://localhost:5000${img}`}
              alt={`${product.name} ${i + 1}`}
              style={{
                width: 60,
                height: 60,
                objectFit: 'cover',
                borderRadius: 6,
                flex: '0 0 auto',
              }}
            />
          ))}
        </div>
      )}

      <h3 style={{ marginTop: 10, fontSize: 16 }}>{product.name}</h3>
      <p style={{ fontWeight: 500, marginTop: 4 }}>{product.price.toLocaleString()} تومان</p>
    </Link>
  );
}
