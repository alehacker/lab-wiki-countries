
import './App.css';
import countries from './countries.json'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"; 
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList allCountries = {countries} />
      <Routes>
         <Route path='/:countryCode' element={<CountryDetails allCountries={countries} />} />  
      </Routes>


    </div>
  );
}

export default App;
