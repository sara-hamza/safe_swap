// client/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "safeswap.firebaseapp.com",
  projectId: "safeswap",
  storageBucket: "safeswap.appspot.com",
  messagingSenderId: "123456",
  appId: "1:123456:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
