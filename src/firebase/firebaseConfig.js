// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgUOays-vGrv_viZs1sRQALwtQI6DpVDI",
  authDomain: "doctors-porta-d7630.firebaseapp.com",
  projectId: "doctors-porta-d7630",
  storageBucket: "doctors-porta-d7630.appspot.com",
  messagingSenderId: "134490344987",
  appId: "1:134490344987:web:526029a56632534685b2be",
  measurementId: "G-XZFHSTP3FH"
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app