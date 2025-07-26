'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import CartDrawer from './CartDrawer';
import './Header.css';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // نگاشت برای تعیین active بودن مسیر
  const slugMap = {
    leggings: 'لگ',
    crop: 'کراپ',
    soutien: 'سوتین',
    shorts: 'شرت',
  };

  const isActive = (slug) => pathname.includes(`/products/${slug}`);

  return (
    <header className="header">
      <div className="container">
        {/* دکمه همبرگر فقط موبایل */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} className="icon" />
        </button>

        {/* لوگو وسط موبایل و چپ دسکتاپ */}
        <div className="logo">
          <Link href="/">
            <img src="/images/logo.png" alt="A3Wear Logo" />
          </Link>
        </div>

        {/* آیکون‌ها */}
        <div className="icons">
          <Link href="/auth" title="ورود / عضویت">
            <FontAwesomeIcon icon={faUser} className="icon" />
          </Link>
          <button onClick={() => setCartOpen(true)} title="سبد خرید" className="icon-button">
            <FontAwesomeIcon icon={faCartShopping} className="icon" />
          </button>
        </div>

        {/* منوی دسکتاپ */}
        <nav className="desktop-menu">
          <Link href="/products/leggings" className={isActive('leggings') ? 'active' : ''}>لگ</Link>
          <Link href="/products/crop" className={isActive('crop') ? 'active' : ''}>کراپ</Link>
          <div className="submenu-wrapper">
            <span className="submenu-title">لباس زیر</span>
            <div className="submenu">
              <Link href="/products/soutien" className={isActive('soutien') ? 'active' : ''}>سوتین</Link>
              <Link href="/products/shorts" className={isActive('shorts') ? 'active' : ''}>شرت</Link>
            </div>
          </div>
        </nav>
      </div>

      {/* منوی موبایل */}
      {menuOpen && (
        <nav className="mobile-menu">
          <Link href="/products/leggings">لگ</Link>
          <Link href="/products/crop">کراپ</Link>
          <button className="submenu-toggle" onClick={() => setSubMenuOpen(!subMenuOpen)}>
            لباس زیر
          </button>
          {subMenuOpen && (
            <div className="submenu-mobile">
              <Link href="/products/soutien">سوتین</Link>
              <Link href="/products/shorts">شرت</Link>
            </div>
          )}
        </nav>
      )}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}
