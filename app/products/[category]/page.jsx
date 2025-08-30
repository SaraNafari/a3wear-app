  );
}
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // تبدیل دسته فارسی به انگلیسی برای API
  const categoryMap = {
    لگ: 'leggings',
    کراپ: 'crop',
    سوتین: 'soutien',
    شرت: 'shorts',
  };

  const categoryEng = categoryMap[category];

  useEffect(() => {
    if (!categoryEng) return;

    fetch(`http://localhost:5000/api/products?category=${categoryEng}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, [categoryEng]);

  if (loading) return <p style={{ padding: 20 }}>در حال بارگذاری...</p>;

  return (
    <div style={{ padding: '2rem', marginTop: '100px', fontFamily: 'Vazir' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
        محصولات دسته {category}
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {products.length === 0 ? (
          <p>محصولی یافت نشد</p>
        ) : (
          products.map((product) => (
            <Link
              key={product._id}
              href={`/products/${categoryEng}/${product._id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '12px',
                  width: '220px',
                  padding: '1rem',
                  cursor: 'pointer',
                  background: '#fff',
                  transition: 'transform 0.2s',
                }}
              >
                {product.mainImage && (
                  <img
                    src={`http://localhost:5000${product.mainImage}`}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '200px',
                      borderRadius: '8px',
                      objectFit: 'cover',
                    }}
                  />
                )}
                <h3 style={{ marginTop: '1rem' }}>{product.name}</h3>
                <p>{product.price.toLocaleString()} تومان</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
