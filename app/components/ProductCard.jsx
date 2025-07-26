'use client';

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div style={{ border: '1px solid #ddd', padding: 16, marginBottom: 16, width: '200px' }}>
      <img
        src={`http://localhost:5000${product.image}`}
        alt={product.name}
        style={{ width: '100%', height: 'auto' }}
      />
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()} تومان</p>
    </div>
  );
}
