import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDssYVv1pCCIKFDUqbE6bhSWGcTHVzUgY",
  authDomain: "gecskp-a5b1f.firebaseapp.com",
  projectId: "gecskp-a5b1f",
  storageBucket: "gecskp-a5b1f.appspot.com",
  messagingSenderId: "436202162710",
  appId: "1:436202162710:web:93e72c150da50b20190337",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
