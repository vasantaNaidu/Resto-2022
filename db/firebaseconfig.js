
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAcmp35Vbj5UDcCkqUZC7yXa2IxAN-xitc",
    authDomain: "resto-7c93c.firebaseapp.com",
    projectId: "resto-7c93c",
    storageBucket: "resto-7c93c.appspot.com",
    messagingSenderId: "666214941230",
    appId: "1:666214941230:web:26786327cbe1e97b7955bf",
    database:"https://resto-7c93c-default-rtdb.asia-southeast1.firebasedatabase.app/"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);