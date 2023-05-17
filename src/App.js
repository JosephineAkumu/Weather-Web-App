import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import GetStartedPage from './pages/GetStartedPage/GetStartedPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';
import CityNotFound from './pages/CityNotFound/CityNotFound';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { Auth } from './components/Utils/Auth';

function App() {
  

  // const firebaseConfig = {

  //   apiKey: "AIzaSyBEBT7RZsVzBB40-lZ4hqDzLFZ-bjQ4tS4",

  //   authDomain: "weather-app-e6de8.firebaseapp.com",

  //   projectId: "weather-app-e6de8",

  //   storageBucket: "weather-app-e6de8.appspot.com",

  //   messagingSenderId: "652282492022",

  //   appId: "1:652282492022:web:277d20a1bc7b8e7d4e1b57",

  //   measurementId: "G-SCG5S5XJ7P"

  // };


  // // Initialize Firebase

  // const app = initializeApp(firebaseConfig);

  // // const analytics = getAnalytics(app);

  // const auth = getAuth(app)







  return (
    <BrowserRouter>
    <div className="App w-full flex items-center justify-center dark:bg-secondary min-h-screen" data-testid="parent-layout">
    
        <Routes>
          <Route path="/" element={<GetStartedPage></GetStartedPage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
          <Route path="/homepage" element={<HomePage></HomePage>}></Route>
          <Route path="*" element={<CityNotFound></CityNotFound>}></Route>
        </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
