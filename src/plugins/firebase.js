import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAmMn6envcnmBHQlbMjWiPlSng-MNlBmqs',
  authDomain: 'mlearn-2da8d.firebaseapp.com',
  projectId: 'mlearn-2da8d',
  storageBucket: 'mlearn-2da8d.appspot.com',
  messagingSenderId: '181721136788',
  appId: '1:181721136788:web:4effd866161f5781d73e81',
  measurementId: 'G-NQRN11WYKR',
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
  db,
  auth,
  storage,
};
