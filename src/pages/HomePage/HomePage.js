import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout';
import SearchInput from '../../components/SearchInput/SearchInput';
import DataView from '../../components/DataView/DataView';
import { redirect, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { reactLocalStorage } from 'reactjs-localstorage';
import { Input, Dropdown, initTE } from "tw-elements";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Persist } from 'react-persist';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import { Auth } from '../../components/Utils/Auth';

const HomePage = () => {

  Auth()
  
  initTE({ Input, Dropdown })
  const navigate = useNavigate()

  const storedList = localStorage.getItem('Hist');

  const [myList, setMyList] = useState([]);

  useEffect(() => {
    
    if (storedList) {
      setMyList(JSON.parse(storedList));

    }
  }, []);


  const handleAddItem = (newItem) => {

    const updatedList = [...myList, newItem];
    setMyList(updatedList);
    localStorage.setItem('Hist', JSON.stringify(updatedList));

  };








  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      navigate("/login")
    }
  });




  const key = "a440522b1a52d185a8b38be36a4e5348"

  const [city, setCity] = useState("Nairobi")

  const [data, setData] = useState(null)

  const logout = () => {
    auth.signOut()
      .then(() => {
        navigate("/login")
      })
  }

  useEffect(() => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
      .then(response => {
        if (!response.ok) {
          navigate("/notfound")
          return null
        } else {
          return response.json()
        }
      })
      .then((data) => {


        // setHist(hist.push(city))
        setData(data)
        // console.log("whaaaat")
        // console.log()
        handleAddItem(city)
        console.log("search")
        console.log(myList)
      })

  }, [city])


  const handleSearch = (city) => {
    setCity(city)
  }


  const windIcon = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.59 4.58998C9.82231 4.3563 10.1088 4.18363 10.4239 4.08732C10.739 3.99102 11.073 3.97407 11.3963 4.03797C11.7195 4.10188 12.022 4.24466 12.2768 4.45363C12.5315 4.66259 12.7307 4.93127 12.8566 5.23578C12.9825 5.54028 13.0313 5.87117 12.9985 6.19905C12.9657 6.52692 12.8524 6.84161 12.6687 7.11514C12.4849 7.38868 12.2365 7.61258 11.9454 7.76695C11.6542 7.92132 11.3295 8.00137 11 7.99998H2M12.59 19.41C12.8223 19.6437 13.1088 19.8163 13.4239 19.9126C13.739 20.0089 14.073 20.0259 14.3963 19.962C14.7195 19.8981 15.022 19.7553 15.2768 19.5463C15.5315 19.3374 15.7307 19.0687 15.8566 18.7642C15.9825 18.4597 16.0313 18.1288 15.9985 17.8009C15.9657 17.473 15.8524 17.1584 15.6687 16.8848C15.4849 16.6113 15.2365 16.3874 14.9454 16.233C14.6542 16.0786 14.3295 15.9986 14 16H2M17.73 7.72998C18.0208 7.43987 18.3787 7.2259 18.7719 7.10699C19.1652 6.98809 19.5816 6.96792 19.9845 7.04827C20.3874 7.12861 20.7642 7.307 21.0817 7.56765C21.3993 7.8283 21.6477 8.16318 21.805 8.54267C21.9623 8.92217 22.0236 9.33458 21.9836 9.74343C21.9436 10.1523 21.8035 10.545 21.5756 10.8868C21.3477 11.2286 21.0391 11.509 20.6771 11.7031C20.3151 11.8973 19.9108 11.9992 19.5 12H2" stroke="#2F80ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  )



  const humidityIcon = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9999 2.68994L17.6599 8.34994C18.7792 9.46855 19.5417 10.894 19.8508 12.446C20.1599 13.998 20.0018 15.6068 19.3964 17.0689C18.7911 18.531 17.7657 19.7808 16.45 20.66C15.1343 21.5393 13.5874 22.0086 12.0049 22.0086C10.4224 22.0086 8.87549 21.5393 7.55978 20.66C6.24407 19.7808 5.2187 18.531 4.61335 17.0689C4.008 15.6068 3.84988 13.998 4.15899 12.446C4.46809 10.894 5.23054 9.46855 6.34989 8.34994L11.9999 2.68994Z" stroke="#2F80ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  )



  const tempIcon = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_223_1510)">
      <path d="M14 14.76V3.5C14 2.83696 13.7366 2.20107 13.2678 1.73223C12.7989 1.26339 12.163 1 11.5 1C10.837 1 10.2011 1.26339 9.73223 1.73223C9.26339 2.20107 9 2.83696 9 3.5V14.76C8.19728 15.2963 7.58832 16.0766 7.26307 16.9856C6.93782 17.8946 6.91352 18.8841 7.19376 19.8079C7.47399 20.7317 8.04391 21.541 8.81934 22.1161C9.59476 22.6912 10.5346 23.0017 11.5 23.0017C12.4654 23.0017 13.4052 22.6912 14.1807 22.1161C14.9561 21.541 15.526 20.7317 15.8062 19.8079C16.0865 18.8841 16.0622 17.8946 15.7369 16.9856C15.4117 16.0766 14.8027 15.2963 14 14.76Z" stroke="#2F80ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_223_1510">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>)


  if (data === null) {

    return (
      <div data-testid="HomePage">
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
          >
        </div>
      </div>
    )
  }



  return (
    <div className=' flex  w-full justify-center items-center flex-col px-10 py-8  self-start justify-self-start' data-testid="HomePage">
      <div className=' w-full justify-between flex flex-1'>
        <div className='flex justify-start gap-2'>
          <img src='/arrow_left.png'></img>
          <p className=' font-bold text-2xl text-primary'>Weather</p>
        </div>
        <div className='flex gap-4'>
          <ToggleButton />
          <div className='flex gap-2 ' onClick={logout}>
            <p className='text-text-default dark:text-white'>Logout</p>
            <svg className=' dark:stroke-white stroke-slate-600' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.9541 21.9954H5.9541C5.42367 21.9954 4.91496 21.7846 4.53989 21.4096C4.16482 21.0345 3.9541 20.5258 3.9541 19.9954V5.99536C3.9541 5.46493 4.16482 4.95622 4.53989 4.58115C4.91496 4.20607 5.42367 3.99536 5.9541 3.99536H9.9541" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.9541 17.9954L21.9541 12.9954L16.9541 7.99536" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.9541 12.9954H9.9541" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <DefaultLayout>
        <div className='w-full flex flex-col py-8 gap-4'>
          <SearchInput onSearch={handleSearch} data={myList}></SearchInput>


          {/* <div className='flex gap-4 justify-center items-center'>
            <div className='flex-1'>
              <ReactSearchAutocomplete
                items={histData.hist}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
              />
            </div>

            <button
              type="button"
              onClick={handleSearch}
              className="inline-block self-center max-w-max rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              Search
            </button>


          </div> */}

          <p className='font-bold text-4xl text-primary mt-4'>{city}</p>


          <img className='' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}></img>

          <p className='font-bold text-xl text-primary capitalize'>{data.weather[0].main}</p>


          <div className=' grid grid-cols-3 mt-10'>
            <DataView icon={tempIcon} label='Temp' value={data.main.temp}></DataView>
            <DataView icon={humidityIcon} label='Humidity' value={data.main.humidity}></DataView>
            <DataView icon={windIcon} label='Wind' value={data.wind.speed}></DataView>

          </div>

        </div>


      </DefaultLayout>

    </div>
  );

}
HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
