
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTc70WnXJ3EXMI7WcBIzkI5pnk0S54Nvc",
  authDomain: "hotel-clone-react.firebaseapp.com",
  projectId: "hotel-clone-react",
  storageBucket: "hotel-clone-react.appspot.com",
  messagingSenderId: "885573208094",
  appId: "1:885573208094:web:10db34652c52c4a66e060f"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore()