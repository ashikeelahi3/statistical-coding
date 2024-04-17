import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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

const user = auth.currentUser;


function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userDP = user.photoURL;

    document.getElementById("username").innerText = userName
    document.getElementById("userEmail").innerText = userEmail
    document.getElementById("uImg").setAttribute("src", userDP)
}

onAuthStateChanged(auth, (user) => {
    if(user) {
        updateUserProfile(user)
        const uid = user.uid;
        return uid;
    } else {
        alert("Create Account & Login")
        window.location.href = "../index.html"
    }
})


let signOutBtn = document.getElementById("signOut")

signOutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.log(error);
      }); 
    console.log("hi");     
});