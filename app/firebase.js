// lib/firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAuLJceVD9VusvPmI6H6fpK49F3TRjvITo",
  authDomain: "a3wear-store.firebaseapp.com",
  projectId: "a3wear-store",
  storageBucket: "a3wear-store.appspot.com", // این خط رو اصلاح کردم
  messagingSenderId: "1020477848059",
  appId: "1:1020477848059:web:6d1ed04678deb24b98335e",
  // measurementId اختیاریه و نیاز نداریم
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);        // برای ذخیره محصول
const storage = getStorage(app);     // برای آپلود عکس

export { db, storage };
