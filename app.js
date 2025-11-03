
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
 import{getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signOut}from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

  
  const firebaseConfig = {
    apiKey: "AIzaSyCJPKLFhItBQJYtKAAaMxpdzoNmvfZv-dA",
    authDomain: "chat-bot-app-21a0f.firebaseapp.com",
    projectId: "chat-bot-app-21a0f",
    storageBucket: "chat-bot-app-21a0f.firebasestorage.app",
    messagingSenderId: "798617758356",
    appId: "1:798617758356:web:4a7cf60bdc4446a6b3a281",
    measurementId: "G-YS303N1JNL"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
const provider = new GoogleAuthProvider();

if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
  document.getElementById('signup')?.addEventListener('click', ()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
      .then(()=>{
        alert('SignUp Successful!');
        window.location.href = 'user.html';
      })
      .catch((error)=>{
        alert(error.message);
      });
  });

  document.getElementById('login')?.addEventListener('click', ()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
      .then(()=>{
        alert('Login Successful!');
        window.location.href = 'user.html';
      })
      .catch((error)=>{
        alert(error.message);
      });
  });

  document.getElementById('google-btn')?.addEventListener('click', ()=>{
    signInWithPopup(auth, provider)
      .then(()=>{
        alert('Login Successfully');
        window.location.href = 'user.html';
      })
      .catch((error)=>{
        alert(error.message);
      });
  });
} else if (window.location.pathname === "/user.html") {
  document.getElementById('user-btn')?.addEventListener('click', ()=>{
    window.location.href = 'cht.html';
  });
} else if (window.location.pathname === "/cht.html") {
  document.getElementById('logout')?.addEventListener('click', ()=>{
    signOut(auth)
      .then(()=>{
        alert('Logout Successfully');
        window.location.href = 'index.html';
      })
      .catch((error)=>{
        alert(error.message);
      });
  });

}
