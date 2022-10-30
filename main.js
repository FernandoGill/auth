import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "./src/app/firebase.js";
import  { loginCheck } from './src/app/loginCheck.js';

import './src/app/signupForm.js'
import './src/app/signinForm.js'
import './src/app/googleLogin.js'
import './src/app/logout.js';


onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
    // if (user) {
    //     loginCheck(user)
    // } else {
    //     loginCheck(user)
    // }

})