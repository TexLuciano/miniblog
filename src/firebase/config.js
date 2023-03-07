import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDUUIZG1AD-xg3Ju41x3QelNNQjRyf55Rw',
  authDomain: 'miniblog-6134f.firebaseapp.com',
  projectId: 'miniblog-6134f',
  storageBucket: 'miniblog-6134f.appspot.com',
  messagingSenderId: '867677938403',
  appId: '1:867677938403:web:b6b14488fb9a3ad4209bd6',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
