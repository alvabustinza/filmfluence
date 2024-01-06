import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIWKhkNV4t_3R6hz5RetgJcS4BqxPg_GE",
  authDomain: "filmfluence-60906.firebaseapp.com",
  projectId: "filmfluence-60906",
  storageBucket: "filmfluence-60906.appspot.com",
  messagingSenderId: "340398050160",
  appId: "1:340398050160:web:c4dd38b55e98fd2c949db5",
  measurementId: "G-9TL7P3XGPS",
};

const firebaseApp = initializeApp(firebaseConfig);
// Obtener instancias de los servicios que necesitas
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const database = getDatabase(firebaseApp); // Instancia de Realtime Database

export { firestore, auth, database };
