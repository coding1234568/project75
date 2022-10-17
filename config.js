import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAvzEfDllpVu1UFyGV4SZntmvh7u0Wsv-A",
  authDomain: "project75-1b348.firebaseapp.com",
  databaseURL: "https://project75-1b348-default-rtdb.firebaseio.com",
  projectId: "project75-1b348",
  storageBucket: "project75-1b348.appspot.com",
  messagingSenderId: "380541209003",
  appId: "1:380541209003:web:9a409b95e68c701208eaee"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
