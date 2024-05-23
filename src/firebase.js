// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAPN940WwbTZw7VAlahw6UqwxVQ_sZEgb0",
	authDomain: "church-e1332.firebaseapp.com",
	projectId: "church-e1332",
	storageBucket: "church-e1332.appspot.com",
	messagingSenderId: "958818532874",
	appId: "1:958818532874:web:4518d4d0669bf8313ae9f3",
	measurementId: "G-1EEC9PR57P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
