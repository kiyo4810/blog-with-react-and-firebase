import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAbdRgQQY6RVqolTIrXA4YS9UJYAaVfbpY',
  authDomain: 'blog-8a981.firebaseapp.com',
  projectId: 'blog-8a981',
  storageBucket: 'blog-8a981.firebasestorage.app',
  messagingSenderId: '504119911222',
  appId: '1:504119911222:web:ee6bb9987c0182dc3f0997',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
