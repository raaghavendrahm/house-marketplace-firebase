import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAI-e8uBRcyrMeoWuyNJaBBKb473ucTlTE',
  authDomain: 'hourse-marketplace-firebase.firebaseapp.com',
  projectId: 'hourse-marketplace-firebase',
  storageBucket: 'hourse-marketplace-firebase.appspot.com',
  messagingSenderId: '311393571604',
  appId: '1:311393571604:web:8615b34fca9ec50c9ba801',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
