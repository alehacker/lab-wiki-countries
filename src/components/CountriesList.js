import { Link } from "react-router-dom"

const CountriesList = ({allCountries}) => {
   

   return (
      <div className="container">

         <div className="row">

            <div className="col-5" style= {{ maxHeight: '90vh', overflow: 'scroll' }}>

               <div className="list-group">
                 
                  {allCountries.map((country, index) => {
                            return (
                                <Link to={'/' + country.alpha3Code} className="list-group-item list-group-item-action" key={index}>
                                    <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png"} alt="" />
                                    <p>{country.name.common}</p>
                                </Link>
                              )
                  })}
                  
                  
               </div>
            </div>
         </div>
      </div>
   )
}

export default CountriesList