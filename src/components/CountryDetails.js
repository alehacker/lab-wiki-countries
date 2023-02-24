import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import countries from '../countries.json'


const CountryDetails = () =>{
   const [foundCountry, setFoundCountry] = useState(null);
  
  const { countryCode } = useParams();

   useEffect(()=>{
        
      setFoundCountry(countries.find((elm) => elm.alpha3Code === countryCode))
        
    }, [countryCode])

   return(
      <div className="col-7">
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
                {/* <tr> */}
                  {/* <td>Borders</td>
                  <td>
                    <ul>
                    {foundCountry.borders.map((element))

                    }
                      <li><a href="/AND">Andorra</a></li>

                    </ul>
                  </td> */}
                {/* </tr> */}
              </tbody>
            </table>
      </div>
   )
}

export default CountryDetails

