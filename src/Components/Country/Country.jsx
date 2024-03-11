import React, { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    console.log(country)
    
    const{name,flags,population, area,capital,cca3} =country;
    // button a event handler add
    const [visited, setVisited]=useState(false)

    const handleVisited=()=>{
       setVisited(!visited)

    }

    const passWithParam = () =>{
        handleVisitedCountry(country);
    }

    return (
        <div className={`country ${visited? 'visited':'non-visited'}`}>
           <h3 style={{color:visited? 'white':'black'}}>Name:{name?.common}</h3>
           <img src={flags.png} alt="" />
           <p>Population:{population}</p>
           <p>Area:{area}</p> 
           <p>Capital:{capital}</p>
           <p><small>Code:{cca3}</small></p>

            <button onClick={passWithParam}>Mark Visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>

           {/* adding onClick event handler on button */}
           <button onClick={handleVisited}>{visited? 'Visited':'Going'}</button>
           {visited? 'I have visited this country.' :'I want to visit.'}
        </div>
    );
};

export default Country;