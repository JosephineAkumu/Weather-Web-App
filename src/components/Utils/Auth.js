import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const Auth =()=>{

  const firebaseConfig = {

    apiKey: "AIzaSyClYuJdJ2uGWflYhTZ-I2LWoZvXHueaAUM",
  
    authDomain: "weather-app-23da5.firebaseapp.com",
  
    projectId: "weather-app-23da5",
  
    storageBucket: "weather-app-23da5.appspot.com",
  
    messagingSenderId: "572370830723",
  
    appId: "1:572370830723:web:6c3391d2ec0c4b23fba2b6",
  
    measurementId: "G-FDEERGKL67"
  
  };
  

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  // const analytics = getAnalytics(app);

  const auth = getAuth(app)

    return Auth

}


export {Auth}