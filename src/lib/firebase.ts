// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDDeDgK016Tvt1MlENsMvlZK0upq-cFrm0",
	authDomain: "fir-course-11f63.firebaseapp.com",
	projectId: "fir-course-11f63",
	storageBucket: "fir-course-11f63.appspot.com",
	messagingSenderId: "1040917336885",
	appId: "1:1040917336885:web:efacb623035f7be66ef27c",
	measurementId: "G-YW3Z4S3WRM"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)