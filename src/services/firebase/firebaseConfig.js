
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZ_Up_1UJAfHPkZtLnbvPdWXtpyGCe2N4",
  authDomain: "deport-fg.firebaseapp.com",
  projectId: "deport-fg",
  storageBucket: "deport-fg.appspot.com",
  messagingSenderId: "631690576251",
  appId: "1:631690576251:web:b2efe3162f068eb1c07dde"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

