import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB7Cu7k7G0JRRVjxUMV6KF_42DyrmffxJM",
  authDomain: "my-ytube-attempt.firebaseapp.com",
  projectId: "my-ytube-attempt",
  storageBucket: "my-ytube-attempt.appspot.com",
  messagingSenderId: "381314510791",
  appId: "1:381314510791:web:cfef92cc1fccbf74f3b3e2",
};

firebase.initializeApp(firebaseConfig);
export default firebase.auth();
