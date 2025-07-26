'use client';
export default function Button({ text }) {
    return (
      <button style={{
        padding: '0.8rem 1.5rem',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        {text}
      </button>
    );
  }
  