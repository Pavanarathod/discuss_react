import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB013zXY7ChDU9TIgr9NcYyHZdVy6O092g",
  authDomain: "discuss-reactjs.firebaseapp.com",
  projectId: "discuss-reactjs",
  storageBucket: "discuss-reactjs.appspot.com",
  messagingSenderId: "370805616264",
  appId: "1:370805616264:web:b3f9ad49794bc314c4793d",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const database = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { database, auth, provider };
