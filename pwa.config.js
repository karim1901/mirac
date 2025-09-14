// pwa.config.js
import withPWA from 'next-pwa';

export default withPWA({
  dest: 'public',             // مكان إنشاء ملفات service worker
  register: true,             // تسجيل تلقائي للـ SW
  skipWaiting: true,          // تحديث تلقائي عند وجود نسخة جديدة
  disable: process.env.NODE_ENV === 'development', // تعطيل PWA في التطوير
});
