import React from 'react';
import PropTypes from 'prop-types';
import './DefaultLayout.css';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



const DefaultLayout = ({ children }) => {

//   const firebaseConfig = {

//     apiKey: "AIzaSyBEBT7RZsVzBB40-lZ4hqDzLFZ-bjQ4tS4",

//     authDomain: "weather-app-e6de8.firebaseapp.com",

//     projectId: "weather-app-e6de8",

//     storageBucket: "weather-app-e6de8.appspot.com",

//     messagingSenderId: "652282492022",

//     appId: "1:652282492022:web:277d20a1bc7b8e7d4e1b57",

//     measurementId: "G-SCG5S5XJ7P"

//   };

// // 
  // Initialize Firebase

  // const app = initializeApp(firebaseConfig);

  // // const analytics = getAnalytics(app);

  // const auth = getAuth(app)



  return (
    <div className="DefaultLayout w-full md:max-w-[500px] px-6 py-8 flex items-center justify-center" data-testid="DefaultLayout">
      {children}
    </div>
  );
}
DefaultLayout.propTypes = {};

DefaultLayout.defaultProps = {};

export default DefaultLayout;
