import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "safeswap.firebaseapp.com",
  projectId: "safeswap",
  storageBucket: "safeswap.appspot.com",
  messagingSenderId: "xxxxx",
  appId: "xxxxxx"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
