import firebase from 'firebase'
const firebaseConfig = {
  apiKey:
  authDomain: "peptalk-9b776.firebaseapp.com",
  projectId: "peptalk-9b776",
  storageBucket: "peptalk-9b776.appspot.com",
  messagingSenderId: "465273734008",
  appId: "1:465273734008:web:f10b070d1402b4ce1e3e8d",
  measurementId: "G-4Y6ZEJZSQV"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
