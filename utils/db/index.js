import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://realtimepractice.firebaseio.com",
    });
  } catch (error) {
    console.log("Admin Initilization Errro", error.stack);
  }
}

export default admin.firestore();

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";

// const firebaseConfig = {
//   apiKey: "AIzaSyBMHqb4g7Hvs24PkvIPgflq9R3VkmslfKQ",
//   authDomain: "realtime-practise.firebaseapp.com",
//   projectId: "realtime-practise",
//   storageBucket: "realtime-practise.appspot.com",
//   messagingSenderId: "417300418285",
//   appId: "1:417300418285:web:8c10a042ac4332eab686e4",
//   measurementId: "G-1F4G3N4WFK",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default db;
