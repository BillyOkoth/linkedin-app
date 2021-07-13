import firebase from "firebase";

 const firebaseConfig = {
    apiKey: "AIzaSyD1I1RR5xKIhjI2Kh0RmTaSfyqQdtHNrfc",
    authDomain: "linkedin-pro-a413f.firebaseapp.com",
    projectId: "linkedin-pro-a413f",
    storageBucket: "linkedin-pro-a413f.appspot.com",
    messagingSenderId: "420936202005",
    appId: "1:420936202005:web:9b4ff10e2d63440d715b1c",
    measurementId: "G-HWZJ17F6YX"
  };  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;