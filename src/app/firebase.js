        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      

        import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"


        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyCaffCsSyo9N-nM3TgRhJWoqWSeeClyIiw",
          authDomain: "auth-1cfae.firebaseapp.com",
          projectId: "auth-1cfae",
          storageBucket: "auth-1cfae.appspot.com",
          messagingSenderId: "1061413605375",
          appId: "1:1061413605375:web:473c6c6ce03effad5921ca",
          measurementId: "G-WF4G0WVS2P"
        };
      
        // Initialize Firebase
        export const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        export const auth = getAuth(app);
        