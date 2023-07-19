// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjm03LnsH39vtoCmPxyKeSInb3lZjhgY0",
  authDomain: "connector-mentor.firebaseapp.com",
  databaseURL: "https://connector-mentor-default-rtdb.firebaseio.com",
  projectId: "connector-mentor",
  storageBucket: "connector-mentor.appspot.com",
  messagingSenderId: "734513272138",
  appId: "1:734513272138:web:8518f99aa4f44546fdddb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)