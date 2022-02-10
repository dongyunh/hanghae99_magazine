import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkLpvVJSSV3NkYgXBoIec2UEgGp44ECGo",
  authDomain: "image-community-d4a63.firebaseapp.com",
  projectId: "image-community-d4a63",
  storageBucket: "image-community-d4a63.appspot.com",
  messagingSenderId: "440720983348",
  appId: "1:440720983348:web:3376d88dfde7f226b25161",
  measurementId: "G-HHQTCWK137",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//다른 파일에서 firebase 가져오기 위한 설정
const auth = firebase.auth();

export { auth };
