

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '2rem 1rem',
        borderTop: '1px solid #ddd',
        fontFamily: 'Vazir, sans-serif',
        background: '#f9f9f9',
      }}
    >
      <div style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
        <Link href="./delivery" style={{ color: '#000', textDecoration: 'underline' }}>
          روش‌های ارسال و هزینه‌ها
        </Link>
      </div>

      <p style={{ marginBottom: '0.5rem' }}> فروشگاه A3Wear - همه حقوق محفوظ است.</p>

      <div
        style={{
          marginTop: '0.5rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
        }}
      >
        <a
          href="https://instagram.com/a3wear"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{ color: '#0a0a0b', fontSize: '1.5rem' }}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://wa.me/989910107423"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          style={{ color: '#0c0d0d', fontSize: '1.5rem' }}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        <a
          href="tel:+989910107423"
          aria-label="Call"
          style={{ color: '#000000', fontSize: '1.5rem' }}
        >
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
    </footer>
  );
}
