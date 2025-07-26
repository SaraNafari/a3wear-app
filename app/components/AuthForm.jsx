'use client';

import { useState } from 'react';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ fontFamily: 'Vazir, sans-serif', maxWidth: 400, margin: 'auto', padding: 16 }}>
      <form>
        <h1 style={{ textAlign: 'center', marginBottom: 24 }}>
          {isLogin ? 'ورود به حساب' : 'ثبت‌نام'}
        </h1>

        <label>
          {isLogin ? 'نام کاربری یا ایمیل *الزامی' : 'آدرس ایمیل *الزامی'}
          <input type="text" required style={inputStyle} />
        </label>

        <label>
          گذرواژه *الزامی
          <input type="password" required style={inputStyle} />
        </label>

        {isLogin && (
          <div style={{ marginBottom: 16 }}>
            <label>
              <input type="checkbox" /> مرا به خاطر بسپار
            </label>
          </div>
        )}

        <button type="submit" style={buttonStyle}>
          {isLogin ? 'ورود' : 'ثبت‌نام'}
        </button>

        {isLogin && (
          <div style={{ textAlign: 'right', marginTop: 8 }}>
            <a href="#" style={linkStyle}>گذرواژه خود را فراموش کرده‌اید؟</a>
          </div>
        )}
      </form>

      <div style={{ marginTop: 24, textAlign: 'center' }}>
        <button
          onClick={() => setIsLogin(!isLogin)}
          style={toggleBtnStyle}
        >
          {isLogin ? 'حساب نداری؟ ثبت‌نام کن' : 'قبلا ثبت‌نام کردی؟ وارد شو'}
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: 8,
  marginTop: 4,
  marginBottom: 16,
  boxSizing: 'border-box',
};

const buttonStyle = {
  width: '100%',
  padding: 12,
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

const linkStyle = {
  color: '#0070f3',
  textDecoration: 'none',
  fontSize: 14,
};

const toggleBtnStyle = {
  background: 'none',
  border: 'none',
  color: '#0070f3',
  cursor: 'pointer',
  textDecoration: 'underline',
  fontSize: 14,
};
