// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'realstate-e93e7.firebaseapp.com',
  projectId: 'realstate-e93e7',
  storageBucket: 'realstate-e93e7.appspot.com',
  messagingSenderId: '637732901692',
  appId: '1:637732901692:web:4540ec1125d488a442c439',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
