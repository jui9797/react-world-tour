import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    // state contries
    const [countries, setCountries]= useState([])

    // state visitedCountries
    const [visitedCountries, setVisitedCountries]= useState([])

    // state visitedFlags
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() =>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res =>res.json())
      .then(data =>setCountries(data))
    },[])

    // state visited countries function
    const handleVisitedCountry =country =>{
        console.log('add this to your visited country')
        console.log(country);
        const newVisitedCountries =[...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    // state visited flags function
    const handleVisitedFlags = flag => {
        console.log('flag adding')
        const newVisitedFlags =[...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            {/* make a visited contries list here */}
            <div style={{border:'2px solid blue', backgroundColor:'cyan'}}>
                <h5>Visited countries:{visitedCountries.length}</h5>
                <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
                </ul>
            </div>

            {/* display flags */}
            <div className='flag-container'>
             {
                visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
             }
            </div>

            {/* display countries */}
            <div className='country-container'>
            {
                countries.map(country =><Country key={country.cca3} handleVisitedCountry ={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}  country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;