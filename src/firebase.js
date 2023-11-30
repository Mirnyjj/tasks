import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAsmCpGtCHKnfariK40WZ94b0NWPmqYPuQ",
  authDomain: "todosproject-d1c8e.firebaseapp.com",
  projectId: "todosproject-d1c8e",
  storageBucket: "todosproject-d1c8e.appspot.com",
  messagingSenderId: "349252221040",
  appId: "1:349252221040:web:37c087bde882b9f16d9cb5",
  databaseURL: 'https://todosproject-d1c8e-default-rtdb.europe-west1.firebasedatabase.app/'
};


const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)