import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

const apiKey = process.env.API_KEY;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey,
  authDomain: "react-2022-05.firebaseapp.com",
  projectId: "react-2022-05",
  storageBucket: "react-2022-05.appspot.com",
  messagingSenderId: "598556501810",
  appId: "1:598556501810:web:3830854e3b26208c9cd92b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Work with Storage
export const storage = getStorage(app);

// Work with Firestore
const db = getFirestore();
const ingCollectionRef = collection(db, "images");

// get images collection
export const getImages = getDocs(ingCollectionRef);

// subscribe to images collection
export const imgSubscribe = (cb: any) =>
  onSnapshot(
    query(ingCollectionRef, orderBy("createdAt", "desc")),
    (snapshot) => {
      cb(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    },
  );

// add record to images collection
export const addImageRecord = (imgLink: string, createdAt: string, cb: any) =>
  addDoc(ingCollectionRef, { link: imgLink, createdAt }).then(() => {
    cb();
  });

export const timestamp = serverTimestamp;

export default app;
