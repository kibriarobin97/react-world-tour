import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry }) => {
    const { name, flags, area, population, region, subregion, capital, cca3 } = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <img src={flags?.png} alt="" />
            <h3>Name: {name?.common}</h3>
            <p>Capital: {capital}</p>
            <p>Area: {area} sqkm</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Sub-Region: {subregion}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button><br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit.'}
        </div>
    );
};

export default Country;