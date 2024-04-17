
import { initializeApp} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAB7Djt6wksvDamWrF3z_HgOQbks5D1-yc",
    authDomain: "statistical-coding-3.firebaseapp.com",
    projectId: "statistical-coding-3",
    storageBucket: "statistical-coding-3.appspot.com",
    messagingSenderId: "134237205219",
    appId: "1:134237205219:web:e4912c40cb7703bcc1cbd6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
var provider = new GoogleAuthProvider();

let signInBtn = document.getElementById("signIn")

signInBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credentials = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log("User: " + user)
            window.location.href="./pages/home.html"
        })
        .catch((error) => {
            const errorCode = error.code 
            const errorMessage = error.message

            console.log(errorCode)
            console.log(errorMessage);
        });
});


