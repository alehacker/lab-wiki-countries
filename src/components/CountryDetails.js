import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import countries from '../countries.json'
import axios from 'axios';


const CountryDetails = ({ allCountries }) =>{
   const [foundCountry, setFoundCountry] = useState(null);
  
  const { countryCode } = useParams();


  const countryDetailsFromApi = (code) =>{
   const url = 'https://ih-countries-api.herokuapp.com/countries/' + countryCode
   axios.get(url)
   .then(response => {
      console.log('API call response ===>', response.data)
      let countryInfo =(response.data) 
      console.log(countryInfo)
   })
   .catch((err) => console.log(err))

   
  }


  useEffect(() =>{
   let countryInfo = countryDetailsFromApi(countryCode)
   // console.log('API call ===>', countryInfo)
   setFoundCountry(countryInfo)
      
  }, [countryCode])




  const getCountry = (code) => {
   return allCountries.find((elm) => elm.alpha3Code === code)
  }


   
  useEffect(()=>{
     
     let found = getCountry(countryCode)
      //  let found = allCountries.find((elm) => elm.alpha3Code === countryCode)
        
      setFoundCountry(found)
         console.log("State Found", found)
       console.log("All", allCountries) 
       console.log("code", countryCode)
       console.log("Found", allCountries.find((elm) => elm.alpha3Code == countryCode))
    }, [countryCode])

   return(
      <div className="col-7">
   {
      foundCountry ?  
         <div>
            <img src={"https://flagpedia.net/data/flags/icon/72x54/" + foundCountry.alpha2Code.toLowerCase() + ".png"} alt="" class="img-fluid" />
            <h1>{foundCountry.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>CAPITAL</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                    {foundCountry.borders.map((element) =>{

                     return (
                        <li>
                     <Link to={`/${element}`} >
                     
                     {
                        getCountry(element).name.common

          
                     }</Link>

                        </li>
                     )

                    })}
                    

                    </ul>
                  </td> 
                </tr>
              </tbody>
            </table>

         </div>
      
      : <p>Loading...</p>
   }
      </div>
   )
}

export default CountryDetails



