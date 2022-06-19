import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCd8Yc7tqAC6GZ5xyZ9l39-nPnwQx7gEEU",
  authDomain: "react-auth-fg.firebaseapp.com",
  projectId: "react-auth-fg",
  storageBucket: "react-auth-fg.appspot.com",
  messagingSenderId: "438519884010",
  appId: "1:438519884010:web:59a769e64dc01856dd0f93",
  measurementId: "G-X7KNGG5GSV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
