'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('خطا در دریافت محصولات:', err);
        setError('خطا در دریافت محصولات');
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: 20, fontFamily: 'Vazir' }}>در حال بارگذاری محصولات...</p>;
  if (error) return <p style={{ padding: 20, fontFamily: 'Vazir', color: 'red' }}>{error}</p>;

  return (
    <main style={{ padding: '2rem', fontFamily: 'Vazir, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
        به فروشگاه A3Wear خوش آمدید
      </h1>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
      }}>
        {products.length === 0 ? (
          <p>محصولی وجود ندارد.</p>
        ) : (
          products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </main>
  );
}
