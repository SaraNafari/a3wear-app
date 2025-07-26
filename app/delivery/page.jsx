// app/delivery/page.jsx


export default function DeliveryPage() {
  return (
    <main
      style={{
        padding: '2rem 1rem',
        fontFamily: 'Vazir, sans-serif',
        direction: 'rtl',
        maxWidth: '900px',
        margin: '0 auto',
        lineHeight: '2',
        color: '#111',
        backgroundColor: '#fff',
      }}
    >
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '2px solid #000', paddingBottom: '0.5rem' }}>
        روش‌های ارسال و هزینه‌ها
      </h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={headingStyle}>ارسال شهرستان</h2>
        <p style={textStyle}>
          ارسال سفارشات شهرستان به دو روش <strong>پست پیشتاز</strong> و <strong>تیپاکس</strong> انجام می‌شود.
          انتخاب این روش‌ها به معنی پذیرش شرایط شرکت مربوطه است و مسئولیت تأخیر یا مشکل به عهده آن‌هاست.
          لطفاً هنگام تحویل، سلامت بسته را بررسی و سپس رسید را امضا کنید.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={headingStyle}>ارسال تهران</h2>
        <p style={textStyle}>
          ارسال توسط پیک در دو بازه‌ٔ زمانی <strong>(۱۵ الی ۲۱)</strong> و <strong>(۱۰ صبح الی ۱۶)</strong> انجام می‌شود.
          قبل از ارسال از طریق پیامک یا تماس اطلاع‌رسانی خواهد شد.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={headingStyle}>مدت زمان تحویل</h2>
        <ul style={listStyle}>
          <li>آماده‌ارسال: ۱ تا ۳ روز کاری تا تحویل به پست یا تیپاکس یا پیک</li>
          <li>تیپاکس: ۲۴ تا ۷۲ ساعت بعد از تحویل</li>
          <li>پست پیشتاز: ۲ تا ۶ روز کاری بسته به شهر</li>
          <li>پیک تهران: ۱ تا ۲ روز کاری بعد از ثبت سفارش</li>
        </ul>
      </section>

      <section>
        <h2 style={headingStyle}>هزینه ارسال</h2>
        <ul style={listStyle}>
          <li><strong>تیپاکس:</strong> پس‌کرایه، هزینه هنگام تحویل پرداخت می‌شود، بسته به مسافت</li>
          <li><strong>پست پیشتاز:</strong> طبق تعرفه پست</li>
          <li><strong>پیک:</strong> براساس تعرفه اسنپ از شهرک اکباتان محاسبه و پرداخت در محل</li>
        </ul>
      </section>
    </main>
  );
}

const headingStyle = {
  fontSize: '1.3rem',
  fontWeight: 'bold',
  marginBottom: '0.8rem',
  borderRight: '4px solid #000',
  paddingRight: '0.5rem',
};

const textStyle = {
  fontSize: '1rem',
  color: '#222',
  lineHeight: '2',
};

const listStyle = {
  paddingRight: '1.2rem',
  fontSize: '1rem',
  color: '#222',
  listStyleType: 'disc',
};
