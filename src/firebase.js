import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCi-QqtcOtFy104Aep497ONPP2iq4vbK_s",
  authDomain: "clone-d140e.firebaseapp.com",
  databaseURL: "https://clone-d140e.firebaseio.com",
  projectId: "clone-d140e",
  storageBucket: "clone-d140e.appspot.com",
  messagingSenderId: "396907971401",
  appId: "1:396907971401:web:cd71d1a4007ffe61995098",
  measurementId: "G-Z5KYZ1LDN9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
