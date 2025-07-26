'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category) return;
    fetch(`http://localhost:5000/api/products?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <p style={{ padding: 20 }}>در حال بارگذاری...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
        محصولات دسته {decodeURIComponent(category)}
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {products.length === 0 ? (
          <p>محصولی یافت نشد</p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '12px',
                width: '220px',
                padding: '1rem',
                fontFamily: 'Vazir',
              }}
            >
              <img
                src={`http://localhost:5000/uploads/${product.image}`}
                alt={product.name}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <h3 style={{ marginTop: '1rem' }}>{product.name}</h3>
              <p>{product.price.toLocaleString()} تومان</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
