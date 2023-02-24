
import './App.css';
// import countries from './countries.json'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"; 
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

   const [countries, setCountries] = useState([])
   useEffect (()=>{
    
         axios.get('https://ih-countries-api.herokuapp.com/countries')
         .then(response => {

            console.log("response", response.data)

            let sorted = response.data.sort((a,b) => {
               return a.name.common.localeCompare(b.name.common)
            } )

            // let countriesApiResponse = response.data

            setCountries(sorted)
         })
         .catch((err) => console.log(err))
       
   }, [])




   return (
    <div className="App">
      <Navbar />
      <div className="container">
         <div className="row">
            <div className="col-md-6">
               <CountriesList allCountries={countries} />
            </div>
            <div className="col-md-6">
               <Routes>
                  <Route path='/:countryCode' element={<CountryDetails allCountries={countries} />} />  
               </Routes>
            </div>
         </div>
      </div>
    </div>
  );
}

export default App;
