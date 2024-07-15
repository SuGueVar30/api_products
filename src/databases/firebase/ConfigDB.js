/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHLitwvLvhxBJkfrjT4j54BtZDfNqErO8",
  authDomain: "siscaapi.firebaseapp.com",
  projectId: "siscaapi",
  storageBucket: "siscaapi.appspot.com",
  messagingSenderId: "293536836808",
  appId: "1:293536836808:web:1d517b2613d5b9aa8409fd",
};

const app = initializeApp(firebaseConfig);
const DBConnection = getFirestore(app);

export default DBConnection;
