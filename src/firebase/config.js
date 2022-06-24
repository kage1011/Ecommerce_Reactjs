import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyB30CVUz13DWb6EIkouEKoHq45jAHnNPoU",
  authDomain: "my-chat-107a2.firebaseapp.com",
  projectId: "my-chat-107a2",
  storageBucket: "my-chat-107a2.appspot.com",
  messagingSenderId: "230594195027",
  appId: "1:230594195027:web:9a55f68122b1bf12c860a6",
  measurementId: "G-YV1P9BQCDL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

// if (window.location.hostname === 'localhost') {
//   // auth.useEmulator('http://localhost:9099');
//   // db.useEmulator('localhost', '8080');
// }

export { db, auth };
export default firebase;